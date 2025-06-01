import React from 'react';
import styles from '../components/Articlecomp.module.css';
import './Footer_new.css';
import '@fortawesome/fontawesome-free/css/all.min.css';







const MergedFooter = ({ isMobile }) => {

    const iconStyle = {
        color: 'black',
        fontSize: '16px', // smaller size
        margin: '0 8px',
        textDecoration: 'none',
      };
    
    
    return (
        <div>
            {/* Conditional rendering based on isMobile state */}
       
            <div className="footer-container">
        {/* Two-column Layout */}
       </div>
            <footer>
                
                <div className="top-section">
                    <div className="logo-section">
        
                        <img src={"elx-ezgif.com-crop.gif"} alt="Square Image" className="square-image" />
                            
                     
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
                <a href="#" style={iconStyle}><i className="fas fa-envelope"></i></a>
                <a href="#" style={iconStyle}><i className="fab fa-twitter"></i></a>
                <a href="#" style={iconStyle}><i className="fab fa-instagram"></i></a>
                <a href="https://github.com/elhcs" style={iconStyle}><i className="fab fa-github-square"></i></a>
                
                  </div>
                    <small>&copy;  designed and developed by El Houssaine CHAHBOUN  </small>
                </div>
            </footer>
        </div>
    );
};

export default MergedFooter;