import React from 'react'
import '../styles/ContactSectionStyle.css'

export default function ContactSection() {
    return (
        <div className='contactSection' id='contact'>
            <div className="heading">
                <h2 className='sectionHeader'>Let's Connect</h2>
                <em>Feel free to reach out for collaboration, inquiries or just say hi!</em>
            </div>
            <div className="contactDetails">
                <p><i className="fas fa-envelope"></i> :  bikramgharti39@gmail.com</p>
                <label htmlFor="socials">Social links</label>
                <div className="socials">
                    <a href="https://www.instagram.com/_bikramagar/" target='_blank'> <i className="fab fa-instagram"></i></a>
                    <a href="https://www.facebook.com/bikram.gmagar.9/" target='_blank'><i className="fab fa-facebook"></i></a>
                    <a href="https://www.linkedin.com/in/bikram-magar-382b26247/" target='_blank'><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/BikramGhart1" target='_blank'><i className="fab fa-github"></i></a>

                </div>
                <p>© 2025 All Rights Reserved.</p>

            </div>
        </div>
    )
}
