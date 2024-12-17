import React from 'react'
import '../styles/SkillsSectionStyle.css'

export default function SkillsSection() {
    return (
        <div className='skills'>
            <h2 className='sectionHeader'>Skills Section</h2>
            <em className='skillsDescription'>
                Here are some of the technical skills I have acquired through my learning journey and projects. These tools and technologies empower me to build robust and interactive applications.
            </em>
            <div className="skillContents">
                <div>
                    <img src="/images/html.png" alt="html" />
                    <p>HTML5</p>
                </div>
                <div>
                    <img src="/images/css.png" alt="css" />
                    <p>CSS3</p>
                </div>
                <div>
                    <img src="/images/js.png" alt="js" />
                    <p>Javascript</p>
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s" alt="react" />
                    <p>React</p>
                </div>
                <div>
                    <img src="https://e7.pngegg.com/pngimages/465/779/png-clipart-blue-and-white-c-logo-the-c-programming-language-computer-programming-computer-icons-programmer-blue-angle-thumbnail.png" alt="c" />
                    <p>C</p>
                </div>
                <div>
                    <img src="https://www.shutterstock.com/image-vector/emblem-c-plus-programming-language-600nw-1764554240.jpg" alt="c++" />
                    <p>C++</p>
                </div>
            </div>
        </div>
    )
}
