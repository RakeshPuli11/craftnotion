import React, { useState } from "react";
import './header.css';
import { HiOutlineHome, HiOutlineUser, HiOutlineBadgeCheck, HiOutlineClipboardList, HiOutlinePhotograph, HiOutlineMail, HiX, HiOutlineMenu } from "react-icons/hi";
import g from "../../assets/g.png"
import logo from "../../assets/earnwavw.jpg"
const Header = () => {
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if(this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });

    const [Toggle, showMenu] = useState(false);
    const [sign, showSignUp] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    const handleNavClick = (id) => {
        setActiveNav(id);
        showMenu(false); // Close the menu by setting Toggle to false
    };

    return( 
        <header className="header">
            <nav className="nav h-container">
                <a href="index.html" className="nav-logo"><img src={logo} width="40px"/><span>Earnwave</span></a>
                <div className={ Toggle ? "nav-menu show-menu" : "nav-menu"}>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="#about" onClick={() => handleNavClick("#about")} 
                            className={activeNav === "#about" ? "nav-link active-link" : "nav-link"}>
                                <HiOutlineUser className="nav-icon"/>About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#skills" onClick={() => handleNavClick("#skills")} 
                            className={activeNav === "#skills" ? "nav-link active-link" : "nav-link"}>
                                <HiOutlineBadgeCheck className="nav-icon"/>For Business
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#services" onClick={() => handleNavClick("#services")} 
                            className={activeNav === "#services" ? "nav-link active-link" : "nav-link"}>
                                <HiOutlineClipboardList className="nav-icon"/>Media
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#projects" onClick={() => handleNavClick("#projects")} 
                            className={activeNav === "#projects" ? "nav-link active-link" : "nav-link"}>
                                <HiOutlinePhotograph className="nav-icon"/>Blog
                            </a>
                        </li>
                    </ul>
                    <HiX className="nav-close" onClick={() => showMenu(false)} />
                </div>
                <button className="head-btn" onClick={() => showSignUp(true)}>Sign up</button>
                <div className="nav-toggle" onClick={() => showMenu(!Toggle)}>
                    <HiOutlineMenu />
                </div>
            </nav>

            {/* Popup for Sign Up */}
            {sign && (
                <div className="signup-popup">
                    <div className="popup-content">
                        <HiX className="popup-close" onClick={() => showSignUp(false)} />
                        <h3>Create your Account</h3>
                        <button className="google-signin" style={{marginBottom:"20px"}}><img id="g" src={g} width="20px"/><span id="cwg">Continue with Google</span></button>
                        <div id="sepa"></div>
                        <input type="email" placeholder="Your Email" />
                        <input type="password" placeholder="Create a Password" />
                        <button className="eml" style={{backgroundColor:"#E6EDF0", color:"black" , marginBottom:"10px"}}>Continue with email</button>
                        <a href="#" id="link">already have an account?</a>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header;
