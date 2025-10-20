import React from "react"
import { Server, Code, Database, Cloud } from "lucide-react"

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend",
      icon: <Server className="w-5 h-5" />,
      skills: [
        { name: "Node.js", level: 95 },
        { name: "NestJS", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "GraphQL", level: 85 },
        { name: "REST APIs", level: 92 },
      ],
    },
    {
      title: "Frontend",
      icon: <Code className="w-5 h-5" />,
      skills: [
        { name: "React.JS", level: 85 },
        { name: "Next.JS", level: 85 },
        { name: "JavaScript", level: 85 },
        { name: "TailwindCSS", level: 75 },
      ],
    },
    {
      title: "Database",
      icon: <Database className="w-5 h-5" />,
      skills: [
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 85 },
      ],
    },
    {
      title: "Others",
      icon: <Cloud className="w-5 h-5" />,
      skills: [
        { name: "Docker", level: 85 },
        { name: "AWS", level: 75 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-blue-600">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-slate-700">
                          {skill.name}
                        </span>
                        <span className="text-xs text-slate-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
