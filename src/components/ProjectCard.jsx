import React from 'react'
import '../styles/ProjectCardStyle.css'

export default function ProjectCard() {
    return (
        <div className='card'>
            <div className="image">
                <img src="https://i.pinimg.com/736x/7e/3b/b6/7e3bb628f141025fa1203219bd1b67ea.jpg" alt="" />
            </div>
            <div className="description">
                <h2>
                    Name: Todo List
                </h2>
                <p>
                    Description: This is basic to do list
                </p>
                <a href="https://bikramghart1.github.io/WebTechI-final-project/">Live Demo</a>
                <a href="https://github.com/BikramGhart1/WebTechI-final-project">Repo</a>

            </div>
        </div>
    )
}
