import React, { useState } from "react";
import "./FAQ.css";
import { NavLink } from "react-router-dom";
import styles from './Articlecomp.module.css';


function FAQ() {

  return (
    <NavLink to={"/article"}>
    <div className="container" >

      <div className={styles.column}>
        <div className={styles.textWrapper} style={{ width: '50%'}}>

          <div className={styles.topText}>{"MOTION DESIGN SHOWREEL"}</div>
          <div className={styles.bottomText}style={{ color: '#ffffff' }}>{"In 2023, I created diverse motion design projects, from club content to high-profile event videos, showcasing the broad creative scope of this field."}</div>
        </div>
        <div className={styles.column}>
        <img src="https://i.ibb.co/pJLyjpM/ezgif-com-video-to-gif-converted.gif" alt="Description of the image" style={{ width: '100%'}}/>
        </div>
      </div>
      </div>
      </NavLink>
  );
}

export default FAQ;


{/* <div className={styles.container}>
<div className={styles.column}>
  <div className={styles.textWrapper}>
    <div className={styles.topText}>
      <p>{textElements[currentIndex][0]}</p>
    </div>
    <div className={styles.bottomText}>
      <p>{textElements[currentIndex][1]}</p>
    </div>
  </div> */}