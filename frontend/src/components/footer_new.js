import React from 'react';
import './Footer_new.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
            <div className="footer-column">
                <div className="footer-logo">
                        {/* Replace with the actual path to your logo image */}
                        
                    </div>
                    <p className="paragraphfooter">My name is El Houssaine CHAHBOUN, I am an engineering student, a maths enthusiast, a graphics programmer and a graphic designer.</p>
                    <div className="social-icons">
                        <a href="your-youtube-link"><i className="fab fa-youtube"></i></a>
                        <a href="your-x-link"><i className="fab fa-twitter"></i></a>
                        <a href="your-instagram-link"><i className="fab fa-instagram"></i></a>
                        <a href="your-tiktok-link"><i className="fab fa-tiktok"></i></a>
                    </div>
                </div>
                <div className="footer-column">
                    
                    <div className="footer-links">
                    <p className="rightcolparagraph"> </p>
                        <a href="/resume">DESIGN CLUB</a>
                        <a href="/design-studio">DESIGN STUDIO</a>
                    </div>
                </div>


            </div>
            <div className="footer-bottom">
                
                <a href="/resume">UDC</a>
                <a href="/blog">BLOG</a>
                <p>All rights reserved El Houssaine CHAHBOUN © 2023</p>
            </div>
        </footer>
    );
}

export default Footer;
