import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import '../styles/ProjectSectionStyle.css'


export default function ProjectsSection() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("/jsonfiles/projects.json")
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch(error => console.error("Error fetching data: ", error));
  }, [])

  return (
    <section className='cards' id='projects'>
      <h2 className='sectionHeader'>Project Section</h2>
      <em>Illustrations of the Projects I worked on with live demo and repo link </em>
      <div className='cardContainers'>
        {

          cards.map((card, index) => {

            return <ProjectCard
              key={index}
              imgSrc={card.imgSrc}
              name={card.name}
              desc={card.desc}
              techs={card.techs}
              liveDemo={card.liveDemo}
              repoLink={card.repoLink}

            />
          })
        }
      </div>
    </section>
  )
}
