import React, { useState, useEffect } from 'react';
import Timelines from '../components/vedecom_internship_TL';
import Timeline from '../components/internship_timeline';
import threetimeline from '../components/3dgs_timetable';
import Project from '../components/3dviewer';
import styles from '../components/Articlecomp.module.css';
import Card from "../components/Card";

import Footer from "../components/footer_new";
import { Play, ArrowUpRight, Mail, ArrowDown, Plus, Minus } from 'lucide-react';

import './Rebrand.css';



const Rebrand = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);


  const projects = [
    {
      title: "Grass Surface Extension",
      category: "Natural Terrain",
      year: "2024",
      description: "AI-powered brush learns grass patterns and textures to seamlessly extend natural terrain surfaces with organic blade variation and realistic density patterns.",
      tech: ["Deep Learning", "3D Gaussian Splatting", "Pattern Recognition"],
      color: "linear-gradient(135deg, #10b981 0%, #059669 100%)"
    },
    {
      title: "Wet Floor Surfaces", 
      category: "Architectural",
      year: "2024",
      description: "Captures reflection patterns and water accumulation to extend wet surface areas with realistic water pooling effects and surface moisture variation.",
      tech: ["Reflection Mapping", "KIRI Engine", "Real-time Rendering"],
      color: "linear-gradient(135deg, #3b82f6 0%, #0891b2 100%)"
    },
    {
      title: "Concrete Ground",
      category: "Industrial",
      year: "2024", 
      description: "Learns concrete texture patterns, cracks, and weathering to extend industrial surfaces with authentic crack propagation and material consistency.",
      tech: ["Texture Analysis", "Wear Simulation", "Material Synthesis"],
      color: "linear-gradient(135deg, #9ca3af 0%, #57534e 100%)"
    }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const stylesxx = {
    container: {
      backgroundColor: '#ffffff',
      color: '#000000',
      minHeight: '100vh',
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    header: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid #e5e7eb',
      padding: '1rem 0'
    },
    headerContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    logo: {
      fontWeight: 'bold',
      fontSize: '1.25rem'
    },
    nav: {
      display: 'flex',
      gap: '2rem'
    },
    navButton: {
      background: 'none',
      border: 'none',
      color: '#000000',
      cursor: 'pointer',
      transition: 'color 0.3s ease',
      fontSize: '1rem'
    },
    navButtonHover: {
      color: '#6b7280'
    },
    mobileMenu: {
      display: 'none'
    },
    mobileMenuOpen: {
      position: 'fixed',
      inset: 0,
      zIndex: 40,
      backgroundColor: '#ffffff',
      paddingTop: '5rem',
      padding: '5rem 1.5rem 0 1.5rem'
    },
    mobileNav: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    },
    mobileNavButton: {
      background: 'none',
      border: 'none',
      fontSize: '2rem',
      fontWeight: '300',
      textAlign: 'left',
      cursor: 'pointer'
    },
    hero: {
      paddingTop: '6rem',
      paddingBottom: '3rem',
      padding: '6rem 1.5rem 3rem 1.5rem'
    },
    heroContent: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    heroInner: {
      maxWidth: '64rem'
    },
    heroTitle: {
      fontSize: '4rem',
      fontWeight: '300',
      lineHeight: '1.1',
      marginBottom: '1.5rem'
    },
    heroTitleLarge: {
      fontSize: '6rem'
    },
    heroSubtitle: {
      fontSize: '1.5rem',
      fontWeight: '300',
      color: '#6b7280',
      marginBottom: '2rem',
      maxWidth: '32rem',
      lineHeight: '1.6'
    },
    heroButtons: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      flexWrap: 'wrap'
    },
    primaryButton: {
      backgroundColor: '#000000',
      color: '#ffffff',
      padding: '0.75rem 2rem',
      borderRadius: '9999px',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '1rem'
    },
    primaryButtonHover: {
      backgroundColor: '#1f2937'
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      color: '#000000',
      padding: '0.75rem 2rem',
      borderRadius: '9999px',
      border: '1px solid #000000',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '1rem'
    },
    secondaryButtonHover: {
      backgroundColor: '#000000',
      color: '#ffffff'
    },
    section: {
      padding: '4rem 1.5rem'
    },
    sectionAlt: {
      padding: '4rem 1.5rem',
      backgroundColor: '#f9fafb'
    },
    sectionDark: {
      padding: '4rem 1.5rem',
      backgroundColor: '#000000',
      color: '#ffffff'
    },
    sectionContent: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    sectionTitle: {
      fontSize: '4rem',
      fontWeight: '300',
      marginBottom: '1rem'
    },
    sectionTitleLarge: {
      fontSize: '6rem'
    },
    sectionSubtitle: {
      fontSize: '1.25rem',
      color: '#6b7280',
      marginBottom: '3rem'
    },
    grid: {
      display: 'grid',
      gap: '2rem'
    },
    gridMd2: {
      gridTemplateColumns: 'repeat(2, 1fr)'
    },
    gridMd3: {
      gridTemplateColumns: 'repeat(3, 1fr)'
    },
    projectCard: {
      cursor: 'pointer',
      transition: 'transform 0.3s ease'
    },
    projectCardHover: {
      transform: 'translateY(-4px)'
    },
    projectImage: {
      aspectRatio: '4/3',
      borderRadius: '0.5rem',
      marginBottom: '1.5rem',
      position: 'relative',
      overflow: 'hidden'
    },
    projectImageOverlay: {
      position: 'absolute',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0,
      transition: 'opacity 0.3s ease'
    },
    projectImageOverlayHover: {
      opacity: 1
    },
    projectYear: {
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(8px)',
      padding: '0.25rem 0.75rem',
      borderRadius: '9999px',
      fontSize: '0.875rem'
    },
    projectInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    },
    projectTitle: {
      fontSize: '2rem',
      fontWeight: '300'
    },
    projectCategory: {
      color: '#6b7280',
      textTransform: 'uppercase',
      fontSize: '0.875rem',
      letterSpacing: '0.05em'
    },
    projectDescription: {
      color: '#374151',
      lineHeight: '1.6'
    },
    techTags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      paddingTop: '0.5rem'
    },
    techTag: {
      fontSize: '0.75rem',
      backgroundColor: '#f3f4f6',
      padding: '0.25rem 0.75rem',
      borderRadius: '9999px'
    },
    aboutGrid: {
      display: 'grid',
      gap: '3rem',
      alignItems: 'center'
    },
    aboutGridMd: {
      gridTemplateColumns: 'repeat(2, 1fr)'
    },
    aboutText: {
      fontSize: '1.25rem',
      color: '#374151',
      marginBottom: '1.5rem',
      lineHeight: '1.6'
    },
    aboutTextSecondary: {
      fontSize: '1.125rem',
      color: '#6b7280',
      marginBottom: '2rem',
      lineHeight: '1.6'
    },
    featureList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    },
    featureItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.5rem 0',
      borderBottom: '1px solid #e5e7eb'
    },
    featureTitle: {
      fontWeight: '500'
    },
    featureDesc: {
      fontSize: '0.875rem',
      color: '#6b7280'
    },
    infoCard: {
      backgroundColor: '#ffffff',
      padding: '2rem',
      borderRadius: '0rem',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      marginBottom: '1.5rem'
    },
    infoCardTitle: {
      marginLeft:'13%',
      textAlign:'left',
      fontSize: '2rem',
      fontWeight: '300',
      marginBottom: '1rem'
    },
    infoList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
      color: '#374151'
    },
    statusList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem'
    },
    statusItem: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    statusGreen: {
      color: '#059669'
    },
    statusBlue: {
      color: '#2563eb'
    },
    statusOrange: {
      color: '#ea580c'
    },
    processStep: {
      textAlign: 'center'
    },
    processNumber: {
      width: '4rem',
      height: '4rem',
      backgroundColor: '#000000',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 1rem auto'
    },
    processNumberText: {
      color: '#ffffff',
      fontWeight: 'bold'
    },
    processTitle: {
      fontSize: '1.25rem',
      fontWeight: '500',
      marginBottom: '0.5rem'
    },
    processDesc: {
      color: '#6b7280'
    },
    contactContent: {
      maxWidth: '64rem',
      margin: '0 auto',
      textAlign: 'center'
    },
    contactTitle: {
      fontSize: '4rem',
      fontWeight: '300',
      marginBottom: '2rem'
    },
    contactTitleLarge: {
      fontSize: '6rem'
    },
    contactSubtitle: {
      fontSize: '1.25rem',
      marginBottom: '2rem',
      color: '#d1d5db'
    },
    contactButtons: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      justifyContent: 'center',
      marginBottom: '3rem'
    },
    contactButtonsRow: {
      flexDirection: 'row'
    },
    contactButtonWhite: {
      backgroundColor: '#ffffff',
      color: '#000000',
      padding: '0.75rem 2rem',
      borderRadius: '9999px',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem'
    },
    contactButtonWhiteHover: {
      backgroundColor: '#e5e7eb'
    },
    contactButtonBorder: {
      backgroundColor: 'transparent',
      color: '#ffffff',
      padding: '0.75rem 2rem',
      borderRadius: '9999px',
      border: '1px solid #ffffff',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem'
    },
    contactButtonBorderHover: {
      backgroundColor: '#ffffff',
      color: '#000000'
    },
    footer: {
      textAlign: 'center',
      color: '#9ca3af'
    },
    footerText: {
      marginTop: '0.5rem'
    }
  };


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const cardsData = [
    {
      title: "ABDELLAH EMINES",
      description: "Training LSTM and Transformer models for generating music sequences.",
      tag: "COMMUNICATION CHAIR",
      imageUrl: "https://imagedelivery.net/6Q4HLLMjcXxpmSYfQ3vMaw/1dd0eb23-2486-426a-6f9d-730132f16900/900px",
      isFeatured: true,
      article: "/biomed",
    },
    {
      title: "El Houssaine CHAHBOUN",
      description: "Gao Hang is an artist who seamlessly blends the contemporary with the classic.",
      tag: "PRESIDENT",
      imageUrl: "https://imagedelivery.net/6Q4HLLMjcXxpmSYfQ3vMaw/f9841b45-3ea6-4100-bf24-3138c82edc00/900px",
      isFeatured: true,
      article: "/project/66718936219f0d12d16680cf",
    },
    {
      title: "CHAIMAA ",
      description: "Houssaine the frog is stunned by technology, turns his screen off, and realizes it's all under his control.",
      tag: "PARTNERSHIP CHAIR",
      imageUrl: "https://public.blenderkit.com/thumbnails/assets/a7708def644c48bb9bbc6924bbf1c907/files/thumbnail_e7a61e6a-2406-4b0f-8ba4-59a0ef657488.png.2048x2048_q85.png",
      isFeatured: true,
      article: "/shortfilm",
    },
    
    

  ];

  const summitStyles = {
    container: {
      minHeight: '100vh',
      backgroundColor: 'red',
      color: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    },
    header: {
      padding:'30px',
      color: 'white',
      background:'black',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '24px',
      fontSize: '14px'
      
    },
    nav: {
      display: 'flex',
      gap: '16px'
    },
    navLink: {
      color: '#ffffff',
      textDecoration: 'none',
      cursor: 'pointer'
    },
    locationContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    statusDot: {
      width: '8px',
      height: '8px',
      backgroundColor: '#10b981',
      borderRadius: '50%'
    },
    main: {
      padding: '48px 24px'
    },
    container2: {
      maxWidth: '1280px',
      margin: '0 auto'
    },
    heroTitle: {
      fontSize: 'clamp(3rem, 8vw, 8rem)',
      fontWeight: '900',
      lineHeight: '1.1',
      marginBottom: '64px'
    },
    projectDetails: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: '48px',
      fontSize: '14px',
      gap: '24px'
    },
    detailItem: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    },
    detailLabel: {
      color: '#9ca3af'
    },
    detailValue: {
      color: '#ffffff'
    },
    blueSection: {
      background: 'linear-gradient(135deg, #FF3D00 0%, #FF3D00 100%)',
      borderRadius: '24px',
      padding: 'clamp(32px, 8vw, 96px)',
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    heroContent: {
      textAlign: 'center',
      position: 'relative',
      zIndex: '2'
    },
    onceUponContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '16px',
      flexWrap: 'wrap',
      gap: '16px'
    },
    circle: {
      width: 'clamp(48px, 8vw, 96px)',
      height: 'clamp(48px, 8vw, 96px)',
      border: '4px solid #fbbf24',
      borderRadius: '50%',
      flexShrink: '0'
    },
    onceUponText: {
      color: '#fbbf24',
      fontSize: 'clamp(2rem, 6vw, 5rem)',
      fontWeight: '900',
      lineHeight: '1.1'
    },
    futureText: {
      color: '#fbbf24',
      fontSize: 'clamp(3rem, 8vw, 7rem)',
      fontWeight: '900',
      fontStyle: 'italic',
      transform: 'skew(-12deg)',
      lineHeight: '1'
    },
    decorativeCircle1: {
      position: 'absolute',
      top: '32px',
      right: '32px',
      width: '48px',
      height: '48px',
      border: '2px solid #fbbf24',
      borderRadius: '50%',
      opacity: '0.6'
    },
    decorativeCircle2: {
      position: 'absolute',
      bottom: '64px',
      left: '64px',
      width: '32px',
      height: '32px',
      backgroundColor: '#fbbf24',
      borderRadius: '50%',
      opacity: '0.8'
    },
    decorativeSquare: {
      position: 'absolute',
      top: '50%',
      right: '25%',
      width: '24px',
      height: '24px',
      border: '2px solid #fbbf24',
      transform: 'rotate(45deg)',
      opacity: '0.4'
    }
  };



  const [currentIndex, setCurrentIndex] = useState(0);


const textElements = [
    ["Exciting New Technology !", "Combining AI with KIRI Engine’s 3D Gaussian Splatting, this technology enables real-time, high-quality surface extension. Deep learning analyzes material patterns, allowing seamless and intelligent surface generation."]

];



  return (
    
    <div>


      
      <Timelines />

      {/* Header */}


      {/* Mobile Menu */}
      {isMenuOpen && (
        <div style={stylesxx.mobileMenuOpen}>
          <nav style={stylesxx.mobileNav}>
            <button style={stylesxx.mobileNavButton} onClick={() => scrollToSection('work')}>Work</button>
            <button style={stylesxx.mobileNavButton} onClick={() => scrollToSection('about')}>About</button>
            <button style={stylesxx.mobileNavButton} onClick={() => scrollToSection('contact')}>Contact</button>
          </nav>
        </div>
      )}

      {/* Hero Section */}


      {/* Work Section */}
      <section id="work" style={stylesxx.section}>
        <div style={stylesxx.sectionContent}>
       

      
        </div>
        <section
  className={styles.newReleases} 
  style={{
  backgroundColor: 'white' 
// optional, prevents white from showing through
  }}
> 
<header className={styles.header}>

<h2 className={styles.headertitle}   style={{
color: 'black' 
}}>Demo</h2>
<a href="/stories" className={styles.allStoriesLink} style={{
color: 'black' 
}}>Try now</a>
</header>
  
      <div className={styles.container} style={{
  backgroundColor: 'white' }}>
        
        <div className={styles.column}>
        <div className={`${styles.textWrapper} ${styles.fade} ${currentIndex === 0 ? styles.fadeActive : ''}`}>
        <div className={styles.topText}>
        <h1 style={{ marginLeft:'0px',marginRight:'20%',marginBottom:'10%', marginTop: "0%", color: "black" }}>
  {textElements[currentIndex][0]}
</h1>
<p style={{ marginLeft:'0px',marginRight:'20%', color: "black" }}>
  {textElements[currentIndex][1]}
</p>
<p style={{ marginTop:'10%', marginBottom:'0%', marginLeft:'0px',marginRight:'20%', color: "black" }}>
  {"textElements[currentIndex][1]"}
</p>
    
            </div>
          
          </div>
        </div>
        <div className={`${styles.column} ${styles.fade} ${currentIndex === 0 ? styles.fadeActive : ''}`}>

        <iframe id="viewer" style={{ width: '100%', height: 'auto', border: 'none' }} allow="fullscreen; xr-spatial-tracking" src="https://superspl.at/s?id=12fe9ebf"></iframe>        </div>
      
      </div>
      </section>

      <section id="work" style={stylesxx.section}>
  <div style={stylesxx.sectionContent}></div>

 

 
</section>



    
      </section>
            {/* About Section */}
            <section id="about">
        <div style={stylesxx.sectionContent}>
          <div style={{...stylesxx.aboutGrid, ...(window.innerWidth >= 768 ? stylesxx.aboutGridMd : {})}}>
            <div>
              <h2 style={{ textAlign:'left'}}>
                About the Tool
              </h2>
              <p style={ {textAlign:'left', marginRight:'30%'}}>
                Built as an extension of the open-source KIRI Engine Blender addon, this tool advances AI-powered 3D content creation.
              </p>
              

            </div>
            
            <div>

       <br></br>
              
              <div style={stylesxx.infoCard}>
                <h1 style={stylesxx.infoCardTitle}>Development Status</h1>
                <div style={stylesxx.statusList}>
                  <div style={stylesxx.statusItem}>
                    <span>Version 1.0</span>
                    <span style={stylesxx.statusGreen}>Released</span>
                  </div>
                  <div style={stylesxx.statusItem}>
                    <span>Multi-surface Support</span>
                    <span style={stylesxx.statusBlue}>Beta</span>
                  </div>
                  <div style={stylesxx.statusItem}>
                    <span>UI Optimization</span>
                    <span style={stylesxx.statusOrange}>In Progress</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
  className={styles.newReleases} 
  style={{

// optional, prevents white from showing through
  }}
>
      <header className={styles.header}>

        <h2 className={styles.headertitle}   style={{

  }}>Club Members</h2>
        <a href="/stories" className={styles.allStoriesLink} style={{

  }}>View all members</a>
      </header>
      <div className={styles.cardContainer}>
        {cardsData.map((card, index) => (
          <Card key={index} {...card}  />
        ))}
      </div>
    </section>
                   

      <section
    className={styles.newReleases}
    style={{
      backgroundColor: 'white',
    }}
  >
    <header className={styles.header}>
      <h2 className={styles.headertitle} style={{ color: 'black' }}>Demo</h2>
      <a href="/stories" className={styles.allStoriesLink} style={{ color: 'black' }}>Try now</a>
    </header>

    <div className={styles.container}>
      {/* Swapped: iframe first, then text */}
      <div className={` `}>
      <img id="viewer" style={{ width: '100%', height: '100%', border: 'none' }} src="demo3dgs.gif"></img>
      </div>
      <div className={styles.column} style={{ backgroundColor: 'white' }}>
        <div className={`${styles.textWrapper} ${styles.fade} ${currentIndex === 0 ? styles.fadeActive : ''}`}>
          <div className={styles.topText}>
            <h1
              style={{
                marginLeft: '0px',

                marginBottom: '30%',
                marginTop: '0%',
                color: 'black',
                textAlign: 'right',
              }}
            >
              {textElements[currentIndex][0]}
            </h1>
            <p
              style={{
                marginLeft: '0px',

                color: 'black',
                textAlign: 'right',
              }}
            >
              {textElements[currentIndex][1]}
            </p>
            <p
              style={{
                marginTop: '10%',
                marginBottom: '0%',
                marginLeft: '-80px',

                color: 'black',
                textAlign: 'right',
              }}
            >
              {"textElements[currentIndex][1]"}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

      


      {/* Contact Section */}







    <Footer style={{ backgroundColor: 'red', color: 'red' }} />



  </div>
  );
};

export default Rebrand;



