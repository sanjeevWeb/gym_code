import React from 'react'
import './footer.css'
import Github from "../../assets/github.png"
import Instagram from "../../assets/instagram.png"
import LinkedIn from "../../assets/linkedin.png"
import Logo from "../../assets/logo.png"

const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <hr />
                <div className="footer">
                    <div className="social-links">

                        <img src={Github} alt="git" />
                        <img src={Instagram} alt="insta" />
                        <img src={LinkedIn} alt="linkedIn" />
                    
                </div>
                <div className="logo-f">
                    <img src={Logo} alt="logo" />
                </div>
                </div>
            <div className="blur blur-f-1"></div>
            <div className="blur blur-f-2"></div>
            </div>
        </div>
    )
}

export default Footer
