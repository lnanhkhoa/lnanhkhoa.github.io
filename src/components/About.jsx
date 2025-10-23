import React from 'react'

const About = () => {
  return (
    <section id="about" className="p-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a senior full-stack developer with a strong focus on back-end development. My
                passion lies in creating robust, scalable applications that solve real-world
                problems.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With my experience in NodeJS, I specialize in building efficient system in
                micro-services architecture. On the front-end, I leverage React to create intuitive
                user interfaces that provide exceptional user experiences.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">What I Do</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Back-end API Development</li>
                  <li>• Micro-services Architecture</li>
                  <li>• Database Design</li>
                  <li>• Front-end Development</li>
                  <li>• Code Review & Mentoring</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Interests</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• System Architecture</li>
                  <li>• Open Source</li>
                  <li>• Building system with AI</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
