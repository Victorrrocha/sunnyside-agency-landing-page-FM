import React from 'react'
import './Footer.css'

import img_1 from '../styles/images/desktop/img_1.jpg'
import img_2 from '../styles/images/desktop/img_2.jpg'
import img_3 from '../styles/images/desktop/img_3.jpg'
import img_4 from '../styles/images/desktop/img_4.jpg'

import mobile_img_1 from '../styles/images/mobile/mobile_img_1.jpg'
import mobile_img_2 from '../styles/images/mobile/mobile_img_2.jpg'
import mobile_img_3 from '../styles/images/mobile/mobile_img_3.jpg'
import mobile_img_4 from '../styles/images/mobile/mobile_img_4.jpg'

import facebook from '../styles/images/icon-facebook.svg'
import instagram from '../styles/images/icon-instagram.svg'
import twitter from '../styles/images/icon-twitter.svg'
import pinterest from '../styles/images/icon-pinterest.svg'

export default function Footer() {
    return (
        <div className="footer">

            <div className="footer-images-grid">
                <div className="footer-image-container">
                    <img className="footer-img" src={img_1} alt="img_1" />
                    <img className="footer-mobile_img" src={mobile_img_1} alt="img_1" />
                </div>
                <div className="footer-image-container">
                    <img className="footer-img"src={img_2} alt="img_2" />
                    <img className="footer-mobile_img"src={mobile_img_2} alt="img_2" />
                </div>
                <div className="footer-image-container">
                    <img className="footer-img"src={img_3} alt="img_3" />
                    <img className="footer-mobile_img"src={mobile_img_3} alt="img_3" />
                </div>
                <div className="footer-image-container">
                    <img className="footer-img"src={img_4} alt="img_4" />
                    <img className="footer-mobile_img"src={mobile_img_4} alt="img_3" />
                </div>
            </div>

            <div className="footer-info">
                <p className="footer-logo">sunnyside</p>
                <div>
                    <ul className="footer-nav">
                        <li><a className="footer-nav-item" href="">About</a></li>
                        <li><a className="footer-nav-item" href="">Services</a></li>
                        <li><a className="footer-nav-item last-child" href="">Projects</a></li>
                    </ul>
                </div>
                <div className="footer-social-media-icons">
                    <ul  className="footer-nav">
                        <li><a className="footer-nav-social-media-icon" href=""> <img src={facebook} alt="img_1" /></a></li>
                        <li><a className="footer-nav-social-media-icon" href=""><img src={instagram} alt="img_2" /></a></li>
                        <li><a className="footer-nav-social-media-icon" href="">  <img src={twitter} alt="img_3" /></a></li>
                        <li><a className="footer-nav-social-media-icon last-child" href=""><img src={pinterest} alt="img_4" /></a></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
