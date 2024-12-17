import React from 'react'
import '../styles/HeroSectionStyle.css'

export default function HeroSection() {
    return (
        <section id='about'>
            <div className="leftText">
                <div className="primaryPara">
                    <h2>Greetings! </h2>
                    <p>
                        <strong>I'm Bikram Gharti</strong>,
                        <br /> a passionate learner currently pursuing a
                        <em> Bachelors in Information Technology</em>, <em>(BIT)</em>
                        <strong>5<sup>th</sup> Semester</strong>.
                    </p>
                </div>
                <div className="secondaryPara">
                    <p>
                        <strong>My most important strength:</strong>
                        I am deeply enthusiastic about <em>Web Development</em>, where I aim to combine
                        <strong> creativity</strong> and <strong>functionality</strong> to craft unique and interactive designs.
                    </p>
                    <p>
                        I'm currently learning <strong>React.js</strong>, focusing on building responsive, dynamic, and user-friendly interfaces. Alongside this, I’m exploring tools like
                        <strong>Tailwind CSS</strong>, <strong>Node.js</strong>, and <strong>APIs</strong> to expand my skill set.
                    </p>
                    <p>
                        I aspire to become a <strong>Full-Stack Developer</strong>—leveraging both front-end and back-end technologies to build complete, efficient, and scalable web applications.
                    </p>
                    <p>
                        My work ethic revolves around <strong>persistence</strong>, <strong>creativity</strong>, and a constant desire for improvement. Whether it's designing user experiences or solving coding challenges, I enjoy pushing boundaries to achieve quality results.
                    </p>
                </div>
            </div>
            <div className="rightImage">
                <img src="/images/Lord of the mysteries.jpg" alt="A creative placeholder" />
            </div>
        </section>
    )
}
