import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import PersonalProjects from '../components/PersonalProjects'
import Contact from '../components/Contact'

function Home() {
  return (
    <main className="bg-gradient-to-br from-slate-50 to-blue-50">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <PersonalProjects />
      <Contact />
    </main>
  )
}

export default Home
