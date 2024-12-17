import React from 'react'
import '../styles/ProjectCardStyle.css'

export default function ProjectCard({ imgSrc, name, desc, techs, liveDemo, repoLink }) {
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
                <a href={repoLink} target='_blank'>Repo</a>
            </div>
        </div>
    )
}
