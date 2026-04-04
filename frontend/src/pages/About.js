import React, { useState, useEffect } from 'react';
import Articlecomp from "../components/aboutmepinned";
import FAQ from "../components/FAQ";
import Blackbords from "../components/Blackbords";
import styles from '../components/Articlecomp.module.css';
import Footer from '../components/footer_new';

const MyComponent = () => {
  // State for detecting mobile view
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const description =
  (
    <>
      I am a joint PhD student at ESSEC Business School and the University of Warwick, focusing on scalable Bayesian inference for complex latent variable models. I work with Importance Weighted Variational Inference methods and their connections to Sequential Monte Carlo, aiming to improve reliability in high-dimensional applications like epidemiology and neuroscience. I am co-supervised by{' '}
      
      <a
        href="https://www.essec.edu/en/faculty-research/faculty-directory/kamelia-daudel/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Kamélia Daudel
      </a>,{' '}
      <a
        href="https://warwick.ac.uk/fac/sci/statistics/staff/academic-research/johansen/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Adam Johansen
      </a>
      ,{' '}
      <a
        href="https://www.warwick.ac.uk/fac/sci/statistics/staff/academic-research/everitt/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Richard Everitt
      </a>
      and{' '}
      <a
        href="https://www.essec.edu/en/faculty-research/faculty-directory/pierre-jacob/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Pierre Jacob
      </a>{' '}
      

    </>
  );

  const Paragraph = ({ children }) => (
    <p
      style={{
        marginBottom: '20px',
        color: 'black',
        fontSize: '19px',
        lineHeight: '1.6',
        textAlign: 'left',
        maxWidth: '100%',
      }}
      className={styles.cardDescription}
    >
      {children}
    </p>
  );

  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      {/* Container for columns */}
      <div
        style={{
          display: isMobile ? 'block' : 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        {/* Column 1 */}
        <div
          style={{
            overflowY: 'auto',
            overflowX: 'hidden',
            padding: isMobile ? '5%' : '1%',
            borderTop: '2.5px solid black',
            maxHeight: isMobile ? 'none' : '664px',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          <div className={styles.card_elh}>
            <div
              className={styles.cardTextContent}
              style={{
                position: 'relative',
                height: '100%',
              }}
            >
              <h3
                style={{
                  marginLeft: 10,
                  marginBottom: 13,
                  color: 'black',
                  fontWeight: '530',
                  textAlign: 'left',
                }}
              >
                About me
              </h3>

              <p
                style={{
                  marginLeft: 10,
                  color: 'black',
                  fontSize: '20px',
                  textAlign: 'left',
                  maxWidth: '100%',
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word',
                }}
              >
                {description}
              </p>
              
              <br />
              <p
                style={{
                  marginTop: -15,
                  marginLeft: 13,
                  color: 'black',
                  fontSize: '11px',
                  textAlign: 'left',
                }}
              >
                <a href="mailto:el-houssaine.chahboun@warwick.ac.uk">
  el-houssaine [dot] chahboun [at] warwick [dot] ac [dot] uk
</a>
              </p>
              <br />
              <br />

              <div style={{ marginTop: 'auto', overflow: 'hidden' }}>
                <img
                  style={{ 
                    marginLeft: '0',
                    width: isMobile ? '95%' : '18%',
                    maxWidth: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                  src="testid.png"
                  alt="Profile"
                />
              </div>

            
            </div>
          </div>
        </div>

        {/* Column 2 */}
        
      </div>

      <Footer />
    </div>
  );
};

export default MyComponent;
