import React, { useEffect, useRef, useState } from 'react'
import '../styles/NavbarStyle.css'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const toggleButtonRef = useRef(null)

    //Toggle garna ko lagi separate function banako thiye tara tesle yeuta problem create garyo tala menu vanda bahira click vayeko detect garne function sanga conflict vayo

    //K hudo raixa vane 
    //1. Hamle toggle Hamburger menu click garepaxi menu open hunxa, isOpen true hunxa
    //2. Menu bahira click garepaxi detect garera hami isOpen lai false banauxam
    //3. tara menu open vayeko bela hamle toggle button click garim vane
    //4. handleClickOutside function le isOpen lai false banayera menu close gardinxa
    //5. tespaxi bahira ko separate toggle handler function trigger vayera feri isOpen lai true banayera menu open garxa
    //6. yesari toggle button ma issue aayepaxi toggle hudaina

    //Solution
    //1. togglemenu function lai separate nabanyera handleClickOutside function mai dui ota condition check garnu paryo
    //2. euta chai > menu vanda bahira click vayeko ho?
    //3. arko chai > togglebutton ma click vayeko ho? (this can be achieved by useRef for toggle button too)
    //4. if toggle ma click vako toggle nai garne
    //5. else isOpen lai false banayera simply menu banda gardine 
    //6. yesari functions conflict ma jadainan 


    useEffect(() => {
        const handleClickOutside = (e) => {
            if (toggleButtonRef.current && toggleButtonRef.current.contains(e.target)) {
                // If the toggle button is clicked, toggle the menu
                setIsOpen((prev) => !prev);
                console.log("toggle button detected")
            } else if (menuRef.current && !menuRef.current.contains(e.target) && !toggleButtonRef.current.contains(e.target)) {
                // If the click is outside the menu and toggle button, close the menu
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, []);
    const closeOnLinks = () => {
        setIsOpen(false);
    }

    return (
        <nav>
            <div className='home'>
                <a href="#">Home</a>
            </div>
            <div className="toggleMenu" ref={toggleButtonRef} >
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <div ref={menuRef} className={`rightNav ${isOpen ? 'open' : ''}`} >
                <a onClick={closeOnLinks} href="#projects">Projects</a>
                <a onClick={closeOnLinks} href="#experience">Experience</a>
                <a onClick={closeOnLinks} href="#skills">Skills</a>
                <a onClick={closeOnLinks} href="#contact">Contact</a>
            </div>
        </nav>
    )
}
