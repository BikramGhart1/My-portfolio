import React from 'react'
import '../styles/ContactSectionStyle.css'

export default function ContactSection() {
    return (
        <div className='contactSection'>
            <div className="heading">
                <h2 className='sectionHeader'>Let's Connect</h2>
                <em>Feel free to reach out for collaboration, inquiries or just say hi!</em>
            </div>
            <div className="contactDetails">
                <p><i class="fas fa-envelope"></i> :  bikramgharti39@gmail.com</p>
                <label htmlFor="socials">Social links</label>
                <div className="socials">
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-linkedin"></i>
                    <i class="fab fa-github"></i>

                </div>
                <p>© 2025 All Rights Reserved.</p>

            </div>
        </div>
    )
}
