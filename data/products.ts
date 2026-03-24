interface Feature {
  title: string;
  description: string;
}

interface UseCase {
  title: string;
  description: string;
}

interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface CTA {
  text: string;
  url?: string;
  subtext?: string;
}

interface ServiceMode {
  mode: string;
  title: string;
  description: string;
  features: string[];
  cta: string;
  highlight: boolean;
}

export interface Product {
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  icon: string;
  category: 'ai' | 'saas';
  externalUrl?: string;
  serviceModes?: ServiceMode[];
  features: Feature[];
  useCases: UseCase[];
  howItWorks: HowItWorksStep[];
  faqs: FAQ[];
  primaryCTA: CTA;
  secondaryCTA: CTA;
}

export const products: Product[] = [
  {
    slug: "ai-video-translator",
    title: "AI Video Translator",
    tagline: "Break Language Barriers in Global Business",
    shortDescription:
      "Instantly translate video content into multiple languages with AI-powered voice cloning and lip-sync technology.",
    icon: "🎬",
    category: 'ai',
    features: [
      {
        title: "Multi-Language Support",
        description:
          "Translate videos into 50+ languages including Hindi, Marathi, Bengali, Tamil, Telugu, Kannada, and Malayalam",
      },
      {
        title: "AI Voice Cloning",
        description:
          "Maintains original speaker's voice characteristics and emotions in translated audio tracks",
      },
      {
        title: "Lip-Sync Technology",
        description:
          "Advanced AI synchronizes speaker's lip movements with translated audio for natural viewing",
      },
      {
        title: "Subtitle Generation",
        description:
          "Automatic subtitle creation and synchronization in target languages with customizable styling",
      },
    ],
    useCases: [
      {
        title: "Marketing & Sales",
        description:
          "Create multilingual product demos, promotional videos, and sales presentations for diverse markets",
      },
      {
        title: "Training & Education",
        description:
          "Expand educational reach by translating online courses and webinars into regional languages",
      },
      {
        title: "Corporate Communications",
        description:
          "Break down language barriers in internal communications, announcements, and training materials",
      },
      {
        title: "Content Creation",
        description:
          "Reach global audiences by translating YouTube videos, podcasts, and social media content",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Upload Your Video",
        description:
          "Upload video files in any format (MP4, MOV, AVI, WebM). Our system automatically detects language and quality",
      },
      {
        step: 2,
        title: "Select Target Languages",
        description:
          "Choose desired output languages and customize voice preferences and subtitle options",
      },
      {
        step: 3,
        title: "Download Translated Video",
        description:
          "Get fully translated videos with dubbed audio, lip-synced visuals, and synchronized subtitles",
      },
    ],
    faqs: [
      {
        question: "Which video formats are supported?",
        answer:
          "We support MP4, MOV, AVI, WebM, MKV, FLV and other common formats. Maximum file size is 2GB per video.",
      },
      {
        question: "How long does translation take?",
        answer:
          "Processing time depends on video length and selected features. Typically 5 mins to 1 hour for standard processing.",
      },
      {
        question: "Can I edit the translated content?",
        answer:
          "Yes, all plans include basic editing tools. You can adjust subtitles, audio levels, and video segments after translation.",
      },
    ],
    primaryCTA: {
      text: "Get Started",
      url: "https://wa.me/918148146785?text=Hi%20Infodra%20Team%2C%20I%20need%20demo%20for%20AI%20Video%20Translator.%20Please%20share%20details.",
    },
    secondaryCTA: {
      text: "Schedule Demo",
      url: "/contact",
    },
  },
  {
    slug: "ai-user-manual-generation",
    title: "AI User Manual Generation",
    tagline: "Automate Documentation with AI Precision",
    shortDescription:
      "Generate comprehensive user manuals, product documentation, and technical guides automatically using advanced AI.",
    icon: "📖",
    category: 'ai',
    features: [
      {
        title: "Automatic Content Generation",
        description:
          "AI analyzes product specifications and generates structured documentation with proper formatting",
      },
      {
        title: "Multi-Format Output",
        description:
          "Export documents in PDF, DOCX, HTML, and Markdown formats for various use cases",
      },
      {
        title: "Brand Customization",
        description:
          "Apply your brand guidelines, logos, and styling to maintain consistent documentation",
      },
      {
        title: "Version Control",
        description:
          "Track documentation changes, manage revisions, and maintain historical versions",
      },
    ],
    useCases: [
      {
        title: "Product Documentation",
        description:
          "Create user guides, quick start guides, and technical manuals for products and software",
      },
      {
        title: "SOP & Process Documentation",
        description:
          "Document standard operating procedures, workflows, and business processes efficiently",
      },
      {
        title: "API & Technical Documentation",
        description:
          "Generate developer documentation, API references, and integration guides automatically",
      },
      {
        title: "Training Materials",
        description:
          "Produce employee training manuals, onboarding guides, and certification materials",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Upload Source Materials",
        description:
          "Provide product specifications, design documents, screenshots, or existing content",
      },
      {
        step: 2,
        title: "Customize & Configure",
        description:
          "Select output format, language preference, and documentation structure",
      },
      {
        step: 3,
        title: "Generate & Distribute",
        description:
          "AI generates complete documentation. Review, edit as needed, and export in your preferred format",
      },
    ],
    faqs: [
      {
        question: "How accurate is the AI-generated content?",
        answer:
          "Our AI achieves 95%+ accuracy with industry-specific training. All content is review-ready and can be edited before final output.",
      },
      {
        question: "Can I maintain brand voice and style?",
        answer:
          "Yes, you can customize tone, terminology, brand guidelines, and content style. AI learns and adapts to your preferences.",
      },
      {
        question: "What file formats can I upload?",
        answer:
          "We accept PDF, DOCX, PPTX, images (PNG, JPG), video, audio files, and plain text. Maximum total file size: 500MB.",
      },
    ],
    primaryCTA: {
      text: "Get started",
      url: "https://wa.me/918148146785?text=Hi%20Infodra%20Team%2C%20I%20need%20demo%20for%20AI%20User%20Manual%20Generation.%20Please%20share%20details.",
    },
    secondaryCTA: {
      text: "View Demo",
      url: "/contact",
    },
  },
  {
    slug: "ai-document-translator",
    title: "AI Document Translator",
    tagline: "Translate Business Documents Instantly with AI Precision",
    shortDescription:
      "Automatically translate business documents, contracts, and reports into multiple languages with advanced AI.",
    icon: "📄",
    category: 'ai',
    features: [
      {
        title: "Multi-Language Support",
        description:
          "Translate documents into 50+ languages with cultural context and local business terminology",
      },
      {
        title: "Format Preservation",
        description:
          "Maintains original document formatting, tables, images, and layout structure",
      },
      {
        title: "Industry-Specific Translation",
        description:
          "Specialized terminology for legal, financial, technical, and medical documents",
      },
      {
        title: "Bulk Processing",
        description:
          "Translate multiple documents simultaneously with batch processing capabilities",
      },
    ],
    useCases: [
      {
        title: "Legal & Contract Translation",
        description:
          "Translate contracts, agreements, and legal documents for international business",
      },
      {
        title: "Business Reports",
        description:
          "Convert quarterly reports, financial statements, and business proposals for global stakeholders",
      },
      {
        title: "Marketing Materials",
        description:
          "Localize brochures, product manuals, and sales presentations for regional markets",
      },
      {
        title: "Technical Documentation",
        description:
          "Translate technical specifications, engineering documents, and user manuals accurately",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Upload Documents",
        description:
          "Upload single or multiple documents in PDF, DOCX, XLSX, or PPTX format",
      },
      {
        step: 2,
        title: "Select Languages & Options",
        description:
          "Choose target languages, translation quality level, and formatting preferences",
      },
      {
        step: 3,
        title: "Download Translations",
        description:
          "Get professionally translated documents with original formatting preserved",
      },
    ],
    faqs: [
      {
        question: "What document formats are supported?",
        answer:
          "We support PDF, Microsoft Word (DOCX), Excel (XLSX), PowerPoint (PPT), images, and plain text files.",
      },
      {
        question: "How accurate are the translations?",
        answer:
          "Our AI achieves 95-98% accuracy for standard documents. Premium quality option includes human proofreading.",
      },
      {
        question: "How long does document translation take?",
        answer:
          "Most documents are translated within 5-30 minutes depending on length and complexity.",
      },
    ],
    primaryCTA: {
      text: "Translate Now",
      url: "https://wa.me/918148146785?text=Hi%20Infodra%20Team%2C%20I%20need%20demo%20for%20AI%20Document%20Translator.%20Please%20share%20details.",
    },
    secondaryCTA: {
      text: "Request Quote",
      url: "/contact",
    },
  },
  {
    slug: "bizlead-database",
    title: "BiZlead Database",
    category: 'saas',
    externalUrl: "https://www.bizlead.infodra.ai/home",
    tagline: "Access India's Most Comprehensive B2B Business Database",
    shortDescription:
      "Discover verified business leads, company information, and contact details for decision makers.",
    icon: "💼",
    features: [
      {
        title: "Million+ Business Records",
        description:
          "Access verified data on Indian companies, businesses, and decision makers across all sectors",
      },
      {
        title: "Advanced Filtering",
        description:
          "Filter leads by industry, company size, revenue, location, and role to find ideal customers",
      },
      {
        title: "Real-Time Verification",
        description:
          "All contact information is verified and updated regularly to ensure accuracy",
      },
      {
        title: "Export Flexibility",
        description:
          "Export leads in multiple formats for CRM integration and email campaigns",
      },
    ],
    useCases: [
      {
        title: "Sales Prospecting",
        description:
          "Identify and reach verified decision makers in target companies for B2B sales",
      },
      {
        title: "Market Research",
        description:
          "Analyze business landscape, competitor presence, and market opportunities",
      },
      {
        title: "Partner Identification",
        description:
          "Find potential partners, distributors, and channel partners for business expansion",
      },
      {
        title: "Lead Generation",
        description:
          "Generate qualified B2B leads for marketing campaigns and sales outreach",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Define Your Target",
        description:
          "Specify industry, company size, location, and other criteria using advanced filters",
      },
      {
        step: 2,
        title: "Review & Select Leads",
        description:
          "Browse verified business records with company details and contact information",
      },
      {
        step: 3,
        title: "Export & Outreach",
        description:
          "Export leads to CSV, Excel, or integrate with your CRM for immediate outreach",
      },
    ],
    faqs: [
      {
        question: "How current is the database information?",
        answer:
          "Our database is updated daily with new company registrations and contact updates. We maintain 98%+ accuracy.",
      },
      {
        question: "Can I use this data for cold calling or emails?",
        answer:
          "Yes, all leads are verified for compliance with Indian telemarketing and email regulations.",
      },
      {
        question: "What industries are covered?",
        answer:
          "We cover all major industries: IT, manufacturing, retail, healthcare, finance, logistics, and more with 500+ sub-categories.",
      },
    ],
    primaryCTA: {
      text: "View Pricing",
      url: "https://www.bizlead.infodra.ai",
    },
    secondaryCTA: {
      text: "Contact Sales",
      url: "https://wa.me/918148146785?text=Hi%20Infodra%20Team%2C%20I%20need%20information%20about%20BiZlead%20Database.%20Please%20share%20details.",
    },
  },
  {
    slug: "ai-voice-generation-studio",
    title: "AI Voice Generation Studio",
    category: 'ai',
    tagline: "Create natural AI voiceovers or securely clone your own voice",
    shortDescription:
      "A professional AI platform that allows businesses and creators to generate high-quality voiceovers using platform AI voices or legally authorized custom voice cloning.",
    icon: "🎙️",
    serviceModes: [
      {
        mode: "AI Platform Voices",
        title: "🔹 AI Platform Voices (Public Plans)",
        description: "Use professionally generated AI voices provided by the platform",
        features: [
          "Use professionally generated AI voices provided by the platform",
          "No voice cloning required",
          "Instant access after signup",
          "Suitable for content creators, educators, businesses",
          "Safe for general public usage",
        ],
        cta: "Start with AI Voices",
        highlight: false,
      },
      {
        mode: "Custom Voice Cloning",
        title: "🔸 Custom Voice Cloning (Enterprise Only)",
        description: "Users can clone only their own voice OR a voice they have legal authorization for",
        features: [
          "Users can clone only their own voice",
          "OR a voice they have legal authorization for",
          "Requires signed MoU/consent verification",
          "Manual approval by Infodra team",
          "Designed for enterprises, media, training teams",
        ],
        cta: "Request Custom Voice Access",
        highlight: true,
      },
    ],
    features: [
      {
        title: "Voice Management",
        description: "Record your own voice directly in browser, upload voice samples, and organize multiple voice profiles",
      },
      {
        title: "Script Input",
        description: "Type or paste scripts, upload script files (TXT, CSV, JSON), and use structured Q&A conversational format",
      },
      {
        title: "Audio Generation",
        description: "Generate natural AI voiceovers, choose AI voice or approved custom voice, and control tone and pacing",
      },
      {
        title: "History & File Management",
        description: "View past generated audios, download/export audio files, and search and filter previous projects",
      },
    ],
    useCases: [
      {
        title: "Financial Services Voice Assistants",
        description: "Create professional voice assistants and IVR systems for banking and financial institutions",
      },
      {
        title: "Media & Broadcasting Narration",
        description: "Generate high-quality narration for documentaries, news broadcasts, and multimedia content",
      },
      {
        title: "Education & E-learning Voiceovers",
        description: "Create engaging educational content with natural-sounding voice narration for online courses",
      },
      {
        title: "Enterprise Training Materials",
        description: "Produce training videos and instructional content for employee onboarding and development",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Choose AI Voice or Request Custom Voice Access",
        description: "Select from our library of professional AI voices or request custom voice cloning with proper authorization",
      },
      {
        step: 2,
        title: "Enter or Upload Your Script",
        description: "Type your script, upload text files (TXT, CSV, JSON), or use structured Q&A format for conversational audio",
      },
      {
        step: 3,
        title: "Generate and Download Professional AI Audio",
        description: "Generate studio-quality voiceovers with natural tone and pacing, then download and export your audio files",
      },
    ],
    faqs: [
      {
        question: "Can I use AI Platform Voices for commercial projects?",
        answer:
          "Yes, all AI Platform Voices are licensed for commercial use. The licensing terms apply based on your subscription plan. For Enterprise plans, custom arrangements can be made.",
      },
      {
        question: "What does custom voice cloning require?",
        answer:
          "Custom voice cloning requires a voice sample (typically 2-3 minutes), signed consent/MoU from the voice owner, and manual approval by our Infodra team. Processing typically takes 3-5 business days.",
      },
      {
        question: "Can I clone someone else's voice?",
        answer:
          "Only with their explicit written consent or a signed MoU. Using voice cloning for impersonation, fraud, or deception is strictly prohibited and will result in immediate account suspension.",
      },
      {
        question: "What audio formats can I export?",
        answer:
          "We support MP3, WAV, OGG, and AAC formats. You can also integrate directly with platforms like YouTube, podcast hosting, and social media.",
      },
    ],
    primaryCTA: {
      text: "Explore Key Features",
      url: "#features",
    },
    secondaryCTA: {
      text: "WhatsApp",
      url: "https://wa.me/918148146785",
    },
  },
  {
    slug: "ai-prediction-ml-platforms",
    title: "AI Prediction / ML Platforms",
    category: 'ai',
    tagline: "Advanced Machine Learning & Predictive Analytics for Business Intelligence",
    shortDescription:
      "Build, deploy, and manage custom machine learning models for predictive analytics, forecasting, and intelligent decision-making. Comprehensive ML platform designed for Indian enterprises with no-code and low-code options.",
    icon: "🤖",
    features: [
      {
        title: "Pre-Built ML Models",
        description:
          "Access 50+ pre-trained machine learning models for demand forecasting, customer churn prediction, sales forecasting, and risk assessment",
      },
      {
        title: "No-Code ML Studio",
        description:
          "Drag-and-drop interface to build custom ML models without coding experience. Train, test, and deploy models in minutes",
      },
      {
        title: "Advanced Data Processing",
        description:
          "Automated data cleaning, feature engineering, and data normalization. Handle missing values and outliers intelligently",
      },
      {
        title: "Real-Time Predictions",
        description:
          "Deploy models for real-time predictions via APIs. Get instant insights for live business data and streaming inputs",
      },
    ],
    useCases: [
      {
        title: "Demand Forecasting & Inventory Management",
        description:
          "Predict product demand, optimize inventory levels, and reduce stockouts for retail and manufacturing businesses",
      },
      {
        title: "Customer Churn Prediction",
        description:
          "Identify at-risk customers, predict churn probability, and trigger retention campaigns for SaaS and subscription businesses",
      },
      {
        title: "Sales Forecasting & Revenue Prediction",
        description:
          "Forecast sales pipeline, predict revenue, and optimize sales strategies for accurate business planning",
      },
      {
        title: "Credit Risk & Fraud Detection",
        description:
          "Assess credit risk, detect fraudulent transactions, and identify suspicious patterns for financial institutions",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Connect Data Sources",
        description:
          "Connect databases, data warehouses, CSV files, or APIs. Securely import historical data for model training",
      },
      {
        step: 2,
        title: "Configure & Train Model",
        description:
          "Select prediction type, choose algorithm, set parameters, and train model on your data. Auto-optimization available",
      },
      {
        step: 3,
        title: "Deploy & Predict",
        description:
          "Deploy model to production, integrate via API, and start making real-time predictions for business decisions",
      },
    ],
    faqs: [
      {
        question: "Do I need data science expertise to use this platform?",
        answer:
          "No, the no-code studio is designed for business users. However, data scientists can also use the Python SDK and advanced features for custom model development.",
      },
      {
        question: "What size datasets can I handle?",
        answer:
          "Starter handles up to 1M rows, Business up to 100M rows, Enterprise unlimited. Data is processed in-memory for fast training.",
      },
      {
        question: "How accurate are the predictions?",
        answer:
          "Accuracy depends on data quality and model selection. Average accuracy is 85-95% for well-structured data. We provide validation metrics for all models.",
      },
      {
        question: "Can I integrate with my existing systems?",
        answer:
          "Yes, we offer REST APIs, webhooks, SQL connectors, and integrations with popular tools like Salesforce, SAP, and Tableau.",
      },
    ],
    primaryCTA: {
      text: "Explore Key Features",
      url: "#features",
    },
    secondaryCTA: {
      text: "WhatsApp",
      url: "https://wa.me/918148146785",
    },
  },
  {
    slug: "stafftrack",
    title: "StaffTrack",
    category: 'saas',
    externalUrl: "https://www.stafftrack.infodra.ai/",
    tagline: "Smart GPS Attendance & Workforce Tracking",
    shortDescription:
      "Track employee attendance automatically using location-based geofencing. Monitor workforce presence, verify work locations, and generate real-time attendance reports through a secure browser-based platform.",
    icon: "👥",
    features: [
      {
        title: "GPS-Based Attendance",
        description:
          "Employees check in using real-time GPS location verification. System captures coordinates and validates presence at work location",
      },
      {
        title: "Geofence Location Control",
        description:
          "Each employee can be assigned a specific work location and allowed radius. Check-ins outside geofence are automatically rejected",
      },
      {
        title: "Automatic Attendance Logging",
        description:
          "Check-in and check-out times are recorded automatically with GPS coordinates, timestamp, and location accuracy verification",
      },
      {
        title: "Employee Location Verification",
        description:
          "Verify employee presence at assigned job sites in real-time. Track location compliance and attendance patterns",
      },
      {
        title: "Admin Dashboard",
        description:
          "View attendance reports, employee activity, and workforce insights. Manage multiple employees across different locations",
      },
      {
        title: "Attendance Reports",
        description:
          "Generate daily, weekly, and monthly attendance reports with export to Excel and PDF formats for payroll processing",
      },
      {
        title: "Multi-Employee Tracking",
        description:
          "Manage attendance for multiple employees across different work locations with customizable geofence settings for each site",
      },
      {
        title: "Secure Role-Based Access",
        description:
          "Role-based access control for employees and administrators with secure login and data encryption for privacy protection",
      },
    ],
    useCases: [
      {
        title: "Field Engineers & Technicians",
        description:
          "Track field engineers visiting client sites, verify service location, and monitor time spent at each job location",
      },
      {
        title: "Construction Workers",
        description:
          "Monitor attendance of construction workers at job sites, ensure on-time arrival, and track working hours accurately",
      },
      {
        title: "Sales Teams & Field Staff",
        description:
          "Track sales team visits to customer locations, verify field presence, and optimize territory coverage",
      },
      {
        title: "Remote & Distributed Workforce",
        description:
          "Manage attendance for remote employees working from home or co-working spaces with flexible geofence zones",
      },
      {
        title: "Site-Based Employees",
        description:
          "Track attendance for employees working at warehouses, factories, retail stores, and other fixed work locations",
      },
      {
        title: "Security & Patrol Staff",
        description:
          "Monitor security personnel patrol routes, verify checkpoint visits, and ensure coverage of assigned areas",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Employee Login",
        description:
          "Employee logs into the browser-based attendance system using secure credentials on mobile or desktop device",
      },
      {
        step: 2,
        title: "Click Check-In",
        description:
          "Employee clicks 'Check In' button at the start of workday. System requests location permission if not granted",
      },
      {
        step: 3,
        title: "GPS Capture",
        description:
          "Browser captures GPS coordinates using HTML5 Geolocation API with accuracy and timestamp information",
      },
      {
        step: 4,
        title: "Geofence Validation",
        description:
          "System verifies employee location against assigned geofence radius and validates attendance eligibility",
      },
      {
        step: 5,
        title: "Attendance Recorded",
        description:
          "Attendance is recorded with location, time, and accuracy data. Confirmation shown to employee and visible in admin dashboard",
      },
      {
        step: 6,
        title: "Check-Out Process",
        description:
          "Employee checks out at end of workday. System calculates working hours and updates attendance records automatically",
      },
    ],
    faqs: [
      {
        question: "How accurate is GPS-based attendance tracking?",
        answer:
          "GPS accuracy typically ranges from 5-50 meters depending on device and environment. Our system requires minimum 50m accuracy for check-in approval. Indoor locations may require WiFi/cell tower triangulation.",
      },
      {
        question: "Can employees fake their location?",
        answer:
          "The system detects GPS spoofing, mock locations, and VPN usage. Additional verification layers include device fingerprinting and behavioral analysis to prevent fraudulent check-ins.",
      },
      {
        question: "Is employee location data secure and private?",
        answer:
          "Yes, location data is encrypted in transit and at rest. We only capture location during check-in/check-out, not continuous tracking. Data is stored securely and accessible only to authorized admins.",
      },
      {
        question: "Does this work offline?",
        answer:
          "Check-in requires internet connectivity to verify location and record attendance. However, the system can queue check-ins offline and sync when connection is restored.",
      },
      {
        question: "What if GPS is not available at work location?",
        answer:
          "For indoor or GPS-challenged locations, system can use WiFi-based location or manual admin override with approval workflow. Admins can also set flexible geofence parameters.",
      },
      {
        question: "How many employees can be tracked?",
        answer:
          "Starter plan supports 50 employees, Business plan supports 500 employees, and Enterprise plan has unlimited employees with custom geofence zones and advanced workforce analytics.",
      },
    ],
    primaryCTA: {
      text: "Pricing",
      url: "https://www.stafftrack.infodra.ai",
    },
    secondaryCTA: {
      text: "View Features",
      url: "#features",
    },
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((product) => product.slug);
}
