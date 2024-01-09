
import "./MainRec.css";
import MainLogo from "./MainLogo";
import React, { useState } from "react";
import "./FAQ.css";
import { NavLink } from "react-router-dom";



function Autoartc(props) {
    

  if (props.isImg === true) {
        const url_img = props.imgUrl;
        const back_img = "url(" +"https://portfoliox-vdrp.onrender.com"+ url_img + ")";
    } 
 
    return (
        <NavLink
        to={props.isClickImg ? "/project/" + props.prjId : "/"}
        style={{ textDecoration: "none" }}
      >
        <a href="/article">
        <div style={{background:props.hex1}} className="container">
  <div className="row">
    <div className="col-md-6">
      <div className="titletext" style={{ color: 'black' , marginTop: '11%',width:"80%"}}>{props.title}</div>
      <div className="paratext" style={{ color: 'black', marginTop: '15%',width: '73%',marginBottom:'11%'  }}>{props.parag1}</div>
    </div>
    <div className="col-md-6">
      <div className="desc">
        <img src={"url(" +"https://portfoliox-vdrp.onrender.com"+props.imgUrl+ ")"} alt="Description of the image" style={{width:'102%'}}/>
      </div>
    </div>
  </div>
</div>
          </a>
          </NavLink>
      );
    }
    

export default Autoartc;