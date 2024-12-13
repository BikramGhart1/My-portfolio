import React from 'react'
import ProjectCard from './ProjectCard'
import '../styles/ProjectSectionStyle.css'

export default function ProjectsSection() {
  return (
    <section className='cards'>
      <em>Flip the cards by clicking them</em>
      <div className='cardContainers'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  )
}
