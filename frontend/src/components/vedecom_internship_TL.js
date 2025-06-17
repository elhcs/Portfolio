import React, { useState, useEffect } from 'react';

const Timeline = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const showSlide = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' && currentSlide < 2) {
        showSlide(currentSlide + 1);
      } else if (e.key === 'ArrowLeft' && currentSlide > 1) {
        showSlide(currentSlide - 1);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const styles = `
    .timeline-container * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .timeline-container {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      padding: 20px;
      overflow-x: hidden;
    }

    .slides-container {
      position: relative;
      width: 100%;
      height: 100vh;
      overflow: hidden;
    }

    .slide {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transform: translateX(100%);
      transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .slide.active {
      opacity: 1;
      transform: translateX(0);
    }

    .slide.prev {
      transform: translateX(-100%);
    }

    .container {
      max-width: 1600px;
      margin: 0 auto;
      background: rgba(255, 255, 255, 0.95);
      border-radius: 20px;
      padding: 30px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(10px);
      overflow-x: auto;
      overflow-y: auto;
      min-height: 90vh;
      max-height: 90vh;
      position: relative;
    }

    .navigation {
      position: absolute;
      top: 20px;
      right: 30px;
      display: flex;
      gap: 15px;
      z-index: 100;
    }

    .nav-btn {
      padding: 12px 20px;
      background: linear-gradient(135deg, #3498db, #2980b9);
      color: white;
      border: none;
      border-radius: 25px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 600;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
    }

    .nav-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(52, 152, 219, 0.4);
    }

    .nav-btn.active {
      background: linear-gradient(135deg, #e74c3c, #c0392b);
      box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
    }

    .timeline-title {
      text-align: center;
      color: #2c3e50;
      font-size: 2.5em;
      margin-bottom: 40px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    }

    .timeline {
      position: relative;
      display: flex;
      align-items: flex-start;
      gap: 40px;
      padding: 60px 20px 200px;
      min-width: 1400px;
      min-height: 500px;
    }

    .timeline::before {
      content: '';
      position: absolute;
      top: 80px;
      left: 20px;
      right: 20px;
      height: 4px;
      background: linear-gradient(90deg, #3498db, #9b59b6, #e74c3c, #f39c12, #27ae60, #e67e22, #2ecc71);
      border-radius: 2px;
      z-index: 0;
    }

    .timeline-item {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 200px;
      opacity: 0;
      animation: fadeInUp 0.8s ease forwards;
      
    }

    .timeline-item:nth-child(1) { animation-delay: 0.1s; }
    .timeline-item:nth-child(2) { animation-delay: 0.2s; }
    .timeline-item:nth-child(3) { animation-delay: 0.3s; }
    .timeline-item:nth-child(4) { animation-delay: 0.4s; }
    .timeline-item:nth-child(5) { animation-delay: 0.5s; }
    .timeline-item:nth-child(6) { animation-delay: 0.6s; }
    .timeline-item:nth-child(7) { animation-delay: 0.7s; }

    .timeline-icon {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, #3498db, #2980b9);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      color: white;
      box-shadow: 0 5px 15px rgba(52, 152, 219, 0.4);
      z-index: 2;
      transition: all 0.3s ease;
      margin-bottom: 20px;
    }

    .timeline-icon:hover {
      transform: scale(1.1);
      box-shadow: 0 8px 25px rgba(52, 152, 219, 0.6);
    }

    .timeline-content {
      background: linear-gradient(135deg, #ffffff, #f8f9fa);
      border-radius: 15px;
      padding: 25px;
      width: 100%;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
      border: 2px solid transparent;
      transition: all 0.3s ease;
      position: relative;
    }

    .timeline-content:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
      border-color: #3498db;
    }

    .timeline-content.clickable {
      cursor: pointer;
      border: 2px solid #3498db;
    }

    .timeline-date {
      font-size: 1.2em;
      font-weight: bold;
      color: #2c3e50;
      margin-bottom: 15px;
      text-align: center;
      border-bottom: 2px solid #3498db;
      padding-bottom: 8px;
    }

    .timeline-tasks {
      color: #555;
      line-height: 1.6;
      list-style: none;
    }

    .timeline-tasks li {
      margin: 8px 0;
      padding-left: 20px;
      position: relative;
      font-size: 0.95em;
    }

    .timeline-tasks li::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #27ae60;
      font-weight: bold;
    }

    .detailed-timeline {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 30px;
      padding: 40px 20px 100px;
      max-width: 1200px;
      margin: 0 auto;
      max-height: calc(90vh - 200px);
      overflow-y: auto;
    }

    .detailed-timeline::before {
      content: '';
      position: absolute;
      left: 50px;
      top: 40px;
      bottom: 40px;
      width: 4px;
      background: linear-gradient(180deg, #3498db, #9b59b6, #e74c3c, #f39c12, #27ae60);
      border-radius: 2px;
      z-index: 1;
    }

    .detailed-item {
      position: relative;
      display: flex;
      align-items: center;
      gap: 30px;
      opacity: 0;
      animation: fadeInLeft 0.8s ease forwards;
    }

    .detailed-item:nth-child(1) { animation-delay: 0.1s; }
    .detailed-item:nth-child(2) { animation-delay: 0.2s; }
    .detailed-item:nth-child(3) { animation-delay: 0.3s; }
    .detailed-item:nth-child(4) { animation-delay: 0.4s; }
    .detailed-item:nth-child(5) { animation-delay: 0.5s; }
    .detailed-item:nth-child(6) { animation-delay: 0.6s; }

    .detailed-icon {
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, #3498db, #2980b9);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      color: white;
      box-shadow: 0 5px 15px rgba(52, 152, 219, 0.4);
      z-index: 2;
      flex-shrink: 0;
    }

    .detailed-content {
      flex: 1;
      background: linear-gradient(135deg, #ffffff, #f8f9fa);
      border-radius: 15px;
      padding: 25px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
      border-left: 4px solid #3498db;
      transition: all 0.3s ease;
    }

    .detailed-content:hover {
      transform: translateX(5px);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
    }

    .detailed-date {
      font-size: 1.1em;
      font-weight: bold;
      color: #2c3e50;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .detailed-tasks {
      color: #555;
      line-height: 1.6;
      list-style: none;
    }

    .detailed-tasks li {
      margin: 5px 0;
      padding-left: 20px;
      position: relative;
      font-size: 0.95em;
    }

    .detailed-tasks li::before {
      content: '▶';
      position: absolute;
      left: 0;
      color: #3498db;
      font-size: 12px;
    }

    .milestone-marker {
      position: relative;
      background: linear-gradient(135deg, #ff6b6b, #ee5a24);
      color: white;
      padding: 20px;
      border-radius: 15px;
      text-align: center;
      font-weight: bold;
      box-shadow: 0 10px 30px rgba(255, 107, 107, 0.3);
      animation: pulseGlow 2s infinite;
    }

    .slide-indicator {
      position: absolute;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 10px;
      z-index: 100;
    }

    .indicator {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.5);
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .indicator.active {
      background: #3498db;
      transform: scale(1.2);
    }

    .back-btn {
      position: absolute;
      top: 20px;
      left: 30px;
      padding: 12px 20px;
      background: linear-gradient(135deg, #95a5a6, #7f8c8d);
      color: white;
      border: none;
      border-radius: 25px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 600;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(149, 165, 166, 0.3);
      z-index: 100;
    }

    .back-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(149, 165, 166, 0.4);
    }

    .icon-preprocess { background: linear-gradient(135deg, #74b9ff, #0984e3) !important; }
    .icon-model { background: linear-gradient(135deg, #00b894, #00a085) !important; }
    .icon-report { background: linear-gradient(135deg, #fdcb6e, #e17055) !important; }
    .icon-urban { background: linear-gradient(135deg, #a29bfe, #6c5ce7) !important; }
    .icon-validation { background: linear-gradient(135deg, #fd79a8, #e84393) !important; }
    .icon-adjustment { background: linear-gradient(135deg, #fdcb6e, #f39c12) !important; }
    .icon-comparison { background: linear-gradient(135deg, #55a3ff, #003d82) !important; }
    .icon-files { background: linear-gradient(135deg, #00cec9, #00b894) !important; }
    .icon-meeting { background: linear-gradient(135deg, #fd79a8, #e84393) !important; }
    .icon-python { background: linear-gradient(135deg, #fdcb6e, #f39c12) !important; }
    .icon-current { background: linear-gradient(135deg, #ff6b6b, #ee5a24) !important; }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes fadeInLeft {
      from { opacity: 0; transform: translateX(-30px); }
      to { opacity: 1; transform: translateX(0); }
    }

    @keyframes pulseGlow {
      0%, 100% { box-shadow: 0 10px 30px rgba(255, 107, 107, 0.3); }
      50% { box-shadow: 0 15px 40px rgba(255, 107, 107, 0.5); }
    }
  `;

  return (
    <div className="timeline-container">
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      
      <div className="slides-container">
        {/* Slide 1: Overview */}
        <div className={`slide ${currentSlide === 1 ? 'active' : ''}`}>
          <div className="container">
            <div className="navigation">
              <button 
                className={`nav-btn ${currentSlide === 1 ? 'active' : ''}`} 
                onClick={() => showSlide(1)}
              >
                Vue d'ensemble
              </button>
              <button 
                className={`nav-btn ${currentSlide === 2 ? 'active' : ''}`} 
                onClick={() => showSlide(2)}
              >
                Détails Mai-Juin
              </button>
            </div>

            <h1 className="timeline-title">🗓️ Timeline de Projet - Étapes Clés</h1>
            
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-icon icon-preprocess">🔧</div>
                <div className="timeline-content">
                  <div className="timeline-date">📅 Avril</div>
                  <ul className="timeline-tasks">
                    <li>Tokenisation temporelle</li>
                    <li>Exploration de l'architecture transformers</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon icon-urban">🏙️</div>
                <div className="timeline-content clickable" onClick={() => showSlide(2)}>
                  <div className="timeline-date">📅 Début mai - Mi-mai</div>
                  <ul className="timeline-tasks">
                    <li>Scénarios urbains</li>
                    <li>PHN urbains</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon icon-validation">✅</div>
                <div className="timeline-content clickable" onClick={() => showSlide(2)}>
                  <div className="timeline-date">📅 Mi-mai - Mi-juin</div>
                  <ul className="timeline-tasks">
                    <li>Validation</li>
                    <li>Fichiers .mat</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon icon-adjustment">⚙️</div>
                <div className="timeline-content">
                  <div className="timeline-date">📅 Mi-juin - Fin juin</div>
                  <ul className="timeline-tasks">
                    <li>PHN (infra, usagers)</li>
                    <li>Ajustement stratégie</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon icon-model">🤖</div>
                <div className="timeline-content">
                  <div className="timeline-date">📅 Juillet</div>
                  <ul className="timeline-tasks">
                    <li>Conversion .mat</li>
                    <li>Prétraining</li>
                    <li>Fine-tuning</li>
                    <li>Détection</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon icon-comparison">🔬</div>
                <div className="timeline-content">
                  <div className="timeline-date">📅 Début - Mi-août</div>
                  <ul className="timeline-tasks">
                    <li>Transformer</li>
                    <li>Comparaison CNN</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon icon-report">📝</div>
                <div className="timeline-content">
                  <div className="timeline-date">📅 Mi-août - Fin août</div>
                  <ul className="timeline-tasks">
                    <li>Rédaction mémoire</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="slide-indicator">
              <div 
                className={`indicator ${currentSlide === 1 ? 'active' : ''}`} 
                onClick={() => showSlide(1)}
              />
              <div 
                className={`indicator ${currentSlide === 2 ? 'active' : ''}`} 
                onClick={() => showSlide(2)}
              />
            </div>
          </div>
        </div>

        {/* Slide 2: Detailed View */}
        <div className={`slide ${currentSlide === 2 ? 'active' : ''}`}>
          <div className="container">
            <button className="back-btn" onClick={() => showSlide(1)}>
              ← Retour à la vue d'ensemble
            </button>
            
            <div className="navigation">
              <button className="nav-btn" onClick={() => showSlide(1)}>
                Vue d'ensemble
              </button>
              <button className="nav-btn active">
                Détails Mai-Juin
              </button>
            </div>

            <h1 className="timeline-title">🔍 Zoom : Période Mai-Juin (Détails)</h1>
            
            <div className="detailed-timeline">
              <div className="detailed-item">
                <div className="detailed-icon icon-files">📁</div>
                <div className="detailed-content">
                  <div className="detailed-date">📅 Début mai</div>
                  <ul className="detailed-tasks">
                    <li>Accès aux fichiers .mat bruts</li>
                    <li>Récupération des scripts MATLAB existants</li>
                    <li>Analyse de l'architecture des données</li>
                  </ul>
                </div>
              </div>

              <div className="detailed-item">
                <div className="detailed-icon icon-meeting">👥</div>
                <div className="detailed-content">
                  <div className="detailed-date">📅 Mi-mai</div>
                  <ul className="detailed-tasks">
                    <li>Réunion avec Push et Doha</li>
                    <li>Discussion des modifications nécessaires</li>
                    <li>Génération de fichiers .mat légèrement modifiés</li>
                    <li>Validation des spécifications</li>
                  </ul>
                </div>
              </div>

              <div className="detailed-item">
                <div className="detailed-icon icon-python">🐍</div>
                <div className="detailed-content">
                  <div className="detailed-date">📅 Fin mai - Début juin</div>
                  <ul className="detailed-tasks">
                    <li>Développement version Python du pipeline MATLAB</li>
                    <li>Génération .mat en Python</li>
                    <li>Implémentation occupancy grid</li>
                    <li>Tests de compatibilité</li>
                  </ul>
                </div>
              </div>

              <div className="milestone-marker">
                📍 CETTE SEMAINE PASSÉE 📍
              </div>

              <div className="detailed-item">
                <div className="detailed-icon icon-current">🔬</div>
                <div className="detailed-content" style={{borderLeft: '4px solid #ff6b6b', background: 'linear-gradient(135deg, #fff5f5, #ffe8e8)'}}>
                  <div className="detailed-date">📅 Cette semaine - Validation en cours</div>
                  <ul className="detailed-tasks">
                    <li><strong>Validation du pipeline Python actuel</strong></li>
                    <li>Vérification des outputs du pipeline Python</li>
                    <li>Comparaison outputs Python vs MATLAB</li>
                    <li>Tests de cohérence des données</li>
                    <li>Validation des grilles d'occupation</li>
                    <li>Correction des écarts identifiés</li>
                  </ul>
                </div>
              </div>

              <div className="detailed-item">
                <div className="detailed-icon icon-adjustment">⚙️</div>
                <div className="detailed-content">
                  <div className="detailed-date">📅 Fin juin (à venir)</div>
                  <ul className="detailed-tasks">
                    <li>Ajustements finaux du pipeline</li>
                    <li>Optimisation des performances</li>
                    <li>Documentation technique</li>
                    <li>Préparation pour la phase suivante</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="slide-indicator">
              <div 
                className={`indicator ${currentSlide === 1 ? 'active' : ''}`} 
                onClick={() => showSlide(1)}
              />
              <div 
                className={`indicator ${currentSlide === 2 ? 'active' : ''}`} 
                onClick={() => showSlide(2)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;