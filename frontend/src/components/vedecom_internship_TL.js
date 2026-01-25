import React, { useState, useEffect } from 'react';

export default function CombinedComponent() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const demos = [
    { name: 'Grass Distribution', type: 'Natural terrain modeling' },
    { name: 'Concrete Patterns', type: 'Urban surface analysis' },
    { name: 'Mud Dynamics', type: 'Fluid-state materials' },
    { name: 'Wet Surfaces', type: 'Reflective properties' }
  ];

  const handleIntersection = (id) => {
    setIsVisible(prev => ({ ...prev, [id]: true }));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            handleIntersection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const summitStyles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#000000',
      color: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    },
    header: {
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
      marginBottom: '-50px',
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

  return (
    <div>
      {/* Summit Section */}
      <div style={summitStyles.container}>
        {/* Header */}
       

        {/* Main Hero Section */}
        <main style={summitStyles.main}>
          <div style={summitStyles.container2}>
            <h1 style={summitStyles.heroTitle}>

            </h1>
            <div style={{
        backgroundColor: 'black',
        color: '#1a1a1a',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        lineHeight: '1.6'
      }}>

        {/* Main Content */}
        <main style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0px 40px 80px'
        }}>
          {/* Title Section */}
          <div 
            id="title"
            data-animate
            style={{
              marginBottom: '80px',
              opacity: isVisible.title ? 1 : 0,
              transform: isVisible.title ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease'
            }}
          >
            <h1 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: '300',
              lineHeight: '1.1',
              marginBottom: '40px',
              color: 'white'
            }}>
              Deep Learning Based 3DGS Brush Tool
            </h1>
            
            <p style={{
              fontSize: '1.3rem',
              color: 'white',
              fontWeight: '300',
              marginBottom: '60px'
            }}>
              Intelligent surface extension powered by deep learning and 3D Gaussian Splatting. Seamlessly extend grass, concrete, wet floors, and more with AI-driven pattern recognition.
           
            </p>

            <div style={{
              display: 'flex',
              gap: '40px',
              fontSize: '14px',
              color: 'white',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '0px',

            }}>
              <span>View Demos</span>
              <span>Source Code</span>
              <span>Download Addon</span>
            </div>
            
          </div>

          

          {/* Opening Statement */}
=
          {/* The Problem */}

          {/* Demo Section */}


          {/* Technical Approach */}

          {/* Future Implications */}


          {/* Call to Action */}

        </main>

        {/* Footer */}
        <footer style={{
          borderTop: '1px solid #f0f0f0',
          padding: '40px 0',
          textAlign: 'center'
        }}>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 40px'
          }}>
            <p style={{
              fontSize: '0.9rem',
              color: '#999',
              margin: 0
            }}>
              
            </p>
          </div>
        </footer>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .demo-item {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          
          .demo-item > div {
            order: unset !important;
          }
          
          .cta-buttons {
            flex-direction: column !important;
            align-items: center !important;
          }
        }
      `}</style>
            {/* Project Details */}
            <div style={summitStyles.projectDetails}>
              <div style={summitStyles.detailItem}>
                <div style={summitStyles.detailLabel}>(Brand)</div>
                <div style={summitStyles.detailValue}>United Foundation</div>
              </div>
              <div style={summitStyles.detailItem}>
                <div style={summitStyles.detailLabel}>(Led By Droga5)</div>
                <div style={summitStyles.detailValue}>Collaborated with Droga5</div>
              </div>
              <div style={summitStyles.detailItem}>
                <div style={summitStyles.detailLabel}>(Roles)</div>
                <div style={summitStyles.detailValue}>Animation, Creative Direction</div>
              </div>
              <div style={summitStyles.detailItem}>
                <div style={summitStyles.detailLabel}>(Year)</div>
                <div style={summitStyles.detailValue}>2025</div>
                
              </div>
              
            </div>

            {/* Blue Hero Section */}
           

          </div>
          <br></br> <br></br> <br></br>
        </main>
      </div>

      {/* Gaussian Brush Blog Section */}
     
    </div>
  );
}