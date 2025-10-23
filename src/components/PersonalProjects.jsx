import React, { useState } from 'react'
import { ExternalLink, Github, Heart } from 'lucide-react'

const PersonalProjects = () => {
  const [expandedTech, setExpandedTech] = useState({})

  const toggleTechExpansion = (projectIndex) => {
    setExpandedTech((prev) => ({
      ...prev,
      [projectIndex]: !prev[projectIndex]
    }))
  }

  const personalProjects = [
    {
      title: 'Lovin U',
      description:
        'A platform that allows couples to create and share their wedding invitations and websites. Beautiful, ready-made templates with simple customization tools to edit details such as names, dates, venues, and photos.',
      image: '/api/placeholder/400/250',
      technologies: [
        'Vite',
        'ReactJS',
        'TailwindCSS',
        'Shadcn UI',
        'Supabase',
        'Resend',
        'QR Code',
        'Website Editor Template'
      ],
      keyFeatures: [
        'Beautiful, ready-made templates for wedding websites and invitations',
        'Simple customization tools to edit details such as names, dates, venues, and photos',
        'Instant page publishing with a unique link for each couple',
        'Digital invitation sharing via email or QR code',
        'RSVP management, where guests can confirm attendance directly on the page',
        'Additional features such as guest messages, love stories, gift registries, and event reminders'
      ],
      liveUrl: 'https://lovinu.vercel.app/',
      githubUrl: null,
      status: 'In Development',
      year: '2025'
    },
    {
      title: 'Voca Mind',
      description:
        'A vocabulary learning app that helps users learn new words and phrasal verbs with AI. Features comprehensive vocabulary learning with definitions, examples, pronunciation guides, and intelligent spaced repetition algorithm for effective learning.',
      image: '/api/placeholder/400/250',
      technologies: [
        'Vite',
        'React',
        'TailwindCSS',
        'Shadcn UI',
        'Prisma',
        'React Hook Form',
        'React Router',
        'React Photo View'
      ],
      keyFeatures: [
        'Comprehensive vocabulary learning with definitions, examples, and pronunciation',
        'Support multiple word types: single words, phrasal verbs, phrases, idioms, and collocations',
        'Track user learning progress with intelligent spaced repetition algorithm',
        'Organize vocabulary into topics and collections for structured learning',
        'Support multiple difficulty levels (A1-C2 CEFR framework)',
        'Include pronunciation guides with IPA notation',
        'Display word families and related words (synonyms, antonyms)',
        'Generate example sentences with translations for context learning',
        'Dark mode and responsive design'
      ],
      liveUrl: null,
      githubUrl: null,
      status: 'In Development',
      year: '2025'
    }
  ]

  return (
    <section id="personal-projects" className="p-6 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 flex items-center justify-center gap-3">
              <Heart className="w-8 h-8 text-pink-500" />
              Personal Projects
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Side projects I'm building with passion and creativity
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {personalProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
              >
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">{project.title}</h3>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          {project.status}
                        </span>
                        <span className="text-slate-500">•</span>
                        <span className="text-slate-500">{project.year}</span>
                      </div>
                    </div>
                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-pink-600 hover:bg-pink-700 text-white rounded-lg text-xs font-medium transition-colors duration-200"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        {project.liveUrl ? 'Live' : 'Not-Ready'}
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-800 hover:bg-slate-900 text-white rounded-lg text-xs font-medium transition-colors duration-200"
                      >
                        <Github className="w-3.5 h-3.5" />
                        {project.githubUrl ? 'Code' : 'Private'}
                      </a>
                    </div>
                  </div>

                  <p className="text-slate-700 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.keyFeatures.map((feature, idx) => (
                        <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                          <div className="w-1 h-1 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-900 mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-1">
                      {(expandedTech[index]
                        ? project.technologies
                        : project.technologies.slice(0, 6)
                      ).map((tech, idx) => {
                        const isSupabase = tech.startsWith('Supabase ')
                        return (
                          <span
                            key={idx}
                            className={`px-2 py-1 rounded text-xs ${
                              isSupabase
                                ? 'bg-green-100 text-green-700 border border-green-200'
                                : 'bg-slate-100 text-slate-700'
                            }`}
                          >
                            {tech}
                          </span>
                        )
                      })}
                      {!expandedTech[index] && project.technologies.length > 6 && (
                        <button
                          onClick={() => toggleTechExpansion(index)}
                          className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs hover:bg-blue-200 transition-colors cursor-pointer"
                        >
                          +{project.technologies.length - 6} more
                        </button>
                      )}
                      {expandedTech[index] && project.technologies.length > 6 && (
                        <button
                          onClick={() => toggleTechExpansion(index)}
                          className="px-2 py-1 bg-green-50 text-cyan-800 rounded text-xs hover:bg-gray-200 transition-colors cursor-pointer"
                        >
                          Show less
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PersonalProjects
