import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Project.css";
import Informationsdesigners from "../components/Informationsdesigners";
import "../components/Navbar";
import Contact from "../components/Contact";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setlight, setdark } from "../reducers/themeReducer";
import image from "./394709091_359688783151169_5143872337014891556_n.mp4";
import Footer from "../components/footer_new";


function Project() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setlight());

   
  }, []);

 {
    return (
      <div className="App">
      <div className="App-body">
        

      <div className="full-width-container">
      <div className="row">
        <div className="col text">
          <div className="titletext"style={{ color: '#ffffff', padding: 0 }}>{"A SHORTFILM STARRING ME" }<br/>{" AS A FROG"}</div>
          <div className="paratext"style={{ color: '#ffffff', width:'70%', padding: 40}}>{"Houssaine the frog is stunned by technology, which uses increasingly invasive techniques to get  attention. He turns his screen off in an attempt to escape and connect with real life, only to realize it's all under his control."}</div>
        </div>
        <div className="col img">
        <div style={{
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  height: '730px',
  width:"auto",
}} className="col desc">

</div>
</div>
      </div>
      
    </div>
<div className="bodypage" style={{ padding: '20px', maxWidth: '95%', margin: 'auto' }}>

    <div className="col text">
          <div className="titletext"style={{ color: '#000000',  textAlign: 'left', marginLeft:50,marginTop:50 }}>{"DISCONNECTED"}<br></br>{" by ALICE KUPAC & BEATRIZ FILIZOLA"}</div>
          <div className="paratext"style={{ color: '#000000' ,  textAlign: 'left', marginLeft:55,marginTop:30, width: "70%"}}>{"During my enriching international internship in Brazil, I had the incredible opportunity to delve into various theoretical and practical challenges within the realm of machine learning. Collaborating with remarkably supportive tutors, I explored a diverse array of problem-solving approaches. However, my experience in Brazil extended beyond academia. I had the pleasure of engaging with a multitude of fascinating individuals at the university, each hailing from distinct backgrounds and fields of expertise. Notably, I crossed paths with ALICE KUPAC & BEATRIZ FILIZOLA, both pursuing majors in cinema and animation. Spending time with them was truly rewarding, especially witnessing their dedicated work on an upcoming project."}<br></br><br></br>{"It was a delightful experience observing Alice meticulously craft the main character's doll—a green frog—using only a needle and thread to evoke a sense of loneliness, perfectly aligning with the story. Similarly, witnessing Beatriz's meticulous attention to detail as she adjusted lighting and setups was fascinating. It wasn't until I returned to Morocco that I discovered a surprising revelation upon viewing the trailer—the main character, the frog, shared my name and resided in an animated version of my Brazilian apartment."}<br></br><br></br>{"The revelation was nothing short of amazing, as I realized Alice and Beatriz had invested significant effort in recreating an animated rendition of my former apartment. Their attention to detail was commendable, cleverly embedding hints throughout the movie. For instance, when the frog gazes out the window and spots a colossal building with the letter H atop it, it was a direct reference to the H hotel, situated precisely opposite my Brazil apartment—the place where we often gathered for leisure and hangouts."}<br></br></div>
          <br></br> <br></br>  
        <div className="container">
          <video src="/394709091_359688783151169_5143872337014891556_n.mp4" alt={"bts"} className="unidesclub" autoPlay muted loop controls/>
        </div>
        <br/><br/><br/><br/>
    <img src="377123358_824457912661649_7976711789451193868_n.jpg" alt="Image"   />

        </div>
      <br/><br/><br/><br/></div>
        
    <Footer />
    

    </div></div>


  
    );
  } 
}

export default Project;
