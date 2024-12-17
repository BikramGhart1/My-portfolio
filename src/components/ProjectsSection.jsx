import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import '../styles/ProjectSectionStyle.css'


export default function ProjectsSection() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("../src/jsonfiles/projects.json")
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch(error => console.error("Error fetching data: ", error));
  }, [])

  return (
    <section className='cards' id='projects'>
      <h2 className='sectionHeader'>Project Section</h2>
      <em>Project illustrations crreated by me with live demo and repo link </em>
      <div className='cardContainers'>
        {

          cards.map((card, index) => {

            return <ProjectCard
              key={index}
              imgSrc={card.imgSrc}
              name={card.name}
              // name="hey"
              desc={card.desc}
              techs={card.techs}
              liveDemo={card.liveDemo}
              repoLink={card.repoLink}
              
            />
          })
        }
      </div>
      {/* imgSrc='https://i.pinimg.com/736x/7e/3b/b6/7e3bb628f141025fa1203219bd1b67ea.jpg' */}
    </section>
  )
}
