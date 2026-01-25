import React, { useState } from 'react';
import { Play, ArrowUpRight, Mail, ArrowDown, Plus, Minus } from 'lucide-react';

const ProjectShowcase = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      backgroundColor: '#0f0f0f',
      color: '#ffffff',
      minHeight: '100vh',
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    header: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      backgroundColor: 'rgba(15, 15, 15, 0.9)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #1f1f1f',
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
      fontSize: '1.25rem',
      color: '#ffffff'
    },
    nav: {
      display: 'flex',
      gap: '2rem'
    },
    navButton: {
      background: 'none',
      border: 'none',
      color: '#ffffff',
      cursor: 'pointer',
      transition: 'color 0.3s ease',
      fontSize: '1rem'
    },
    navButtonHover: {
      color: '#a1a1aa'
    },
    mobileMenu: {
      display: 'none'
    },
    mobileMenuOpen: {
      position: 'fixed',
      inset: 0,
      zIndex: 40,
      backgroundColor: '#0f0f0f',
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
      cursor: 'pointer',
      color: '#ffffff'
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
      maxWidth: '64rem',
      textAlign: 'left'
    },
    heroTitle: {
      fontSize: '4rem',
      fontWeight: '300',
      lineHeight: '1.1',
      marginBottom: '1.5rem',
      color: '#ffffff',
      textAlign: 'left'
    },
    heroTitleLarge: {
      fontSize: '6rem'
    },
    heroSubtitle: {
      fontSize: '1.5rem',
      fontWeight: '300',
      color: '#a1a1aa',
      marginBottom: '2rem',
      maxWidth: '32rem',
      lineHeight: '1.6',
      textAlign: 'left'
    },
    heroButtons: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      flexWrap: 'wrap',
      justifyContent: 'flex-start'
    },
    primaryButton: {
      backgroundColor: '#ffffff',
      color: '#000000',
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
      backgroundColor: '#e5e7eb'
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      color: '#ffffff',
      padding: '0.75rem 2rem',
      borderRadius: '9999px',
      border: '1px solid #ffffff',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '1rem'
    },
    secondaryButtonHover: {
      backgroundColor: '#ffffff',
      color: '#000000'
    },
    section: {
      padding: '4rem 1.5rem'
    },
    sectionAlt: {
      padding: '4rem 1.5rem',
      backgroundColor: '#1a1a1a'
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
      marginBottom: '1rem',
      color: '#ffffff',
      textAlign: 'left'
    },
    sectionTitleLarge: {
      marginRight: "65%",
      fontSize: '3rem',

    },
    sectionSubtitle: {
      
      fontSize: '1.25rem',
      color: '#a1a1aa',
      marginBottom: '3rem',
      textAlign: 'left'
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
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
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
      fontSize: '0.875rem',
      color: '#000000'
    },
    projectInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      textAlign: 'left'
    },
    projectTitle: {
      fontSize: '2rem',
      fontWeight: '300',
      color: '#ffffff'
    },
    projectCategory: {
      color: '#a1a1aa',
      textTransform: 'uppercase',
      fontSize: '0.875rem',
      letterSpacing: '0.05em'
    },
    projectDescription: {
      color: '#d1d5db',
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
      backgroundColor: '#2a2a2a',
      color: '#ffffff',
      padding: '0.25rem 0.75rem',
      borderRadius: '9999px'
    },
    aboutGrid: {
      display: 'grid',
      gap: '3rem',
      alignItems: 'start'
    },
    aboutGridMd: {
      gridTemplateColumns: 'repeat(2, 1fr)'
    },
    aboutText: {
      fontSize: '1.25rem',
      color: '#d1d5db',
      marginBottom: '1.5rem',
      lineHeight: '1.6',
      textAlign: 'left'
    },
    aboutTextSecondary: {
      fontSize: '1.125rem',
      color: '#a1a1aa',
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
      borderBottom: '1px solid #2a2a2a'
    },
    featureTitle: {
      fontWeight: '500',
      color: '#ffffff'
    },
    featureDesc: {
      fontSize: '0.875rem',
      color: '#a1a1aa'
    },
    infoCard: {
      backgroundColor: '#1a1a1a',
      padding: '2rem',
      borderRadius: '0.5rem',
      border: '1px solid #2a2a2a',
      marginBottom: '1.5rem'
    },
    infoCardTitle: {
      fontSize: '1.5rem',
      fontWeight: '300',
      marginBottom: '1rem',
      color: '#ffffff'
    },
    infoList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
      color: '#d1d5db'
    },
    statusList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem'
    },
    statusItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    statusGreen: {
      color: '#10b981'
    },
    statusBlue: {
      color: '#3b82f6'
    },
    statusOrange: {
      color: '#f59e0b'
    },
    processStep: {
      textAlign: 'center'
    },
    processNumber: {
      width: '4rem',
      height: '4rem',
      backgroundColor: '#ffffff',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 1rem auto'
    },
    processNumberText: {
      color: '#000000',
      fontWeight: 'bold'
    },
    processTitle: {
      fontSize: '1.25rem',
      fontWeight: '500',
      marginBottom: '0.5rem',
      color: '#ffffff'
    },
    processDesc: {
      color: '#a1a1aa'
    },
    contactContent: {
      maxWidth: '64rem',
      margin: '0 auto',
      textAlign: 'center'
    },
    contactTitle: {
      fontSize: '4rem',
      fontWeight: '300',
      marginBottom: '2rem',
      color: '#ffffff'
    },
    contactTitleLarge: {
      fontSize: '6rem'
    },
    contactSubtitle: {
      fontSize: '1.25rem',
      marginBottom: '2rem',
      color: '#a1a1aa'
    },
    contactButtons: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      justifyContent: 'center',
      alignItems: 'center',
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
      color: '#6b7280'
    },
    footerText: {
      marginTop: '0.5rem'
    }
  };

  return (
    <div style={stylesxx.container}>
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
          <div style={{marginBottom: '3rem'}}>
            <h2 style={{...stylesxx.sectionTitle, ...(window.innerWidth >= 768 ? stylesxx.sectionTitleLarge : {})}}>
              Selected Work
            </h2>
            <p style={stylesxx.sectionSubtitle}>Surface extensions powered by artificial intelligence</p>
          </div>

          <div style={{...stylesxx.grid, ...(window.innerWidth >= 768 ? stylesxx.gridMd2 : {})}}>
            {projects.map((project, index) => (
              <div 
                key={index}
                style={stylesxx.projectCard}
                onClick={() => setActiveProject(index)}
                onMouseEnter={(e) => e.currentTarget.style.transform = stylesxx.projectCardHover.transform}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{...stylesxx.projectImage, background: project.color}}>
                  <div 
                    style={stylesxx.projectImageOverlay}
                    onMouseEnter={(e) => e.target.style.opacity = stylesxx.projectImageOverlayHover.opacity}
                    onMouseLeave={(e) => e.target.style.opacity = '0'}
                  >
                    <Play size={48} color="white" />
                  </div>
                  <div style={stylesxx.projectYear}>
                    {project.year}
                  </div>
                </div>
                
                <div style={stylesxx.projectInfo}>
                  <h3 style={stylesxx.projectTitle}>{project.title}</h3>
                  <p style={stylesxx.projectCategory}>{project.category}</p>
                  <p style={stylesxx.projectDescription}>{project.description}</p>
                  <div style={stylesxx.techTags}>
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} style={stylesxx.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
                      
      {/* About Section */}
      <section id="about" style={stylesxx.sectionAlt}>
        <div style={stylesxx.sectionContent}>
          <div style={{...stylesxx.aboutGrid, ...(window.innerWidth >= 768 ? stylesxx.aboutGridMd : {})}}>
            <div>
              <h2 style={{...stylesxx.sectionTitle, ...(window.innerWidth >= 768 ? stylesxx.sectionTitleLarge : {})}}>
                About the Tool
              </h2>
              <p style={stylesxx.aboutText}>
                Built as an extension of the open-source KIRI Engine Blender addon, this tool advances AI-powered 3D content creation.
              </p>
              

            </div>
            
            <div>
            <div style={stylesxx.featureList}>
                <div style={stylesxx.featureItem}>
                  <span style={stylesxx.featureTitle}>Deep Learning Integration</span>
                  <span style={stylesxx.featureDesc}>Advanced pattern recognition</span>
                </div>
                <div style={stylesxx.featureItem}>
                  <span style={stylesxx.featureTitle}>3D Gaussian Splatting</span>
                  <span style={stylesxx.featureDesc}>High-quality rendering</span>
                </div>
                <div style={stylesxx.featureItem}>
                  <span style={stylesxx.featureTitle}>Real-time Processing</span>
                  <span style={stylesxx.featureDesc}>Seamless workflow</span>
                </div>
              </div>
       <br></br>
              
              <div style={stylesxx.infoCard}>
                <h3 style={stylesxx.infoCardTitle}>Development Status</h3>
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

      {/* Contact Section */}
      <section id="contact" style={stylesxx.sectionDark}>
        <div style={stylesxx.sectionContent}>
          <div style={stylesxx.contactContent}>
            <h2 style={{...stylesxx.contactTitle, ...(window.innerWidth >= 768 ? stylesxx.contactTitleLarge : {})}}>
              Get in Touch
            </h2>
            <p style={stylesxx.contactSubtitle}>
              Ready to revolutionize your 3D workflow? Let's talk about how AI can transform your surface creation process.
            </p>
            
            <div style={{...stylesxx.contactButtons, ...(window.innerWidth >= 768 ? stylesxx.contactButtonsRow : {})}}>
              <button 
                style={stylesxx.contactButtonWhite}
                onMouseEnter={(e) => e.target.style.backgroundColor = stylesxx.contactButtonWhiteHover.backgroundColor}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#ffffff'}
              >
                <Mail size={20} />
                Start Project
              </button>
              <button 
                style={stylesxx.contactButtonBorder}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = stylesxx.contactButtonBorderHover.backgroundColor;
                  e.target.style.color = stylesxx.contactButtonBorderHover.color;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#ffffff';
                }}
              >
                Download Tool
                <ArrowDown size={20} />
              </button>
            </div>
            
            <div style={stylesxx.footer}>
              <p style={stylesxx.footerText}>
                © 2024 KIRI Surface AI. Built with advanced deep learning technology.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectShowcase;