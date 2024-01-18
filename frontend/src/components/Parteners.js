import React, { useState } from "react";
import "./FAQ.css";




function FAQ() {

  return (
    <div className="container">
      <div className="row">
      <div className="col desc">
        <img src="image.png" alt="Description of the image" style={{ width: '100%', filter: 'grayscale(100%) saturate(500%)' }}/>
        </div>
        <div className="col text">
          <br></br>
          <div className="titletext"style={{ color: '#ffffff' }}>{"EL HOUSSAINE CHAHBOUN"}</div> <br></br><br></br><br></br><br></br>
          <div className="paratext"style={{ color: '#ffffff',width:'70%' }}>{"I was born and raised in Rabat, Morocco. I’m a final year engineering studenat tMohamed VI Polytechnic University, where I studied Industrial Management, Data Science, and Computer Science."}</div>
        </div>
       
      </div>
      </div>
  );
}

export default FAQ;
