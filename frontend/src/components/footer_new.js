import React from 'react';
import styles from '../components/Articlecomp.module.css';
import './Footer_new.css';





const MergedFooter = ({ isMobile }) => {
    
    
    return (
        <div>
            {/* Conditional rendering based on isMobile state */}
       
            <div className="footer-container">
        {/* Two-column Layout */}
        <div className="two-column-layout">
          <div className="empty-column"><h2 style={{fontWeight:700, textAlign:"left", marginLeft:50, fontSize:50}}>Contact</h2>  <a style={{textAlign:"left", marginLeft:-1050}} href="mailto:el-houssaine.chahboun@polytechnique.edu">
      Email me here
    </a></div>
          <div className="image-column">
            <img src={"elx-ezgif.com-crop.gif"} alt="Square Image" className="square-image" />
          </div>
        </div></div>
            <footer>
                
                <div className="top-section">
                    <div className="logo-section">
                        <div className="logo">
                            <svg width="150" viewBox="0 0 1280 594" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M114.98 477.783V594H0.000976562V477.783H114.98Z" fill="black" />
                                <path d="M472.669 477.783V594H587.647V477.783H472.669Z" fill="black" />
                                <path d="M229.957 361.564V477.781H114.979V361.564H229.957Z" fill="black" />
                                <path d="M357.697 361.564V477.781H472.676V361.564H357.697Z" fill="black" />
                                <path d="M357.689 232.434V361.564H229.936V232.434H357.689Z" fill="black" />
                                <path d="M229.957 232.434V361.564H357.711V232.434H229.957Z" fill="black" />
                                <path d="M472.689 116.215V232.432H357.711V116.215H472.689Z" fill="black" />
                                <path d="M114.957 116.215V232.432H229.936V116.215H114.957Z" fill="black" />
                                <path d="M587.654 0V116.217H472.676V0H587.654Z" fill="black" />
                                <path d="M-1.52588e-05 0V116.217H114.979V0H-1.52588e-05Z" fill="black" />
                                <path d="M685.133 476.126V594H1279.13V476.126H685.133Z" fill="black" />
                                <path d="M1041.29 237.966V356.157H923.1V237.966H1041.29Z" fill="black" />
                                <path d="M685.133 237.853V356.147H1279.13V237.853H685.133Z" fill="black" />
                                <path d="M685.133 0V118.295H1279.13V0H685.133Z" fill="black" />
                            </svg>
                        </div>
                        <div></div>
                    </div>
                    <div className={`nav-section ${isMobile ? styles.hideOnMobile : ''}` }>
                        <ul>
                           
                            <li><a href="#">University Club</a></li>
                           
                        </ul>
                        <ul>
                          
                            <li><a href="#">Blog</a></li>
                        </ul>
                        <ul>
                          <li><a href="#">About Us</a></li>
                         
                        </ul>
                         <ul>
                            
                            <li><a href="#">Contact Us</a></li>
                          
                        </ul>
                    </div>
                </div>
                <div className="bottom-section">
                    <div className="social-media">
                        <a href="#">&#xf09a;</a>
                        <a href="#">&#xf099;</a>
                        <a href="#">&#xf0e0;</a>
                        <a href="#">&#xf1a0;</a>
                        <a href="#">&#xf16d;</a>
                    </div>
                    <small>Fully designed and developed by El Houssaine CHAHBOUN &copy; Copyright. All rights reserved.</small>
                </div>
            </footer>
        </div>
    );
};

export default MergedFooter;