import React from 'react'
import '../styles/ProjectCardStyle.css'

export default function ProjectCard({ imgSrc, name, desc, techs, liveDemo, repoLinks }) {
    return (
        <div className='card'>
            <div className="image">
                <img src={imgSrc} alt="" />
            </div>
            <div className="description">
                <h2>{name} </h2>

                <p>{desc}</p>
                <div className="techsUsed">
                    {techs.map((tech, index) => {
                        return <em key={index}>{tech}</em>
                    })}
                </div>
                <br />
                <a href={liveDemo} target='_blank'>Live Demo</a>
                {
                    repoLinks.map((repoLink, index)=>{
                        return <a href={repoLink} key={index} target='_blank'>Repo</a>
                    })
                }
                
            </div>
        </div>
    )
}
