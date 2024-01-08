import React, { useState } from "react";
import "./FAQ.css";




function FAQ() {

  return (
    <a href="/article">
    <div className="container">

      <div className="row">
        <div className="col text">
          <div className="titletext"style={{ color: '#ffffff' ,width:"80%"}}>{"MOTION DESIGN SHOWREEL"}</div>
          <div className="paratext"style={{ color: '#ffffff' }}>{"In 2023, I created diverse motion design projects, from club content to high-profile event videos, showcasing the broad creative scope of this field."}</div>
        </div>
        <div className="col desc">
        <img src="https://i.ibb.co/pJLyjpM/ezgif-com-video-to-gif-converted.gif" alt="Description of the image" style={{ width: '100%' }}/>
        </div>
      </div>
      </div>
      </a>
  );
}

export default FAQ;
