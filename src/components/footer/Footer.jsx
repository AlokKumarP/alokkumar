import React from "react";
import "./footer.css";

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Alok</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#services" className="footer__link">Experiance</a>
                    </li>
                </ul>
                <div className="footer__social">
                <a href="#" className="home__social-icon" target="_blank"><i class="bx bxl-dribbble"></i></a>
                <a href="https://github.com/" className="home__social-icon" target="_blank"><i class="bx bxl-github"></i></a>
                <a href="https://www.linkedin.com/in/alok-kumar-pradhan/" className="home__social-icon" target="_blank"><i class="bx bxl-linkedin"></i></a> 
                </div>
                <span className="footer__copy">&#169; lightcoder. All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer