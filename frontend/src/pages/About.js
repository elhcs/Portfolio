import React, { useState, useEffect } from 'react';
import Articlecomp from "../components/aboutmepinned";
import FAQ from "../components/FAQ";
import Blackbords from "../components/Blackbords";
import styles from '../components/Articlecomp.module.css';
import Footer from '../components/footer_new';


<style>
  {`
    .bw-hover {
      width: 100%;
      filter: grayscale(100%);
      transition: filter 0.5s ease;
    }

    .bw-hover:hover {
      filter: grayscale(0%);
    }
  `}
</style>
const MyComponent = () => {
  // State for detecting mobile view
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Initial state setup
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Content constants
  const title = 'EL HOUSSAINE CHAHBOUN';
  const description = 'I am an engineering student with a deep passion for mathematics, data science, and creative design. Currently, I am pursuing my Master\'s (M2) in Data Science at École Polytechnique in Paris.';
  const tag = 'BIO';
  const images = [
    { src: 'https://elhoussainechahboun.com/323728844_3210235322620335_8663680062689233439_n.jpg', alt: 'El Houssaine Chahboun' },
   
  ];

  // Reusable paragraph component
  const Paragraph = ({ children }) => (
    <p style={{ marginBottom: '20px' }} className={styles.cardDescription}>
      {children}
    </p>
  );

  return (
    <div>
      {/* White spacer */}
      <div style={{ width: '100%', height: '30px', backgroundColor: 'white' }}></div>

      {/* Intro Card */}
      <div style={{ display: isMobile ? 'block' : 'flex' }}>
        <div style={{ padding: '1%', marginTop: '-13px' }}>
          <div className={styles.card_elh}>
            <div className={styles.cardTextContent}>
              <div className={styles.tagWrapper}>
                <span style={{ marginLeft: 0, color: 'white', backgroundColor: 'black', }}>{tag}</span>
                
              </div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDescription}>{description}</p>
              <img style={{ width: '100%' }} src={"https://i.pinimg.com/1200x/3d/5a/13/3d5a13d9ffffdd75b7f837bc97eeaf06.jpg"} alt={"Ds"} />
              
            </div>
          </div>
        </div>
            {/* Content Section */}
      <div style={{ overflowY: 'auto', maxHeight: '645px', padding: '1%' }}>
        {images.map((image, index) => (
          <React.Fragment key={index}>
            <img style={{ width: '100%' }} src={image.src} alt={image.alt} />
            <br /><br />
          </React.Fragment>
        ))}

      <Paragraph>
              I'm El Houssaine Chahboun, an engineering graduate and current Master's student in Data Science at École Polytechnique. My journey blends a passion for mathematics, computer science, and design, rooted in a deep curiosity and drive for excellence.
      </Paragraph>
      <Paragraph>
              Throughout my academic path,from excelling in preparatory classes in Morocco to being among the admitted students to EMINES, and now pursuing advanced studies in France at École Polytechnique, I’ve cultivated strong analytical thinking and a resilience shaped by both academic rigor and personal growth.
      </Paragraph>
      <Paragraph>
              My current focus lies in the field of statistical learning, I'm particularly interested in the theoretical aspects of statistics, including concentration inequalities,computational statistics, generalization bounds, and the robustness of learning algorithms. During my M2, I've had the opportunity to engage with advanced topics like empirical processes, high-dimensional inference, and statistical learning theory,tools that I believe are essential for designing reliable, interpretable models in AI.
      </Paragraph>
      <Paragraph>
              I am actively looking to deepen my engagement in research, especially at the intersection of theoretical statistics and machine learning. I’m drawn to problems that require both rigorous mathematical reasoning and practical understanding of data. Whether it’s analyzing model behavior under distributional shifts or studying performance under extreme values, I strive to bridge theory and application in a meaningful way.
      </Paragraph>
      <Paragraph>
              Beyond research, I’m also a graphics programmer and designer, often building interactive visual systems and web experiences that reflect a balance of structure and creativity. I believe this synthesis,between rigorous thinking and visual intuition,shapes how I approach both scientific inquiry and creative work.
      </Paragraph>
      <Paragraph>
              This page is a glimpse into my evolving journey. If you'd like to discuss research, explore collaborations, or just chat about math and ideas, feel free to reach out.
      </Paragraph>

     
      </div>

      </div>

  

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default MyComponent;
