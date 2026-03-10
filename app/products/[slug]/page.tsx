import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/Hero";
import { UseCases } from "@/components/UseCases";
import { HowItWorks } from "@/components/HowItWorks";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { ServiceModes } from "@/components/ServiceModes";
import { getProductBySlug, getAllProductSlugs } from "@/data/products";
import { Footer } from "@/components/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.title} | Infodra AI Solutions`,
    description: product.shortDescription,
    openGraph: {
      title: product.title,
      description: product.shortDescription,
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  const slugs = getAllProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Color schemes for different products
  const colorSchemes: Record<string, any> = {
    'ai-video-translator': {
      bg: 'from-white via-blue-50/30 to-indigo-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950/50',
      orb1: 'bg-blue-300 dark:bg-blue-900',
      orb2: 'bg-indigo-300 dark:bg-indigo-900',
      orb3: 'bg-blue-400 dark:bg-blue-800'
    },
    'ai-user-manual-generation': {
      bg: 'from-white via-violet-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-violet-950/50',
      orb1: 'bg-violet-300 dark:bg-violet-900',
      orb2: 'bg-purple-300 dark:bg-purple-900',
      orb3: 'bg-violet-400 dark:bg-violet-800'
    },
    'ai-document-translator': {
      bg: 'from-white via-cyan-50/30 to-sky-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-cyan-950/50',
      orb1: 'bg-cyan-300 dark:bg-cyan-900',
      orb2: 'bg-sky-300 dark:bg-sky-900',
      orb3: 'bg-cyan-400 dark:bg-cyan-800'
    },
    'bizlead-database': {
      bg: 'from-white via-emerald-50/30 to-teal-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-emerald-950/50',
      orb1: 'bg-emerald-300 dark:bg-emerald-900',
      orb2: 'bg-teal-300 dark:bg-teal-900',
      orb3: 'bg-emerald-400 dark:bg-emerald-800'
    },
    'ai-voice-generation-studio': {
      bg: 'from-white via-rose-50/30 to-pink-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-rose-950/50',
      orb1: 'bg-rose-300 dark:bg-rose-900',
      orb2: 'bg-pink-300 dark:bg-pink-900',
      orb3: 'bg-rose-400 dark:bg-rose-800'
    },
    'ai-prediction-ml-platforms': {
      bg: 'from-white via-indigo-50/30 to-blue-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950/50',
      orb1: 'bg-indigo-300 dark:bg-indigo-900',
      orb2: 'bg-blue-300 dark:bg-blue-900',
      orb3: 'bg-indigo-400 dark:bg-indigo-800'
    },
    'stafftrack': {
      bg: 'from-white via-orange-50/30 to-amber-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-orange-950/50',
      orb1: 'bg-orange-300 dark:bg-orange-900',
      orb2: 'bg-amber-300 dark:bg-amber-900',
      orb3: 'bg-orange-400 dark:bg-orange-800'
    }
  };

  const colorScheme = colorSchemes[slug] || {
    bg: 'from-white via-cyan-50/30 to-blue-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-cyan-950/50',
    orb1: 'bg-cyan-300 dark:bg-cyan-900',
    orb2: 'bg-blue-300 dark:bg-blue-900',
    orb3: 'bg-cyan-400 dark:bg-cyan-800'
  };

  return (
    <main>
      {/* Hero Section */}
      <Hero
        title={product.title}
        description={product.tagline}
        primaryCTA={{
          text: product.primaryCTA.text,
          href: product.primaryCTA.url || "#contact",
        }}
        secondaryCTA={{
          text: product.secondaryCTA.text,
          href: product.secondaryCTA.url || "#",
        }}
        colorScheme={colorScheme}
      />

      {/* Features Section with Descriptions */}
      <section id="features" className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Key Features
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Powerful capabilities designed to solve your business challenges
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.features.map((feature, index) => {
              const colorSchemes = [
                {
                  bg: 'from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30',
                  border: 'border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600',
                  icon: 'from-blue-600 to-indigo-600',
                  hover: 'group-hover:text-blue-600 dark:group-hover:text-blue-400'
                },
                {
                  bg: 'from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30',
                  border: 'border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600',
                  icon: 'from-purple-600 to-pink-600',
                  hover: 'group-hover:text-purple-600 dark:group-hover:text-purple-400'
                },
                {
                  bg: 'from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30',
                  border: 'border-emerald-200 dark:border-emerald-800 hover:border-emerald-400 dark:hover:border-emerald-600',
                  icon: 'from-emerald-600 to-teal-600',
                  hover: 'group-hover:text-emerald-600 dark:group-hover:text-emerald-400'
                },
                {
                  bg: 'from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30',
                  border: 'border-orange-200 dark:border-orange-800 hover:border-orange-400 dark:hover:border-orange-600',
                  icon: 'from-orange-600 to-red-600',
                  hover: 'group-hover:text-orange-600 dark:group-hover:text-orange-400'
                },
                {
                  bg: 'from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30',
                  border: 'border-cyan-200 dark:border-cyan-800 hover:border-cyan-400 dark:hover:border-cyan-600',
                  icon: 'from-cyan-600 to-blue-600',
                  hover: 'group-hover:text-cyan-600 dark:group-hover:text-cyan-400'
                },
                {
                  bg: 'from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30',
                  border: 'border-violet-200 dark:border-violet-800 hover:border-violet-400 dark:hover:border-violet-600',
                  icon: 'from-violet-600 to-purple-600',
                  hover: 'group-hover:text-violet-600 dark:group-hover:text-violet-400'
                }
              ];
              const colors = colorSchemes[index % colorSchemes.length];
              
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${colors.bg} rounded-xl p-8 border ${colors.border} hover:shadow-lg transition-all duration-300 group`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className={`flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r ${colors.icon} group-hover:shadow-lg transition-shadow`}>
                        <span className="text-2xl text-white">✓</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-bold text-gray-900 dark:text-white mb-2 ${colors.hover} transition`}>
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Modes Section */}
      {product.serviceModes && product.serviceModes.length > 0 && (
        <ServiceModes serviceModes={product.serviceModes} />
      )}

      {/* Use Cases Section */}
      {product.useCases && product.useCases.length > 0 && (
        <UseCases useCases={product.useCases} />
      )}

      {/* How It Works Section */}
      {product.howItWorks && product.howItWorks.length > 0 && (
        <HowItWorks items={product.howItWorks} />
      )}

      {/* FAQ Section */}
      {product.faqs && product.faqs.length > 0 && (
        <FAQ items={product.faqs} />
      )}

      {/* CTA Section */}
      <CTASection
        title={`Ready to Get Started with ${product.title}?`}
        description={`${product.tagline} - Start your journey today`}
        primaryCTA={{
          text: product.primaryCTA.text,
          href: product.primaryCTA.url || "#",
        }}
        secondaryCTA={{
          text: product.secondaryCTA.text,
          href: product.secondaryCTA.url || "#",
        }}
        showBadge={false}
        showTrustIndicators={true}
      />
      <Footer />
    </main>
  );
}
