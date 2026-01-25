import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function NewsletterComponent() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  const summitStyles = {
    container: {
      borderTop: '2.5px solid #000000', 
      minHeight: '100vh',
      backgroundColor: 'red',
      color: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    },
    header: {
      borderTop: '2.5px solid #000000', 
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
      borderTop: '2.5px solid #239dfs', 
      display: 'flex',
      gap: '16px'
    },
    navLink: {
      color: '#ffffff',
      textDecoration: 'none',
      cursor: 'pointer'
    },
    locationContainer: {
      borderTop: '2.5px solid #ds23sd9', 
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
      borderTop: '2.5px solid #ds23sd9', 
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



  const styles = {
    container: {
      borderTop: '2.5px solid #ds23sd9', 
      
      minHeight: '100vh',
      backgroundColor: 'black',
      color: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '2.5px solid #ffffff', 
    },
    content: {
      
      maxWidth: '1200px',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '8rem',
      alignItems: 'center'
    },
    leftColumn: {
      
      textAlign: 'left'
    },
    rightColumn: {
      textAlign: 'left'
    },
    header: {
      marginBottom: '2rem'
    },
    title: {
      fontSize: 'clamp(3rem, 8vw, 5rem)',
      fontWeight: '200',
      letterSpacing: '-0.02em',
      marginBottom: '1.5rem',
      lineHeight: '1.1'
    },
    titleItalic: {
      fontStyle: 'italic',
      fontWeight: '100'
    },
    divider: {
      width: '60px',
      height: '1px',
      backgroundColor: '#ffffff',
      marginBottom: '2rem'
    },
    description: {
      textAlign: 'left',
      fontSize: '1.125rem',
      color: '#a0a0a0',
      fontWeight: '300',
      lineHeight: '1.6',
      maxWidth: '480px'
    },
    formContainer: {
      position: 'relative',
      marginBottom: '2rem'
    },
    form: {
      position: 'relative'
    },
    inputContainer: {
      border: '1px solid #404040',
      backgroundColor: 'rgba(20, 20, 20, 0.6)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      transition: 'all 0.3s ease',
      ':hover': {
        borderColor: '#707070'
      }
    },
    input: {
      flex: 1,
      backgroundColor: 'transparent',
      padding: '1.5rem 2rem',
      fontSize: '1rem',
      color: '#ffffff',
      border: 'none',
      outline: 'none',
      '::placeholder': {
        color: '#666666'
      }
    },
    button: {
      padding: '1.5rem 2rem',
      backgroundColor: '#ffffff',
      color: '#000000',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
      minWidth: '80px'
    },
    buttonHover: {
      backgroundColor: '#f0f0f0'
    },
    buttonBackground: {
      position: 'absolute',
      inset: 0,
      backgroundColor: '#e0e0e0',
      transform: isHovered ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform 0.3s ease',
      zIndex: -1
    },
    successMessage: {
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      marginTop: '1rem',
      padding: '1rem',
      backgroundColor: 'rgba(16, 64, 16, 0.3)',
      border: '1px solid #2d5a2d',
      color: '#4ade80',
      textAlign: 'center',
      animation: 'fadeIn 0.5s ease-out'
    },
    footer: {
      marginTop: '2rem'
    },
    footerText: {
      textAlign: 'left',
      fontSize: '0.875rem',
      color: '#666666',
      fontWeight: '300'
    },
    decorativeLeft: {
      position: 'absolute',
      
      top: '25%',
      left: 0,
      width: '1px',
      height: '8rem',
      background: 'linear-gradient(to bottom, transparent, #404040, transparent)'
    },
    decorativeRight: {
      position: 'absolute',
      bottom: '25%',
      right: 0,
      width: '1px',
      height: '8rem',
      background: 'linear-gradient(to bottom, transparent, #404040, transparent)'
    },
    backgroundGrid: {
      position: 'fixed',
      inset: 0,
      pointerEvents: 'none',
      opacity: 0.03,
      backgroundImage: `
        linear-gradient(to right, #ffffff 1px, transparent 1px),
        linear-gradient(to bottom, #ffffff 1px, transparent 1px)
      `,
      backgroundSize: '60px 60px'
    }
  };

  return (
    

    <div style={styles.container}>
      
      <div style={styles.content}>
        {/* Left Column - Content */}
        <div style={styles.leftColumn}>
          <div style={styles.header}>

            <div style={styles.divider}></div>
            <p style={styles.description}>
              Subscribe to receive our latest insights on brand strategy, 
              creative direction, and design innovation.
            </p>
          </div>
        </div>

        {/* Right Column - Form */}
        <div style={styles.rightColumn}>
          <div style={styles.formContainer}>
            <div style={styles.form}>
              <div 
                style={{
                  ...styles.inputContainer,
                  ...(isHovered ? { borderColor: '#707070' } : {})
                }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  style={styles.input}
                  required
                />
                <button
                  onClick={handleSubmit}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  style={{
                    ...styles.button,
                    ...(isHovered ? styles.buttonHover : {})
                  }}
                  disabled={isSubmitted}
                >
                  <div style={styles.buttonBackground} />
                  {isSubmitted ? (
                    <Check size={20} />
                  ) : (
                    <ArrowRight 
                      size={20} 
                      style={{
                        transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                  )}
                </button>
              </div>
            </div>

            {/* Success message */}
            {isSubmitted && (
              <div style={styles.successMessage}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                  <Check size={16} />
                  <span style={{ fontWeight: '300' }}>Thank you for subscribing.</span>
                </div>
              </div>
            )}
          </div>

          {/* Footer text */}
          <div style={styles.footer}>
            <p style={styles.footerText}>
              We respect your inbox. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div style={styles.decorativeLeft}></div>
      <div style={styles.decorativeRight}></div>

      {/* Background grid */}
      <div style={styles.backgroundGrid} />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        input::placeholder {
          color: #666666;
        }
        
        input:focus::placeholder {
          color: #888888;
        }
        
        @media (max-width: 768px) {
          .content {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
            text-align: left !important;
          }
          
          .title {
            font-size: 3rem !important;
          }
          
          .description {
            font-size: 1rem !important;
          }
          
          .input, .button {
            padding: 1.25rem 1.5rem !important;
          }
        }
      `}</style>
    </div>

  );
}