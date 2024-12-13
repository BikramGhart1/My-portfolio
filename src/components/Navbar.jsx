import React from 'react'
import '../styles/NavbarStyle.css'

export default function Navbar() {
    return (
        <nav>
            <div className='home'>
                <a href="#">Home</a>
            </div>
            <div className='rightNav'>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
            </div>
        </nav>
    )
}
