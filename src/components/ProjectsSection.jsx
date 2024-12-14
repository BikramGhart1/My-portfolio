import React from 'react'
import ProjectCard from './ProjectCard'
import '../styles/ProjectSectionStyle.css'

export default function ProjectsSection() {
  return (
    <section className='cards' id='projects'>
      <h2 className='sectionHeader'>Project Section</h2>
      <em>Flip the cards by clicking on them</em>
      <div className='cardContainers'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  )
}
