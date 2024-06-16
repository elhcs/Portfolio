import React, { useState, useEffect } from 'react';
import Articlecomp from "../components/articlescomponent";
import FAQ from "../components/FAQ";
import Blackbords from "../components/Blackbords";
import styles from '../components/Articlecomp.module.css';
import Footer from '../components/footer_new';
import shortyy from "./394709091_359688783151169_5143872337014891556_n-ezgif.com-video-to-gif-converter.gif";
import Feed from "../components/Feed";

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
    "https://i.ibb.co/pJLyjpM/ezgif-com-video-to-gif-converted.gif",
    // Add more image URLs as needed
  ]);

  const textElements = [
    ["MATHEMATICS, DATASCIENCE AND GRAPHICS", "Diverse motion design projects, from club content to high-profile event videos, showcasing the broad creative scope of this field."]
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textElements.length);
    }, 3000); // Changes text every 3000 milliseconds (3 seconds)

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  const navigateTo = index => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.textWrapper}>
            <div className={styles.topText}>
              <p>{textElements[currentIndex][0]}</p>
            </div>
            <div className={styles.bottomText}>
              <p>{textElements[currentIndex][1]}</p>
            </div>
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
        <div className={styles.column}>
          <img src={imageList[currentIndex]} style={{ width:'100%'}} alt="Placeholder" />
        </div>
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

      <Footer />

    </div>

  );
}

export default MyComponent;

