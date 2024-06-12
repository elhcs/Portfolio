
import MainLogo from "./MainLogo";
import React, { useState } from "react";
import "./FAQ.css";
import { NavLink } from "react-router-dom";



function Contactfooter() {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          
        });
      };
    
       
      const InstagramIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path d="M12 2C6.475 2 2 6.475 2 12s4.475 10 10 10 10-4.475 10-10S17.525 2 12 2zm4.167 15.833H15c.08-1.155.187-2.322.314-3.5H12c.127 1.178.234 2.345.314 3.5h-1.167c-.18-1.155-.357-2.322-.507-3.5H9c-.15 1.178-.327 2.345-.507 3.5H7.833A7.965 7.965 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8a7.965 7.965 0 0 1-3.833 6.833z" fill="#000"/>
          <path d="M12 6.167a5.833 5.833 0 1 0 0 11.666 5.833 5.833 0 0 0 0-11.666zm0 9.917a4.084 4.084 0 1 1 0-8.167 4.084 4.084 0 0 1 0 8.167z" fill="#000"/>
          <path d="M18.79 6.61a1.4 1.4 0 1 0-2.779-.002 1.4 1.4 0 0 0 2.78.002zM12 16.833c2.77 0 5-2.23 5-5s-2.23-5-5-5-5 2.23-5 5 2.23 5 5 5z" fill="#000"/>
        </svg>
      );
      
      
      const LinkedInIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path d="M20.3 3H3.7C2.8 3 2 3.8 2 4.7v16.6c0 .9.8 1.7 1.7 1.7h16.6c.9 0 1.7-.8 1.7-1.7V4.7c0-.9-.8-1.7-1.7-1.7zM8.5 18.4H5.8V9h2.7v9.4H8.5zM7.1 7.8c-.9 0-1.5-.6-1.5-1.4 0-.8.6-1.4 1.5-1.4s1.5.6 1.5 1.4c0 .8-.7 1.4-1.5 1.4zM18.4 18.4h-2.7v-4.9c0-1.2-.4-2-1.5-2-1.5 0-2.1 1.1-2.1 2.2v4.7H9.1V9h2.5v1.2h.1c.3-.6 1-1.2 2.1-1.2 2.3 0 2.7 1.5 2.7 3.4v5.1z" fill="#000" />
        </svg>
      );
      
      const TwitterIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path d="M23 4.9c-0.8 0.4-1.7 0.7-2.6 0.8 0.9-0.5 1.6-1.4 1.9-2.4-0.8 0.5-1.7 0.8-2.7 1-0.8-0.9-2-1.5-3.3-1.5-2.5 0-4.6 2.1-4.6 4.6 0 0.4 0.1 0.9 0.2 1.3-3.8-0.2-7.1-2-9.4-4.7-0.4 0.7-0.6 1.5-0.6 2.4 0 1.6 0.8 3 2 3.8-0.7 0-1.3-0.2-1.9-0.5 0 0 0 0 0 0 0 2.1 1.5 3.9 3.6 4.3-0.4 0.1-0.9 0.2-1.4 0.2-0.3 0-0.6 0-0.9-0.1 0.6 1.8 2.3 3.1 4.3 3.1-1.6 1.3-3.7 2-5.9 2-0.4 0-0.8 0-1.2-0.1 2.1 1.4 4.7 2.2 7.4 2.2 8.8 0 13.6-7.3 13.6-13.6 0-0.2 0-0.4 0-0.6 0.9-0.6 1.6-1.5 2.1-2.6z" fill="#000" />
        </svg>
      );
      
      const Footer = () => {
        return (
          <footer>
            {/* Your other footer content */}
      
            <div className="social-icons">
              <a href="https://www.instagram.com/elx.design" target="_blank" rel="noopener noreferrer">
                <InstagramIcon />
              </a>
              <a href="https://www.linkedin.com/in/el-houssaine-chahboun-0a262b293/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
              </a>
              <a href="https://twitter.com/elhoussainechah" target="_blank" rel="noopener noreferrer">
                <TwitterIcon />
              </a>
              {/* Add more social media icons as needed */}
            </div>
          </footer>
        );
      };
    
   
return (
    <div className="row">
     <div  style={{height:"240px"}}className="full-width-container4">
        <div style={{ textAlign:"left",marginLeft:"3%"}} className="col">
         
            
            <div style={{ fontSize: '96px',textAlign:"left"}}className="col">{"CAREER"}</div>
            <div className="paraxext2"style={{ color: '#000000', width:"44%",textAlign:"left" }}>{"I am actively seeking a research internship in machine learning, aiming to merge theoretical concepts with practical applications for my end-of-year project."}<br></br></div>
                  </div>    
    <br></br><br></br>
      <div className="row">
        <div className="col-12 col-md-2">
        <div className="full-width-container3" onClick={scrollToTop} style={{ display: 'flex', justifyContent: 'center'}}>
  <svg className="arrow-up" xmlns="http://www.w3.org/2000/svg" width="45" height="86" viewBox="0 0 45 86" fill="none">
    <path d="M24.6887 1.34855C23.5171 0.176978 21.6176 0.176978 20.4461 1.34855L1.35419 20.4404C0.182612 21.612 0.182612 23.5115 1.35418 24.6831C2.52576 25.8546 4.42525 25.8546 5.59683 24.6831L22.5674 7.71251L39.538 24.6831C40.7095 25.8546 42.609 25.8546 43.7806 24.6831C44.9522 23.5115 44.9522 21.612 43.7806 20.4404L24.6887 1.34855ZM25.5674 85.8789L25.5674 3.46987L19.5674 3.46987L19.5674 85.8789L25.5674 85.8789Z" fill="white"/>

      <br></br><br></br><br></br><br></br><br></br><br></br></svg>
    
  </div>
</div>
<div className="col"><div className="paratextfooter">Designed and coded by EL Houssaine CHAHBOUN </div><div className="linktextfooter">Download resume >>  </div> </div>

<div className="col"><div className="paratextfooter">© All rights reserved EL Houssaine CHAHBOUN 2024 <br></br> <br></br><Footer /> </div>  </div>
<br></br><br></br>



                
                
            </div>
            </div> </div>
    );
};
    

export default Contactfooter;