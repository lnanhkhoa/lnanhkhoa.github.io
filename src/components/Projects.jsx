import React, { useState } from 'react'
import { ExternalLink, Github, Calendar } from 'lucide-react'

const Projects = () => {
  const [expandedTech, setExpandedTech] = useState({})

  const toggleTechExpansion = (projectIndex) => {
    setExpandedTech(prev => ({
      ...prev,
      [projectIndex]: !prev[projectIndex]
    }))
  }

  const projects = [
    {
      title: "Internal HRM System",
      company: "Groove Technology",
      description: "An internal system built to streamline the company's human resource operations, including employee profile, leave request management, recognition point, policy chatbox and performance tracking. The goal was to eliminate manual processes, centralize HR data, and improve operational efficiency for the internal HR team.",
      image: "/api/placeholder/400/250",
      technologies: ["KeystoneJS", "NestJS", "GraphQL", "PostgreSQL", "TailwindCSS", "Docker", "GitHub Actions", "BullMQ", "MeltiSearch", "Redis", "AWS ELB", "AWS EC2", "AWS ECR", "AWS CloudFront", "AWS S3", "AWS SQS", "AWS SES", "AWS RDS", "AWS CloudWatch"],
      teamSize: "5-6 people",
      role: "Technical Lead",
      period: "Sep 2023 - May 2025",
      keyFeatures: [
        "Employee profile management",
        "Onboarding, promotion and offboarding flows",
        "Leave Request and Recognition management",
        "Role-based access control",
        "Policy Q&A (we use OpenAI SDK to build Q&A chatbot)",
        "Email template, notifications and approval flows",
        "Sensitive Data Fields (Encryption)",
        "Background jobs in self-hosted trigger dev",
        "Company announcements"
      ],
      liveUrl: "https://ghomehr.groovetechnology.com/",
      featured: true,
      year: "2023-2025"
    },
    {
      title: "MarketBase+",
      company: "Groove Technology",
      description: "The product is an Australian-owned SaaS platform designed to empower sales professionals in Australia. The platform includes a Chrome extension that integrates with LinkedIn to reveal contact information, as well as a comprehensive web application for managing and exporting B2B data. It features tools like DMU Discovery (mapping decision-making units), technographics, and CRM export.",
      image: "/api/placeholder/400/250",
      technologies: ["KeystoneJS", "Prisma", "ElasticSearch", "ReactJS", "TailwindCSS", "Docker", "AWS ELB", "AWS EC2", "AWS ECR", "AWS CloudFront", "AWS S3", "AWS SQS", "AWS SES", "AWS RDS", "AWS CloudWatch"],
      teamSize: "6 people",
      role: "Senior Full Stack Developer",
      period: "Sep 2023 - May 2025",
      keyFeatures: [
        "Chrome extension overlays contact info on LinkedIn profiles",
        "One-click data export to CRMs like Salesforce",
        "Decision-making unit mapping to enhance complex account prospecting",
        "Technographic insights that show company tech stack"
      ],
      liveUrl: "https://www.marketbaseplus.com/",
      featured: true,
      year: "2023-2025"
    },
    {
      title: "Insurance Product",
      company: "Gigacover",
      description: "Gigacover is a Singapore-based insurtech startup providing embedded B2B2C insurance solutions tailored for the gig economy, freelancers, e-commerce, and platform workers across Southeast Asia. Their platform allows businesses to launch digital insurance microsites (including underwriting, KYC, policy issuance, and fulfillment).",
      image: "/api/placeholder/400/250",
      technologies: ["ReactJS", "Bootstrap", "React Native", "Redux", "TypeScript"],
      teamSize: "8-10 people",
      role: "Front-end Developer",
      period: "Nov 2020 - Dec 2021",
      keyFeatures: [
        "Enabled clients to launch insurance microsites",
        "Insurance products designed for company's employees and worker"
      ],
      liveUrl: "https://gigacover.com/",
      featured: true,
      year: "2020-2021"
    },
    {
      title: "Biti's Loyalty",
      company: "Bitis",
      description: "The Biti's Loyalty Mobile App was designed to enhance customer engagement and brand loyalty by providing users with rewards, coupon and promotional campaigns. The app allowed users to track purchases, earn points, and redeem rewards in special holiday both in-store and online.",
      image: "/api/placeholder/400/250",
      technologies: ["Strapi", "ExpressJS", "MySQL", "ReactJS", "Nginx", "BullMQ", "PM2"],
      teamSize: "5 people",
      role: "Back-end Developer",
      period: "Nov 2018 - April 2020",
      keyFeatures: [
        "User Authentication by SMS, Social Login",
        "Coupon Management",
        "User information and receipt migration from core system",
        "Implement the promotion campaign: Lucky Spin Wheel"
      ],
      liveUrl: "http://bitis.com.vn/pages/bitis-loyalty",
      featured: true,
      year: "2018-2020"
    }
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
          
          {/* All Projects */}
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <span className="font-medium">{project.company}</span>
                        <span>•</span>
                        <span>{project.role}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">{project.period}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        {project.teamSize}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.keyFeatures.map((feature, idx) => (
                        <li key={idx} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2">
                          <div className="w-1 h-1 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-1">
                      {(expandedTech[index] ? project.technologies : project.technologies.slice(0, 6)).map((tech, idx) => {
                        const isAWS = tech.startsWith('AWS ')
                        return (
                          <span
                            key={idx}
                            className={`px-2 py-1 rounded text-xs ${
                              isAWS 
                                ? 'bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700'
                                : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                            }`}
                          >
                            {tech}
                          </span>
                        )
                      })}
                      {!expandedTech[index] && project.technologies.length > 6 && (
                        <button
                          onClick={() => toggleTechExpansion(index)}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-xs hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors cursor-pointer"
                        >
                          +{project.technologies.length - 6} more
                        </button>
                      )}
                      {expandedTech[index] && project.technologies.length > 6 && (
                        <button
                          onClick={() => toggleTechExpansion(index)}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-pointer"
                        >
                          Show less
                        </button>
                      )}
                    </div>
                  </div>
                  
                  {/* Live Demo Button */}
                  {project.liveUrl && (
                    <div className="mt-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Live Project
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
