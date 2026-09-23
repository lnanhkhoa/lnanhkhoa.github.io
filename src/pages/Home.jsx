import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import PersonalProjects from '../components/PersonalProjects'
import Contact from '../components/Contact'

function Home() {
  const { hash } = useLocation()

  // Arriving from another route with a section hash (e.g. /#personal-projects):
  // jump to that section, otherwise start at the top.
  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1))
    if (target) target.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [hash])

  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <PersonalProjects />
      <Projects />
      <Contact />
    </main>
  )
}

export default Home
