import React, { useState } from 'react';
import { ArrowRight, Circle, CheckCircle } from 'lucide-react';

export default function ProjectPlanComponent() {
  const [hoveredStep, setHoveredStep] = useState(null);

  const steps = [
    {
      id: 1,
      textAlign:'left',
      phase: "First Step",
      title: "Blender Addon V1",
      status: "In Progress",
      description: "Currently being finalized. Built on top of the open source KIRI engine 3DGS blender addon.",
      timeline: "Current",
      isActive: true
    },
    {
      id: 2,
      textAlign:'left',
      phase: "Second Step",
      title: "Cloud-Based 3DGS Tool",
      status: "Future Works",
      description: "Online cloud-based 3DGS texture brush tool built on top of Three.js and the open source 3DGS.js.",
      timeline: "Future",
      isActive: false
    },
    {
      id: 3,
      textAlign:'left',
      phase: "Third Step", 
      title: "Spatial Video Editing",
      status: "Future Future",
      description: "Spatial video editing tool using 3DGS. Change lighting, special effects: spatial special effects.",
      timeline: "Future Future",
      isActive: false
    }
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#0a0a0a',
      color: '#ffffff',
      display: 'flex',
      alignItems: 'left',
      justifyContent: 'left',
      padding: '2rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    },
    content: {
      maxWidth: '1200px',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '8rem',
      alignItems: 'flex-start'
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
      textAlign:'left',
      fontSize: '1.125rem',
      color: '#a0a0a0',
      fontWeight: '300',
      lineHeight: '1.6',
      maxWidth: '480px'
    },
    stepsContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '3rem'
    },
    stepCard: {
      padding: '2rem',
      border: '1px solid #404040',
      backgroundColor: 'rgba(20, 20, 20, 0.6)',
      backdropFilter: 'blur(10px)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      position: 'relative'
    },
    stepCardHover: {
      borderColor: '#707070',
      backgroundColor: 'rgba(30, 30, 30, 0.8)'
    },
    stepCardActive: {
      borderColor: '#ffffff',
      backgroundColor: 'rgba(40, 40, 40, 0.8)'
    },
    stepHeader: {
      display: 'flex',
      alignItems: 'left',
      justifyContent: 'space-between',
      marginBottom: '1rem'
    },
    stepNumber: {
      display: 'flex',
      alignItems: 'left',
      gap: '0.75rem'
    },
    stepPhase: {
      fontSize: '0.875rem',
      color: '#666666',
      fontWeight: '300',
      textTransform: 'uppercase',
      letterSpacing: '0.1em'
    },
    stepTitle: {
      fontSize: '1.5rem',
      fontWeight: '300',
      marginBottom: '0.5rem',
      letterSpacing: '-0.01em'
    },
    stepStatus: {
      fontSize: '0.75rem',
      padding: '0.25rem 0.75rem',
      borderRadius: '12px',
      fontWeight: '400',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    },
    statusActive: {
      backgroundColor: 'rgba(34, 197, 94, 0.2)',
      color: '#4ade80',
      border: '1px solid rgba(34, 197, 94, 0.3)'
    },
    statusFuture: {
      backgroundColor: 'rgba(107, 114, 128, 0.2)',
      color: '#9ca3af',
      border: '1px solid rgba(107, 114, 128, 0.3)'
    },
    stepDescription: {
      fontSize: '1rem',
      color: '#a0a0a0',
      fontWeight: '300',
      lineHeight: '1.5'
    },
    stepIcon: {
      transition: 'all 0.3s ease'
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
    },
    progressLine: {
      position: 'absolute',
      left: '1rem',
      top: '4rem',
      bottom: '-2rem',
      width: '1px',
      backgroundColor: '#404040',
      zIndex: 1
    },
    progressLineLast: {
      display: 'none'
    }
  };

  const getStatusStyle = (step) => {
    return step.isActive ? styles.statusActive : styles.statusFuture;
  };

  const getStepCardStyle = (step, index) => {
    const baseStyle = step.isActive ? styles.stepCardActive : styles.stepCard;
    const hoverStyle = hoveredStep === index ? styles.stepCardHover : {};
    return { ...baseStyle, ...hoverStyle };
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {/* Left Column - Header */}
        <div style={styles.leftColumn}>
          <div style={styles.header}>
          
            <div style={styles.divider}></div>
            <p style={styles.description}>
              A comprehensive development plan for advanced 3D Gaussian Splatting tools, 
              from Blender integration to spatial video editing capabilities.
            </p>
          </div>
        </div>

        {/* Right Column - Steps */}
        <div style={styles.rightColumn}>
          <div style={styles.stepsContainer}>
            {steps.map((step, index) => (
              <div 
                key={step.id}
                style={getStepCardStyle(step, index)}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Progress line */}
                {index < steps.length - 1 && (
                  <div style={styles.progressLine}></div>
                )}
                
                <div style={styles.stepHeader}>
                  <div style={styles.stepNumber}>
                    {step.isActive ? (
                      <CheckCircle 
                        size={16} 
                        style={{ 
                          color: '#4ade80',
                          ...styles.stepIcon
                        }} 
                      />
                    ) : (
                      <Circle 
                        size={16} 
                        style={{ 
                          color: '#666666',
                          ...styles.stepIcon
                        }} 
                      />
                    )}
                    <span style={styles.stepPhase}>{step.phase}</span>
                  </div>
                  <div style={{...styles.stepStatus, ...getStatusStyle(step)}}>
                    {step.status}
                  </div>
                </div>
                
                <h3 style={styles.stepTitle}>{step.title}</h3>
                <p style={styles.stepDescription}>{step.description}</p>
                
                {hoveredStep === index && (
                  <ArrowRight 
                    size={20} 
                    style={{
                      position: 'absolute',
                      right: '1.5rem',
                      bottom: '1.5rem',
                      color: '#666666',
                      opacity: 0.7,
                      transition: 'all 0.3s ease'
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div style={styles.decorativeLeft}></div>
      <div style={styles.decorativeRight}></div>

      {/* Background grid */}
      <div style={styles.backgroundGrid} />

      <style jsx>{`
        @media (max-width: 768px) {
          .content {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          
          .title {
            font-size: 3rem !important;
          }
          
          .description {
            font-size: 1rem !important;
          }
          
          .stepCard {
            padding: 1.5rem !important;
          }
          
          .stepTitle {
            font-size: 1.25rem !important;
          }
          
          .stepsContainer {
            gap: 2rem !important;
          }
        }
      `}</style>
    </div>
  );
}