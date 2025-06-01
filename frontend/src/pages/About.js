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
          <div className={styles.card}>
            <div className={styles.cardTextContent}>
              <div className={styles.tagWrapper}>
                <span style={{ marginLeft: 0, color: 'white', backgroundColor: 'black' }}>{tag}</span>
                
              </div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDescription}>{description}</p>
              
            </div>
          </div>
        </div>
            {/* Content Section */}
      <div style={{ overflowY: 'auto', maxHeight: '640px', padding: '1%' }}>
        {images.map((image, index) => (
          <React.Fragment key={index}>
            <img style={{ width: '100%' }} src={image.src} alt={image.alt} />
            <br /><br />
          </React.Fragment>
        ))}

        <Paragraph>
          Hi, I'm El Houssaine Chahboun, an engineering student with a deep passion for mathematics, data science, and creative design. Currently, I'm pursuing my Master's (M2) in Data Science at École Polytechnique in Paris, with a focus on generative AI, machine learning, and computer vision. Throughout my academic journey, I've developed robust programming skills, particularly in graphics programming, React, and Spark DataFrames.
        </Paragraph>

        <Paragraph>
          My interests extend beyond technical pursuits. I'm a dedicated graphic designer and maintain a Behance portfolio where I showcase my work on web and design projects. Recently, I embarked on a GitHub project titled <em>2D Dialogue Games</em>, a project that has allowed me to experiment with state-of-the-art AI algorithms to enhance interactive storytelling.
        </Paragraph>

        <Paragraph>
          I thrive in collaborative environments and am deeply grateful for the mentors, friends, and educators who've supported me along the way. Working with diverse teams has enriched my perspective, enabling me to learn from others and improve my skills across disciplines. Whether it's tackling academic challenges, leading projects, or even engaging in a friendly game of chess (a new passion!), I approach each endeavor with a commitment to excellence and an open mind.
        </Paragraph>

        <Paragraph>
          Feel free to connect with me if you're interested in data science, creative technology, or simply want to share insights about mathematics, AI, or design. I believe in the power of community and collaboration, and I'm always eager to connect with like-minded individuals who are passionate about making a positive impact through technology.
        </Paragraph>
        <br /><br />
        <img style={{ width: '100%'}} src={'https://santetudiant.com/wp-content/uploads/2023/07/polytechnique2.jpg'} alt={'dsf'} />
            <br /><br />
      </div>

      </div>

  

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default MyComponent;
