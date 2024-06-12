import React, { useState, useEffect } from 'react';
import Articlecomp from "../components/aboutmepinned";
import FAQ from "../components/FAQ";
import Blackbords from "../components/Blackbords";
import styles from '../components/Articlecomp.module.css';
import shortyy from "./394709091_359688783151169_5143872337014891556_n-ezgif.com-video-to-gif-converter.gif";
import Footer from '../components/footer_new';

const title = 'EL HOUSSAINE CHAHBOUN'
const description = 'I am a final year engineering student at EMINES School of Industrial Management with a special interest for Data Science and Machine Learning.'
const tag = 'BIO'
const imageUrl = 'IMG_2089.jpg'
const isFeatured = true


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

  
  

  
  return (

    

    
    <div>
      
      {/* Two additional columns */}
      <div className={styles.additionalColumnsContainer}>
        <div className={styles.additionalColumnLeft} style={{ width: '85%' }}>
          {/* Content for left column */} 
          <div className={styles.bio} >
            <div className={styles.biotitle} >{'ABOUT ME'}
            </div>
          </div>
        </div>
        <div className={styles.additionalColumnRight} style={{ width: '15%' }}>
          {/* Content for right column */} 
          <div style={{ width: '100%', height: '100%', backgroundColor: 'black' }}
          >
            <div className={styles.rightArrow}>
            <svg
          xmlns="http://www.w3.org/2000/svg"
          width="214"
          height="214"
          viewBox="0 0 224 224"
          fill="none"
        >
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
      <div style={{ width: '100%', height: '30px', backgroundColor: 'white' }}
          ></div>
      <div style={{ display: 'flex' }}>
  <div style={{ padding: '1%', marginTop:'-13px' }}>
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
      
      </div>
      <div className={styles.cardTextContent}>
        <div className={styles.tagWrapper}>
          <span style={{ marginLeft: 0, color: 'white', backgroundColor: 'black',  }}>{tag}</span>
        </div>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  </div>
  <div style={{ overflowY: 'auto', maxHeight: '640px', padding: '1%'}}>
    {/* Add your scrollable content here */}
    <h3 style={{ fontSize: '40px' }} className={styles.biotitle}></h3>
    <p className={styles.cardDescription}> </p>
<img style={{ width: '100%' }} src={'https://elhoussainechahboun.com/323728844_3210235322620335_8663680062689233439_n.jpg'} alt={title}/>
<br></br><br></br>
<p className={styles.cardDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac feugiat libero. In quam felis, varius eget eros id, sollicitudin condimentum turpis. Vestibulum nisi elit, facilisis ac magna sed, auctor eleifend justo. Phasellus congue mauris vitae enim facilisis, ac pulvinar ipsum sagittis. Nulla tellus tortor, suscipit ac sem quis, faucibus fringilla felis. Sed pulvinar tincidunt enim ac sollicitudin. Vivamus tincidunt pulvinar velit in rhoncus. Quisque fringilla eros eget ex porttitor, in tincidunt massa feugiat.

In hac habitasse platea dictumst. In vulputate hendrerit tincidunt. Erat. Cras rutrum pharetra risus vitae ullamcorper. Donec non convallis erat. Praesent aliquet, lacus nec sollicitudin varius, diam enim molestie lorem, eu viverra nulla nulla tincidunt mi. Cras porta tincidunt nisl vel vulputate. Suspendisse a massa pharetra, commodo urna at, posuere urna. Proin faucibus convallis turpis, et fermentum justo dignissim non. Cras quis sem quis justo ultricies viverra sed porta quam. Nullam nec eros id nulla auctor lacinia.

 tincidunt. </p></div>
</div>

    

    <Footer />
    </div>
  );
}

export default MyComponent;

