'use client'

import { Brain, BarChart3, Cpu, Cloud } from 'lucide-react'

export function EngineeringTalentSection() {
  const capabilities = [
    {
      icon: Brain,
      title: 'Core AI & Machine Learning Roles (AI-ML)',
      roles: [
        { name: 'Machine Learning Engineer', desc: 'Designs, builds, and deploys ML models for prediction and automation.' },
        { name: 'AI/ML Architect', desc: 'Designs complex AI systems, bridging business needs and technical reality.' },
        { name: 'AI Research Scientist', desc: 'Develops new algorithms, frameworks, and deep learning techniques (NLP, Computer Vision).' },
        { name: 'Computer Vision Engineer', desc: 'Interprets visual data for autonomous vehicles, face recognition, and medical diagnostics.' },
        { name: 'NLP Engineer', desc: 'Develops systems that understand and generate human language — chatbots, sentiment analysis.' },
        { name: 'MLOps Engineer', desc: 'Bridges ML research and production — deployment, monitoring, and scaling models.' },
        { name: 'Prompt Engineer', desc: 'Designs and optimizes prompts for Large Language Models (LLMs) and Generative AI.' },
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: BarChart3,
      title: 'Data & Analytics Talent (AI/ML Integrated)',
      roles: [
        { name: 'Data Scientist', desc: 'Analyzes and interprets complex datasets to uncover patterns for decision-making.' },
        { name: 'Data Engineer', desc: 'Builds infrastructure and pipelines (ETL) to feed data into AI models.' },
        { name: 'AI Data Analyst', desc: 'Combines traditional data analysis with predictive AI algorithms for strategic insights.' },
        { name: 'Big Data Engineer', desc: 'Manages massive datasets using distributed computing frameworks like Hadoop and Spark.' },
      ],
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Cpu,
      title: 'Specialized & Emerging Technology Roles',
      roles: [
        { name: 'AI Product Manager', desc: 'Defines AI product roadmaps, connecting AI teams with business strategy.' },
        { name: 'AI Ethics Specialist', desc: 'Ensures AI systems are fair, unbiased, and legally compliant.' },
        { name: 'AI Testing/QA Engineer', desc: 'Validates AI model quality, reliability, and performance.' },
        { name: 'Robotics Engineer', desc: 'Designs intelligent robots leveraging AI for perception and action.' },
        { name: 'Blockchain Developer', desc: 'Develops decentralized applications (DApps) and smart contracts.' },
        { name: 'IoT Solutions Architect', desc: 'Orchestrates connected physical devices and digital ecosystems.' },
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Cloud,
      title: 'Core IT & Infrastructure Talent (AI-Enabled)',
      roles: [
        { name: 'Cloud Architect/Engineer', desc: 'Designs and implements scalable, secure cloud infrastructure (AWS, Azure, GCP).' },
        { name: 'DevOps Engineer', desc: 'Manages CI/CD pipelines for rapid, secure software delivery.' },
        { name: 'Full Stack Developer', desc: 'Builds end-to-end applications, often integrating AI features (e.g., MERN stack).' },
        { name: 'Cybersecurity Specialist', desc: 'Protects networks and AI systems from threats.' },
        { name: 'Site Reliability Engineer (SRE)', desc: 'Ensures systems are reliable, scalable, and highly available.' },
      ],
      gradient: 'from-indigo-500 to-blue-500',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-primary-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-primary-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            AI-ML Talent for Enterprise Innovation
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Deploy specialized AI-ML professionals across machine learning, data engineering, emerging technologies, and cloud infrastructure domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all hover:shadow-2xl p-8"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
              
              <div className="relative">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${capability.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <capability.icon size={28} className="text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold mb-5 text-gray-900 dark:text-white">
                  {capability.title}
                </h3>
                
                {/* Roles List with Descriptions */}
                <ul className="space-y-3">
                  {capability.roles.map((role, roleIndex) => (
                    <li key={roleIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                      <span className={`inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-br ${capability.gradient} mt-2 mr-2 flex-shrink-0`}></span>
                      <span>
                        <strong className="text-gray-800 dark:text-gray-200">{role.name}:</strong>{' '}
                        {role.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
