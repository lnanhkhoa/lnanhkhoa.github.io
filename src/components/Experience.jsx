import React from "react"
import { Calendar, MapPin, Users, Trophy, Code, Briefcase, TrendingUp, Star } from "lucide-react"

const experiences = [
  {
    company: "Groove Technology",
    location: "Remote - Ho Chi Minh City, Vietnam",
    period: "Jan 2022 - May 2025",
    totalDuration: "3+ years",
    companyDescription:
      "Leading technology company specializing in enterprise solutions and digital transformation",
    roles: [
      {
        title: "Technical Lead",
        period: "Sep 2023 - May 2025",
        level: "Senior Leadership",
        description:
          "Leading technical architecture and team development for enterprise-level applications.",
        achievements: [
          "Led the development of an internal Human Resource Management (HRM) system and built the microservices architecture using GraphQL, NestJS, Vite, PostgreSQL",
          "Defined and enforced coding standards, project structure and best practices across the team",
          "Collaborated with Product Owner to gather requirements, propose technical solutions, break down feature delivery deadlines",
          "Managed database migration and CI/CD setup using Github Action and deploy to AWS",
        ],
        technologies: [
          "NestJS",
          "GraphQL",
          "Vite",
          "PostgreSQL",
          "AWS",
          "GitHub Actions",
          "Docker",
          "BullMQ",
          "Redis",
        ],
        impact: "High",
        teamSize: "4-6 members",
      },
      {
        title: "Senior Full Stack Developer",
        period: "Jan 2022 - Sep 2023",
        level: "Senior Individual Contributor",
        description:
          "Developing full-stack applications with focus on scalable architecture and performance.",
        achievements: [
          "Worked closely with stakeholders to gather requirements",
          "Defined and designed GraphQL APIs using KeystoneJS",
          "Built the frontend codebase and implemented core features",
          "Maintained code quality standards, improved API performance and handled long-running tasks",
        ],
        technologies: ["KeystoneJS", "GraphQL", "React", "PostgreSQL", "TailwindCSS", "Docker"],
        impact: "Medium-High",
        teamSize: "5-7 members",
      },
      {
        title: "Software Engineer",
        period: "Jan 2022 - Sep 2023",
        level: "Individual Contributor",
        description: "Cross-platform mobile development and API integration specialist.",
        achievements: [
          "Developed and maintained cross-platform mobile applications using React Native, delivering smooth and responsive user experiences on both iOS and Android",
          "Collaborated with backend developers to integrate RESTful APIs",
          "Implemented reusable components, modular screens",
          "Focused on performance tuning and optimizing screen rendering",
        ],
        technologies: [
          "React Native",
          "GraphQL",
          "AWS",
          "PostgreSQL",
          "ReactJS",
          "ElasticSearch",
          "BullMQ",
        ],
        impact: "Medium",
        teamSize: "3-4 members",
      },
    ],
  },
  {
    company: "Gigacover",
    location: "On-site - Ho Chi Minh City, Vietnam",
    period: "Nov 2020 - Dec 2021",
    totalDuration: "1 year 2 months",
    companyDescription:
      "Singapore-based insurtech startup providing embedded B2B2C insurance solutions",
    roles: [
      {
        title: "Front-end Developer",
        period: "Nov 2020 - Dec 2021",
        level: "Individual Contributor",
        description:
          "Frontend development for Singapore-based insurtech startup serving Southeast Asia market.",
        achievements: [
          "Working in a Scrum model and participated in sprint planning to gather business requirements and translate them into technical specifications",
          "Developed mobile UI components based on Figma designs, ensuring design consistency and responsiveness",
          "Contributed to both web and mobile platforms using React and React Native",
          "Wrote and maintained unit tests to ensure feature stability",
        ],
        technologies: ["React Native", "ReactJS", "Redux", "Saga", "TypeScript"],
        impact: "Medium",
        teamSize: "10 members",
      },
    ],
  },
  {
    company: "Freelancer",
    location: "On-site - Ho Chi Minh City, Vietnam",
    period: "May 2020 - Oct 2020",
    totalDuration: "6 months",
    companyDescription: "Independent contractor developing real-time communication applications",
    roles: [
      {
        title: "Full Stack Developer",
        period: "May 2020 - Oct 2020",
        level: "Individual Contributor",
        description: "Independent contractor developing real-time communication applications.",
        achievements: [
          "Worked closely to gather requirements",
          "Built a chat application with real-time messaging and collaboration features similar to Slack, including message threads, reactions",
        ],
        technologies: [
          "ExpressJS",
          "PostgreSQL",
          "React Native",
          "Redux-Saga",
          "Pusher.JS",
          "Socket.io",
        ],
        impact: "High",
        teamSize: "5 members",
      },
    ],
  },
  {
    company: "Bitis",
    location: "On-site - Ho Chi Minh City, Vietnam",
    period: "Nov 2018 - April 2020",
    totalDuration: "1 year 6 months",
    companyDescription: "Vietnam's leading footwear brand with nationwide retail presence",
    roles: [
      {
        title: "Back-end Developer",
        period: "Nov 2018 - April 2020",
        level: "Individual Contributor",
        description: "Backend development for Vietnam's leading footwear brand loyalty system.",
        achievements: [
          "Collaborated in team members to gather requirements",
          "Designed database relationships and implemented RESTful APIs",
          "Implemented background jobs and long-running tasks",
          "Integrated third-party services",
          "Manually set up server configuration and load balancing to support a scalable system",
        ],
        technologies: [
          "Strapi CMS",
          "ExpressJS",
          "MySQL",
          "MongoDb",
          "ReactJS",
          "React Native",
          "PM2",
        ],
        impact: "High",
        teamSize: "5-6 members",
      },
    ],
  },
]

const getImpactColor = (impact) => {
  switch (impact) {
    case "High":
      return "text-green-600 bg-green-50 border-green-200"
    case "Medium-High":
      return "text-blue-600 bg-blue-50 border-blue-200"
    case "Medium":
      return "text-yellow-600 bg-yellow-50 border-yellow-200"
    default:
      return "text-gray-600 bg-gray-50 border-gray-200"
  }
}

const getRoleIcon = (level) => {
  switch (level) {
    case "Senior Leadership":
      return <Star className="w-5 h-5" />
    case "Senior Individual Contributor":
      return <TrendingUp className="w-5 h-5" />
    case "Individual Contributor":
      return <Code className="w-5 h-5" />
    case "Solo Contributor":
      return <Briefcase className="w-5 h-5" />
    default:
      return <Code className="w-5 h-5" />
  }
}
// Summary statistics
const totalYears = 7
const totalCompanies = 4
const totalProjects = 10
const teamLeadership = 4

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            8+ years of full-stack development experience with a focus on backend architecture and
            team leadership
          </p>

          {/* Summary Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 max-w-2xl mx-auto">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-blue-600">{totalYears}+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-green-600">{totalCompanies}</div>
              <div className="text-sm text-muted-foreground">Companies</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-purple-600">{totalProjects}+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-orange-600">{teamLeadership}</div>
              <div className="text-sm text-muted-foreground">Leadership Roles</div>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-6xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 hidden md:block"></div>

          {experiences.map((company, companyIndex) => (
            <div key={companyIndex} className="relative mb-16">
              {/* Company Header */}
              <div className="bg-white  rounded-xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold">{company.company}</h3>
                      <p className="text-slate-100 mt-1">{company.companyDescription}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-blue-100 mb-2">
                        <Calendar className="w-5 h-5" />
                        <span className="font-medium">{company.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-blue-100">
                        <MapPin className="w-5 h-5" />
                        <span>{company.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-4">
                    <div className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                      {company.totalDuration}
                    </div>
                    <div className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                      {company.roles.length} Role{company.roles.length > 1 ? "s" : ""}
                    </div>
                  </div>
                </div>

                {/* Roles */}
                <div className="p-6">
                  {company.roles.map((role, roleIndex) => (
                    <div
                      key={roleIndex}
                      className={`${roleIndex > 0 ? "mt-8 pt-8 border-t border-slate-200" : ""}`}
                    >
                      {/* Role Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-blue-100 rounded-lg">
                              {getRoleIcon(role.level)}
                            </div>
                            <div>
                              <h4 className="text-xl font-semibold text-slate-900">{role.title}</h4>
                              <p className="text-sm text-slate-600">{role.level}</p>
                            </div>
                          </div>
                          <p className="text-slate-700 mb-3">{role.description}</p>
                        </div>
                        <div className="text-right ml-4">
                          <div className="text-sm font-medium text-slate-600 mb-2">
                            {role.period}
                          </div>
                          <div
                            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${getImpactColor(
                              role.impact,
                            )}`}
                          >
                            <Trophy className="w-3 h-3" />
                            {role.impact} Impact
                          </div>
                          <div className="flex items-center gap-1 mt-2 text-xs text-slate-500">
                            <Users className="w-3 h-3" />
                            <span>{role.teamSize}</span>
                          </div>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h5 className="font-medium text-slate-900 mb-3 flex items-center gap-2">
                          <Trophy className="w-4 h-4 text-yellow-500" />
                          Key Achievements
                        </h5>
                        <ul className="space-y-2">
                          {role.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-700">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h5 className="font-medium text-slate-900 mb-3 flex items-center gap-2">
                          <Code className="w-4 h-4 text-green-500" />
                          Technologies Used
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {role.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200 hover:shadow-sm transition-shadow"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
