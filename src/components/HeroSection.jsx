import React from 'react'
import '../styles/HeroSectionStyle.css'

export default function HeroSection() {
    return (
        <section id='about'>
            <div className="leftText">
                <h2>Greetings! </h2>
                <p>I'm Bikram Gharti currently studying Bachelors in Information Technoloy (BIT) </p>
                <p>I'm learing <em>Web development</em> and I want to strive and utilize my creativity to create sick and twisted design and bring them to life providing them funtionality.</p>
                <p>At this time I'm learning react</p>
            </div>
            <div className="rightImage">
                <img src="/images/Lord of the mysteries.jpg" alt="" />
            </div>
        </section>
    )
}
