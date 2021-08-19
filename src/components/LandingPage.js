import React, { useState } from 'react'
import arrow from '../styles/images/icon-arrow-down.svg'
import './LandingPage.css'

import hamburger from '../styles/images/icon-hamburger.svg'

export default function LandingPage() {

    const [mobileNavOpen, setMobileNav] = useState(false)

    return (
        <div className="container">
            <div className="info-page">

                <header className="header">
                    <div className="logo">
                        <p>sunnyside</p>
                    </div>

                    <nav className="header-nav">
                        <ul className="nav-items">
                            <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Projects</a></li>
                            <li className="nav-item"><a className="nav-link contact" href="#">CONTACT</a></li>
                        </ul>

                        <div className="nav-hamburger" onClick={() => setMobileNav(!mobileNavOpen)}>
                            <img src={hamburger} alt="" />
                        </div>

                        
                    </nav>

                </header>

                <div className="wrapper">

                    <div className = {"mobile-menu-container " + (mobileNavOpen ? "open" : "") } >
                        <div className="triangle"></div>
                        <div>
                            <ul className= {"mobile-nav-items" } >
                                <li className="mobile-nav-item"><a className="mobile-nav-link" href="#">About</a></li>
                                <li className="mobile-nav-item"><a className="mobile-nav-link" href="#">Services</a></li>
                                <li className="mobile-nav-item"><a className="mobile-nav-link" href="#">Projects</a></li>
                                <li className=" mobile-contact-btn"><a className="mobile-nav-link mobile-contact" href="#">CONTACT</a></li>
                            </ul>
                        </div>
                    </div>

                    <h1 className="header-text">WE ARE CREATIVES</h1>
                    <div className="arrow-img-container">
                        <a href="#">
                        <img src={arrow} alt="" />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}
