
import "./MainRec.css";
import MainLogo from "./MainLogo";
import React, { useState } from "react";
import "./FAQ.css";


function Autoartc(props) {
  if (props.isImg === true) {
        const url_img = props.imgUrl;
        const back_img = "url(" + url_img + ")";
    }
 
    return (
        <a href="/article">
        <div className="container">
    
          <div className="row">
            <div className="col text">
              <div className="titletext"style={{ color: '#ffffff' }}>{props.title}</div>
              <div className="paratext"style={{ color: '#ffffff' }}>{props.parag1}</div>
            </div>
            <div className="col desc">
            <img src={props.imgs[1].path_url} alt="Description of the image" style={{ width: '100%' }}/>
            </div>
          </div>
          </div>
          </a>
      );
    }
    

export default Autoartc;