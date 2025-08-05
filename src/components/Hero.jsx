import React from 'react'
import { Github, Linkedin, Mail, Download } from 'lucide-react'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Khoa Le
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
            Senior Full-Stack Developer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate backend-focused full-stack developer with expertise in Node.js, NestJS, and React. 
            Building scalable, performant applications with modern technologies and best practices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#contact"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium"
            >
              Get In Touch
            </a>
            <a
              href="/khoale-senior-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border px-8 py-3 rounded-lg hover:bg-accent transition-colors duration-200 font-medium flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/lnanhkhoa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/lnanhkhoa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:lnanhkhoa303@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
