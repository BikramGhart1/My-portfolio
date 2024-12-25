import React, { useEffect, useRef } from 'react'
import '../styles/HeroSectionStyle.css'

export default function HeroSection() {

    return (
        <section id='about'>
            <div className="leftText">
                <div className="primaryPara">
                    <h2>Greetings! </h2>
                    <p>
                        <strong className='intro'>I'm Bikram Gharti</strong>,
                        <br />   a passionate <em>BIT</em>  student exploring Web Development. I focus on blending <strong>creativity</strong> and <strong>functionality</strong> to create unique designs.
                    </p>
                </div>
                <div className="secondaryPara">
                    <p>
                        Currently, I’m learning <em>React.js</em>, <em>Tailwind CSS</em>, and <em>Node.js</em>, aiming to become a <strong>Full-Stack Developer</strong>. My work ethic centers on <strong>persistence</strong> and a drive for continuous improvement.
                    </p>
                </div>
            </div>
        </section>
    )
}
