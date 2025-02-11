import React, { useState, useEffect } from 'react';
import Articlecomp from "../components/articlescomponent";
import FAQ from "../components/FAQ";
import Blackbords from "../components/Blackbords";
import styles from '../components/Articlecomp.module.css';
import Footer from '../components/footer_new';

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
    "https://i.ibb.co/pJLyjpM/ezgif-com-video-to-gif-converted.gif","https://portfoliox-vdrp.onrender.com/public/images/f987ac3c-0c6b-49b3-b016-52d00a5d755a-1732460993710.png","elxdesign.gif"
    // Add more image URLs as needed
  ]);

  const textElements = [
    ["MATHEMATICS, MACHINE LEARNING AND ARTS", "I'm all about mathematics, machine learning, and creative design (in that exact order, because even my passions need a proper sequence)"],
    ["Tracking by Detection in Computer Vision", "An introduction to tracking objects across frames in video using the Tracking by Detection approach, including pose estimation and tracking algorithms."],
    ["Making music with LSTM and Transformers", "Training LSTM and Transformer models for generating music sequences (One-to-Many)."]

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

     {/* Conditional rendering based on isMobile state */}
     <div className={`${styles.additionalColumnsContainer} ${isMobile ? styles.hideOnMobile : ''}`}>
        


      </div>
      
      <Articlecomp />
      
      <section className={styles.newReleases}>
        <header className={styles.header}>
          <h2 className={styles.headertitle}>Written Articles</h2>
          <a href="/stories" className={styles.allStoriesLink}> More Articles </a>
          
        </header>
             </section>
             <Feed />
              

      <section className={styles.newReleases}>
        <header className={styles.header}>
          <h2 className={styles.headertitle}>University Design Club</h2>
          <a href="/stories" className={styles.allStoriesLink}> Join us </a>
        </header>
      </section> <video src={"https://elx.onrender.com/udcvideo.mp4"}className={styles.unidesclub} autoPlay muted loop controls/>

      <Blackbords />

      

      <div class="linesection">
          <Footer />
</div>
    </div>

  );
}

export default MyComponent;

