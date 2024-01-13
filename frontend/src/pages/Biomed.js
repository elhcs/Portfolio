import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Project.css";
import Informationsdesigners from "../components/Informationsdesigners";
import "../components/Navbar";
import Contact from "../components/Contact";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setlight, setdark } from "../reducers/themeReducer";
import Contactfooter from "../components/Contactfooter";


const tlines = (
  <svg
    width="145"
    height="146"
    viewBox="0 0 145 146"
    fill="red"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M145 116.693V145.078H0V116.693H145Z" fill="red" />
    <path d="M145 56.7695V88.3082H0V56.7695H145Z" fill="red" />
    <path d="M145 0V28.3848H0V0H145Z" fill="red" />
  </svg>
);
function Project() {
   {
    return (
      <div className="App">
      <div className="App-body">
        

      <div className="full-width-container">
      <div className="row">
        <div className="col text">
          <div className="titletext"style={{ color: '#ffffff', padding: 7,width:'60%' }}>{"BIOMEDICAl ENGINEERING PROJECT"}</div>
          <div className="paratext"style={{ color: '#ffffff', width:'60%', padding: 90}}>{"under the guidance of Mr. Marcel FILOCHE, a research director at CNRS, we investigated the surfactant diffusion at the alveolar surface, a crucial phenomenon in the respiratory process."}</div>
        </div>
     


      </div>
      
    </div>
    <div className="col text">
          <div className="titletext"style={{ color: '#000000',  textAlign: 'left', marginLeft:50,marginTop:50 }}>{"Project Presentation:"}</div>
          <br></br>
          <iframe src="https://um6p-my.sharepoint.com/personal/dounia_aitsabban_emines_um6p_ma/_layouts/15/Doc.aspx?sourcedoc={aec030a1-6881-4287-98db-40096559ddd9}&amp;action=embedview&amp;wdAr=1.7777777777777777" width="1440px" height="839px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
          <br></br>
 <br /> <br /> <br /> <br /> 


        </div>
        <br></br><br></br><br></br>
 
                
        <Contactfooter />
      </div>
    

    </div>


  
    );
  }  {
    return <div>Still loading</div>;
  }
}

export default Project;
