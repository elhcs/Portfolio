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

     {/* Conditional rendering based on isMobile state */}
     <div className={`${styles.additionalColumnsContainer} ${isMobile ? styles.hideOnMobile : ''}`}>
        <div className={styles.additionalColumnLeft} style={{ width: '85%' }}>
          {/* Content for left column */}
          <div className={styles.bio}>
            <div className={styles.biotitle}>{'About'}</div>
            <div className={styles.bioparag}>{'I  have a strong passion for mathematics, data science, and creative design. Currently, I am pursuing a Masters degree (M2) in Data Science at École Polytechnique in Paris.'}</div>
          </div>
        </div>
        <div className={styles.additionalColumnRight} style={{ width: '295px' }}>
          {/* Content for right column */}
          <div className={`${styles.blackBox} black-box`}>
            <div className={styles.rightArrow}>
            <svg xmlns="http://www.w3.org/2000/svg" width="214" viewBox="0 27 300 350" fill="none" className="arrow-svg">
                    <rect width="214" height="214" fill="none" />
                <path
                  d="M109.379 157.621C110.55 158.793 112.45 158.793 113.621 157.621L132.713 138.529C133.885 137.358 133.885 135.458 132.713 134.287C131.542 133.115 129.642 133.115 128.471 134.287L111.5 151.257L94.5294 134.287C93.3579 133.115 91.4584 133.115 90.2868 134.287C89.1152 135.458 89.1152 137.358 90.2868 138.529L109.379 157.621ZM108.5 70V155.5H114.5V70H108.5Z"
                  fill="white"
                />
              </svg>
            </div>
       
          </div>
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

 {/* Conditional rendering based on isMobile state */}
 <div className={`${styles.additionalColumnsContainer} ${isMobile ? styles.hideOnMobile : ''}`}>
    <div className={styles.additionalColumnLeft} style={{ width: '85%' }}>
        {/* Content for left column */}
        <div className={styles.bio}>
            <div className={styles.biotitle}>{'About'}</div>
            <div className={styles.bioparag}>{'Passionate about math, data science, and creative design, Im currently exploring the world of data at École Polytechnique in Paris. Always curious, always creating!'}</div>
        </div>
    </div>
    <div className={styles.additionalColumnRight} style={{ width: '295px' }}>
        {/* Content for right column */}
        <div className={`${styles.blackBox} black-box`}>
            <div className={styles.rightArrow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="214" viewBox="0 0 300 124" fill="none" className="arrow-svg">
                    <rect width="214" height="214" fill="none" />
                    <path
                        d="M109.379 66.379C110.55 65.207 112.45 65.207 113.621 66.379L132.713 85.471C133.885 86.642 133.885 88.542 132.713 89.713C131.542 90.885 129.642 90.885 128.471 89.713L111.5 72.743L94.5286 89.713C93.3571 90.885 91.4576 90.885 90.286 89.713C89.1144 88.542 89.1144 86.642 90.286 85.471L109.379 66.379ZM108.5 155.5V70H114.5V155.5H108.5Z"
                        fill="white"
                    />
                </svg>
            </div>
        </div>
    </div>
</div>
            <footer>
                <div class="top-section">
                    <div class="logo-section">
                        <div class="logo">
                <svg width="150"  viewBox="0 0 1280 594" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M114.98 477.783V594H0.000976562V477.783H114.98Z" fill="black"/>
                    <path d="M472.669 477.783V594H587.647V477.783H472.669Z" fill="black"/>
                    <path d="M229.957 361.564V477.781H114.979V361.564H229.957Z" fill="black"/>
                    <path d="M357.697 361.564V477.781H472.676V361.564H357.697Z" fill="black"/>
                    <path d="M357.689 232.434V361.564H229.936V232.434H357.689Z" fill="black"/>
                    <path d="M229.957 232.434V361.564H357.711V232.434H229.957Z" fill="black"/>
                    <path d="M472.689 116.215V232.432H357.711V116.215H472.689Z" fill="black"/>
                    <path d="M114.957 116.215V232.432H229.936V116.215H114.957Z" fill="black"/>
                    <path d="M587.654 0V116.217H472.676V0H587.654Z" fill="black"/>
                    <path d="M-1.52588e-05 0V116.217H114.979V0H-1.52588e-05Z" fill="black"/>
                    <path d="M685.133 476.126V594H1279.13V476.126H685.133Z" fill="black"/>
                    <path d="M1041.29 237.966V356.157H923.1V237.966H1041.29Z" fill="black"/>
                    <path d="M685.133 237.853V356.147H1279.13V237.853H685.133Z" fill="black"/>
                    <path d="M685.133 0V118.295H1279.13V0H685.133Z" fill="black"/>
                </svg>
            </div>
                        <div></div>
                    </div>
                    <div class={`nav-section ${isMobile ? styles.hideOnMobile : ''}`}>
                        <ul>
                            <li><a href="#">Graphic Design</a></li>
                            <li><a href="#">University Club</a></li>
                            <li><a href="#">Join The Club</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">Showcase</a></li>
                            <li><a href="#">Short Film</a></li>
                            <li><a href="#">Support</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Education</a></li>
                            <li><a href="#">Resources</a></li>
                        </ul>
                    </div>
                </div>
                <div class="bottom-section">
                    <div class="social-media">
                        <a href="#">&#xf09a;</a> 
                        <a href="#">&#xf099;</a> 
                        <a href="#">&#xf0e0;</a> 
                        <a href="#">&#xf1a0;</a> 
                        <a href="#">&#xf16d;</a> 
                    </div>
                    <small>&copy; Copyright. All rights reserved.</small>
                </div>
            </footer>

    </div>

  );
}

export default MyComponent;

