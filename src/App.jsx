import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'
import ExperienceSection from './components/ExperienceSection'
function App() {

  return (
    <>
      <Navbar />
      <HeroSection/>
      <ProjectsSection/>
      <ExperienceSection/>
    </>
  )
}

export default App
