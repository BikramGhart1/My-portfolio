import React, { useEffect, useRef } from 'react'
import '../styles/HeroSectionStyle.css'

export default function HeroSection() {

    return (
        <section id='about'>
            <div className="subcontainer">
                <div className="descriptionHero">
                    <div className="profile leftText">
                        <div className="imagePfp">
                            <img src="https://yt3.ggpht.com/ytc/AIdro_nOPo0zbISxKkuYa8x5pEgwCZl8xrXbjqc54V3iNsYmacs=s88-c-k-c0x00ffffff-no-rj" alt="pfp" />
                        </div>
                        <div className='nameAndLocation'>
                            <p><strong>Bikram Gharti</strong></p>
                            <p><i><i className="fas fa-map-marker-alt"></i> Bhaktapur, Nepal</i></p>
                        </div>

                    </div>
                    <div className="leftText para">
                        <h2>Greetings</h2>
                        <p>
                            I'm Bikram Gharti
                            <br />   A <em>Bachelor's in Information Technology, BIT</em>  student exploring Web Development.
                        </p>
                        <p>
                            Currently, I’m learning <em>React.js</em>,and <em>Tailwind CSS</em>
                        </p>
                        <p><em><u>Aiming</u></em> to learn <em>Node js</em> to give life to the <strong>creative</strong> and <strong>functional</strong> websites.</p>

                    </div>
                </div>
                <div className="skillsHero leftText">
                    <div className='skillHeader'>
                        <h2>Skills</h2>
                        <em>Building blocks of my journey</em>

                    </div>
                    <div className="skillsContainer">
                        <div className="skillItem">
                            <i class='fab fa-html5'></i>
                            <p>HTML5</p>
                        </div>
                        <div className="skillItem">
                            <i class="fab fa-css3-alt"></i>
                            <p>CSS3</p>
                        </div>
                        <div className="skillItem">
                            <i class='fab fa-js'></i>
                            <p>JavaScript</p>
                        </div>
                        <div className="skillItem">
                            <i class='fab fa-react'></i>
                            <p>React</p>
                        </div>
                        <div className="skillItem">
                            <i class='fas fa-database'></i>
                            <p>SQL</p>
                        </div>
                        <div className="skillItem">
                            <i class='fas fa-code'></i>
                            <p>C/C++</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
