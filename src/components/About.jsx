import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a senior full-stack developer with a strong focus on backend development. 
                My passion lies in creating robust, scalable applications that solve real-world problems.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With extensive experience in Node.js and NestJS, I specialize in building efficient 
                APIs and microservices. On the frontend, I leverage React to create intuitive user 
                interfaces that provide exceptional user experiences.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm committed to writing clean, maintainable code and staying up-to-date with the 
                latest technologies and best practices in software development.
              </p>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">What I Do</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Backend API Development</li>
                  <li>• Microservices Architecture</li>
                  <li>• Database Design & Optimization</li>
                  <li>• Frontend Development with React</li>
                  <li>• DevOps & Cloud Deployment</li>
                  <li>• Code Review & Mentoring</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Interests</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• System Architecture</li>
                  <li>• Performance Optimization</li>
                  <li>• Open Source Contributions</li>
                  <li>• Tech Community Involvement</li>
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
