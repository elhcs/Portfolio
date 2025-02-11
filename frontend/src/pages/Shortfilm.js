import React, { useState, useEffect } from 'react';
import Articlecomp from "../components/articlescomponent";
import FAQ from "../components/FAQ";
import Blackbords from "../components/Blackbords";
import styles from '../components/Articlecomp.module.css';
import Footer from '../components/footer_new';
import image from "./394709091_359688783151169_5143872337014891556_n.mp4";
import shortyy from "./394709091_359688783151169_5143872337014891556_n-ezgif.com-video-to-gif-converter.gif";
import Feed from "../components/Feed";


const isMobilee = window.innerWidth < 768;
const MyComponent = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Call once to set initial state

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageList, setImageList] = useState([
   shortyy
    // Add more image URLs as needed
  ]);

  const textElements = [
      ["Short Film Starring Me as a Frog", "Houssaine the frog is stunned by technology, which uses increasingly invasive techniques to get  attention. He turns his screen off in an attempt to escape and connect with real life, only to realize it's all under his control."]

  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textElements.length);
    }, 12000); // Changes text every 3000 milliseconds (3 seconds)

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  const navigateTo = index => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.column}>
        <div className={`${styles.textWrapper} ${styles.fade} ${currentIndex === 0 ? styles.fadeActive : ''}`}>
        <div className={styles.topText}>
              <h1 style={{  marginBottom:"10%", margin:"10%", color:"white"}}>{textElements[currentIndex][0]}</h1>
              <p style={{  margin:"10%", color:"white"}}>{textElements[currentIndex][1]}</p>
            </div>
            {/* <div className={styles.bottomText}>
              <p>{textElements[currentIndex][1]}</p>
            </div> */}
          </div>
          <div className={styles.indicatorContainer}>
            {textElements.map((_, index) => (
              <div
                key={index}
                onClick={() => navigateTo(index)}
                className={`${styles.indicator} ${index === currentIndex ? styles.indicatorActive : ''}`}
              ></div>
            ))}
          </div>
        </div>
        <div className={`${styles.column} ${styles.fade} ${currentIndex === 0 ? styles.fadeActive : ''}`}>

          <img src={imageList[currentIndex]} style={{ width:'100%'}} alt="Placeholder" />
        </div>
      </div>


      <section style={{marginLeft:"70px", marginRight:"70px", marginTop:"70px"}}>
        <header className={styles.header}>
          <h1 >Made by</h1>
          <a href="/stories"> : </a>
          
        </header>
             </section>

      <div style={{display: "flex",width: "100%",background: "",height: "auto", padding:"0"}}>
    
        <div className={styles.topText}>
              <h1 style={{  marginBottom:"10%", margin:"1%", color:"black"}}>{"Beatriz Filizola"}</h1>
              <p style={{  margin:"1%", color:"black"}}>{"talented Cinema & Audiovisual artist and passionate stop-motion director, currently pursuing her studies at Universidade Federal Fluminense (UFF) in Rio de Janeiro Brazil."}</p>
              <img  src={"beatriz.jpeg"} style={{ width:'100%', marginTop:"12%"}} alt="Placeholder" />
</div><div className={styles.topText}>
<img src={"elhcs.jpeg"} style={{ width:'100%', marginBottom:"12%"}} alt="Placeholder" />
 <h1 style={{  marginBottom:"10%", margin:"1%", color:"black"}}>{"El Houssaine CHAHBOUN"}</h1>
              <p style={{  margin:"1%", color:"black"}}>{"engineering student with a deep passion for mathematics, data science, and creative design. Currently pursuing my Master's (M2) in Data Science at École Polytechnique in Paris."}</p>
              </div>
      </div>
      
      <section style={{marginLeft:"70px", marginRight:"70px"}}>
        <header className={styles.header}>
          <h1 >Behind The Scenes</h1>
          <a href="/stories"> More  </a>
          
        </header>
             </section>
      <div style={{display: "flex",width: "100%",background: "",height: "auto", padding:"0"}}>
        <div className={styles.column}>
        <div className={`${styles.textWrapper} ${styles.fade} ${currentIndex === 0 ? styles.fadeActive : ''}`}>
        <div className={`${styles.column} ${styles.fade} ${currentIndex === 0 ? styles.fadeActive : ''}`}>

<img src={"shortfilm1.webp"} style={{ width:'100%'}} alt="Placeholder" />
</div>
          </div>
        
        </div>
        <div className={styles.column}>
        <div className={`${styles.textWrapper} ${styles.fade} ${currentIndex === 0 ? styles.fadeActive : ''}`}>
        <div className={`${styles.column} ${styles.fade} ${currentIndex === 0 ? styles.fadeActive : ''}`}>

<img src={"shortfilm2.webp"} style={{ width:'100%'}} alt="Placeholder" />
</div>
          </div>
        
        </div>
      </div>


      <div style={{display: "flex",width: "100%",background: "",height: "auto", padding:"0"}}>
        <div className={styles.column}>
        <div className={`${styles.textWrapper} ${styles.fade} ${currentIndex === 0 ? styles.fadeActive : ''}`}>
        <div className={`${styles.column} ${styles.fade} ${currentIndex === 0 ? styles.fadeActive : ''}`}>

<img src={"shortfilm1.webp"} style={{ width:'100%'}} alt="Placeholder" />
</div>
          </div>
        
        </div>
        <div className={styles.column}>
        <div className={`${styles.textWrapper} ${styles.fade} ${currentIndex === 0 ? styles.fadeActive : ''}`}>
        <div className={`${styles.column} ${styles.fade} ${currentIndex === 0 ? styles.fadeActive : ''}`}>
        <div className={styles.topText}>
        <h1 style={{  marginBottom:"10%", margin:"1%", color:"black"}}>{"Learning and Creative Connections"}</h1>
         <p style={{  margin:"1%", color:"black"}}>{"During my enriching internship in Brazil, I explored machine learning challenges with supportive tutors and diverse problem-solving approaches. Beyond academia, I connected with inspiring individuals, including Alice Kupac and Beatriz Filizola, whose dedication to their cinema and animation project was truly rewarding."}</p>
</div></div>
          </div>
        
        </div>
      </div>

      <div style={{display: "flex",width: "100%",background: "",height: "auto", padding:"0"}}>
        <div className={styles.column}>
        <div className={`${styles.textWrapper} ${styles.fade} ${currentIndex === 0 ? styles.fadeActive : ''}`}>
        <div className={`${styles.column} ${styles.fade} ${currentIndex === 0 ? styles.fadeActive : ''}`}>

<img src={image} style={{ width:'100%'}} alt="Placeholder" />
</div>
          </div>
        
        </div>
        <div className={styles.column}>
        <div className={`${styles.textWrapper} ${styles.fade} ${currentIndex === 0 ? styles.fadeActive : ''}`}>
        <div className={`${styles.column} ${styles.fade} ${currentIndex === 0 ? styles.fadeActive : ''}`}>

<img src={"shortfilm5.webp"} style={{ width:'100%'}} alt="Placeholder" />
</div>
          </div>
        
        </div>
      </div>



      <div style={{display: "flex",width: "100%",background: "",height: "auto", padding:"0"}}>
        <div className={styles.column}>
        <div className={`${styles.textWrapper} ${styles.fade} ${currentIndex === 0 ? styles.fadeActive : ''}`}>
        <div className={`${styles.column} ${styles.fade} ${currentIndex === 0 ? styles.fadeActive : ''}`}>

        <div className={styles.topText}>
        <h1 style={{  marginBottom:"10%", margin:"1%", color:"black"}}>{"A (Long) Stop-Motion Process"}</h1>
         <p style={{  margin:"1%", color:"black"}}>{"with each frame carefully crafted to bring the character's journey to life. The team spent hours designing the set, creating the frog, and meticulously adjusting the scenes to reflect the growing tension between the frog and the invasive technology. Every movement required precise adjustments to ensure smooth animation and convey emotion."}</p>
</div></div>
          </div>
        
        </div>
        <div className={styles.column}>
        <div className={`${styles.textWrapper} ${styles.fade} ${currentIndex === 0 ? styles.fadeActive : ''}`}>
        <div className={`${styles.column} ${styles.fade} ${currentIndex === 0 ? styles.fadeActive : ''}`}>
        <div className={styles.topText}>
        <h1 style={{  marginBottom:"10%", margin:"1%", color:"black"}}>{"Creating a Nighttime Atmosphere"}</h1>
         <p style={{  margin:"1%", color:"black"}}>{"One of the biggest challenges was shooting during the day while the short film's events took place at night. we had to manage lighting carefully to simulate a nighttime atmosphere, using shadows and subtle color shifts to maintain the desired mood. Despite these challenges, we were able to bring the story to life."}</p>
</div></div>
          </div>
        
        </div>
      </div>


      <div style={{display: "flex",width: "100%",background: "",height: "auto", padding:"0"}}>
      <div className={styles.column}>
        <div className={`${styles.textWrapper} ${styles.fade} ${currentIndex === 0 ? styles.fadeActive : ''}`}>
        <div className={`${styles.column} ${styles.fade} ${currentIndex === 0 ? styles.fadeActive : ''}`}>
        <div className={styles.topText}>
        <h1 style={{  marginBottom:"10%", margin:"1%", color:"black"}}>{"The Frog is Me!"}</h1>
         <p style={{  margin:"1%", color:"black"}}>{"Witnessing Alice craft a lonely green frog with just needle and thread, and Beatriz meticulously perfecting lighting setups, was inspiring. Their dedication and creativity made every moment memorable. Back in Morocco, I was touched to find the frog shared my name and lived in an animated version of my Brazilian apartment—a heartwarming reminder of the power of subtle, kind friendships that quietly leave lasting warmth."}</p>
</div></div>
          </div>
        
        </div> <div className={styles.column}>
        <div className={`${styles.textWrapper} ${styles.fade} ${currentIndex === 0 ? styles.fadeActive : ''}`}>
        <div className={`${styles.column} ${styles.fade} ${currentIndex === 0 ? styles.fadeActive : ''}`}>

<img src={"shortfilm4.jpeg"} style={{ width:'100%'}} alt="Placeholder" />
</div>
          </div>
        
        </div>
 
      </div>


      <div class="linesection">
          <Footer />
</div>
    </div>

  );
}

export default MyComponent;




// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "./Project.css";
// import Informationsdesigners from "../components/Informationsdesigners";
// import "../components/Navbar";
// import Contact from "../components/Contact";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { setlight, setdark } from "../reducers/themeReducer";
// import image from "./394709091_359688783151169_5143872337014891556_n.mp4";
// import Footer from "../components/footer_new";
// import styles from '../components/Articlecomp.module.css';
// import Card from "../components/Card";
// import Blackbords from "../components/Blackbords";
// import NewReleases from "../components/articlescomponent.js";
// import Articlecomp from "../components/articlescomponent";
// import GlassCard from '../components/glasscard.js';





// function Project() {
  

  

//  {
  
//     return (
//       <div className="App">
//       <div className="App-body">
        

//       <div className="full-width-container">
//       <div className="row">
//         <div className="col text">
//           <div className="titletext"style={{ color: '#ffffff', padding: 0 }}>{"A SHORTFILM STARRING ME" }<br/>{" AS A FROG"}</div>
//           <div className="paratext"style={{ color: '#ffffff', width:'70%', padding: 40}}>{"Houssaine the frog is stunned by technology, which uses increasingly invasive techniques to get  attention. He turns his screen off in an attempt to escape and connect with real life, only to realize it's all under his control."}</div>
//         </div>
//         <div className="col img">
//         <div style={{
//   backgroundImage: `url(${image})`,
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat',
//   backgroundPosition: 'center',
//   height: '730px',
//   width:"auto",
// }} className="col desc">
      
// </div>
// </div>
//       </div>
      
//     </div>
    
// <div className="bodypage" style={{ padding: '20px', maxWidth: '95%', margin: 'auto' }}>

    
        
//       <br/><br/><br/><br/></div>
//       <section className={styles.newReleases}>
//       <header className={styles.header}>

//         <h2 className={styles.headertitle}>DISCONNECTED by ALICE KUPAC & BEATRIZ FILIZOLA</h2>
//         <a href="/stories" className={styles.allStoriesLink}>Learn more</a>
//              </header>
//              <p className={styles.headertitle}></p>
          
            
//     </section>
//     <div className="paratext"style={{ color: '#000000' ,  textAlign: 'left', marginLeft:55,marginTop:30, width: "70%"}}>{"During my enriching international internship in Brazil, I had the incredible opportunity to delve into various theoretical and practical challenges within the realm of machine learning. Collaborating with remarkably supportive tutors, I explored a diverse array of problem-solving approaches. However, my experience in Brazil extended beyond academia. I had the pleasure of engaging with a multitude of fascinating individuals at the university, each hailing from distinct backgrounds and fields of expertise. Notably, I crossed paths with ALICE KUPAC & BEATRIZ FILIZOLA, both pursuing majors in cinema and animation. Spending time with them was truly rewarding, especially witnessing their dedicated work on an upcoming project."}<br></br><br></br>{"It was a delightful experience observing Alice meticulously craft the main character's doll—a green frog—using only a needle and thread to evoke a sense of loneliness, perfectly aligning with the story. Similarly, witnessing Beatriz's meticulous attention to detail as she adjusted lighting and setups was fascinating. It wasn't until I returned to Morocco that I discovered a surprising revelation upon viewing the trailer—the main character, the frog, shared my name and resided in an animated version of my Brazilian apartment."}<br></br><br></br>{"The revelation was nothing short of amazing, as I realized Alice and Beatriz had invested significant effort in recreating an animated rendition of my former apartment. Their attention to detail was commendable, cleverly embedding hints throughout the movie. For instance, when the frog gazes out the window and spots a colossal building with the letter H atop it, it was a direct reference to the H hotel, situated precisely opposite my Brazil apartment—the place where we often gathered for leisure and hangouts."}<br></br></div>
//           <br></br> <br></br>  
//         <div className="container">
//           <video src="/394709091_359688783151169_5143872337014891556_n.mp4" alt={"bts"} className="unidesclub" autoPlay muted loop controls/>
//         </div>
//         <br/><br/><br/><br/>
//     <img src="377123358_824457912661649_7976711789451193868_n.jpg" alt="Image"   />
//     <br /> <br /> <br /> 
    
//        <Footer />
    

//     </div></div>


  
//     );
//   } 
// }
// // CSS Styles for the matrix layout
// const gridContainerStyle = {
//   display: "grid",
//   gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//   gap: "20px",
//   padding: "20px",
//   marginTop:"-20px",
//   marginLeft:"25px"
// };

// const gridItemStyle = {
//   maxWidth: "100%",
// };



// export default Project;
