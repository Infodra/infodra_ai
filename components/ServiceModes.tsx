interface ServiceMode {
  mode: string;
  title: string;
  description: string;
  features: string[];
  cta: string;
  highlight: boolean;
}

interface ServiceModesProps {
  serviceModes: ServiceMode[];
}

export function ServiceModes({ serviceModes }: ServiceModesProps) {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Service Modes
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose the service option that best fits your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceModes.map((mode, index) => (
            <div
              key={index}
              className={`relative rounded-xl p-8 border-2 transition-all duration-300 ${
                mode.highlight
                  ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-xl scale-105"
                  : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg"
              }`}
            >
              {mode.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Recommended
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {mode.title}
                </h3>
                <p className="text-sm uppercase tracking-wide text-blue-600 dark:text-blue-400 font-semibold">
                  {mode.mode}
                </p>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                {mode.description}
              </p>

              <ul className="space-y-3 mb-8">
                {mode.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition ${
                  mode.highlight
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                {mode.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
