import React, { useEffect } from "react";
import HomeHero from "../components/HomeHero";
import Footer from "../components/footer_new";
import "./Clothing.css";

const behanceUrl = "https://www.behance.net/gallery/127663665/MLYSF-Clothing-brand-visual-identity";
const projectImages = [
  "https://i.ibb.co/kmtqYMh/271682691-1338805246567477-450652492691158394-n.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/69f5fa127663665.61467abcca6d6.png",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/9e1b0b127663665.61467abcca12d.png",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/e325a1127663665.61467abcc9390.png",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/01da54127663665.61467abcccf73.png",
];

const heroSlides = [
  [
    "MLYSF Clothing Brand Visual Identity",
    "A clothing brand design concept inspired by Moulay Youssef CPGE, built around a bold visual identity, graphic apparel language, and a direct black-and-white system.",
  ],
];

const identityNotes = [
  "Clothing brand concept",
  "Visual identity system",
  "Apparel and product design",
  "Inspired by Moulay Youssef CPGE",
];

const campaignPosts = [
  "https://www.instagram.com/p/CTGBzlgjGQD/",
  "https://www.instagram.com/p/ChLVO2rjilt/",
  "https://www.instagram.com/p/CRHtD4_HbiF/",
  "https://www.instagram.com/reel/CgkZG9nDgaN/",
];

function ClothingProject() {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <div className="clothing-page">
      <HomeHero
        slides={heroSlides}
        currentIndex={0}
        imageSrc={projectImages[0]}
        imageAlt="MLYSF clothing brand visual identity preview"
        onNavigate={() => {}}
      />


      <section className="clothing-section clothing-section--split">
        <div className="clothing-section__text">
          <p className="clothing-kicker">Concept</p>
          <h2>From institution to identity.</h2>
          <p>
            The project takes inspiration from Moulay Youssef CPGE and translates that reference into
            a fashion-facing language. 
          </p>
        </div>
        <div className="clothing-institution">
          <img src="/moulayyoussef1.jpg" alt="Moulay Youssef institution facade" />
          <img src="/moulayyoussef2.jpg" alt="Moulay Youssef institution entrance" />
          <div className="clothing-institution__label">
            <span>MY</span>
            <strong>LYSF</strong>
            <small>Source Institution</small>
          </div>
        </div>
      </section>

      <section className="clothing-section">
        <header className="clothing-section__header">
          <h2>Identity System</h2>
          <p>A restrained toolkit designed to be recognizable on fabric, tags, posters, and digital previews.</p>
        </header>

        <div className="clothing-notes">
          {identityNotes.map((note) => (
            <div key={note} className="clothing-note">
              {note}
            </div>
          ))}
        </div>
      </section>

      <section className="clothing-social">
        <header className="clothing-section__header">
          <h2>Campaign Posts</h2>
          <p>
            Selected ELX Design Instagram posts extend the identity into public-facing campaign
            material, showing how the MLYSF system behaves outside a static brand board.
          </p>
        </header>

        <div className="clothing-social__grid">
          {campaignPosts.map((postUrl) => (
            <blockquote
              key={postUrl}
              className="instagram-media"
              data-instgrm-permalink={postUrl}
              data-instgrm-version="14"
            />
          ))}
        </div>
      </section>

      <section className="clothing-showcase">
        <img src="/mlysf-instagram-application.png" alt="MLYSF apparel visual identity mockup" />
        <div className="clothing-showcase__panel">
          <p className="clothing-kicker">Application</p>
          <h2>Graphic enough for campaigns, simple enough for garments.</h2>
          <p>
            The page uses the same two-column rhythm, strong black fields, and oversized typography
            found across the rest of the portfolio, while giving the clothing project its own visual
            identity moment.
          </p>
        </div>
      </section>

      <section className="clothing-gallery" aria-label="MLYSF Behance project images">
        {projectImages.slice(2).map((imageSrc, index) => (
          <img
            key={imageSrc}
            src={imageSrc}
            alt={`MLYSF visual identity project ${index + 1}`}
          />
        ))}
      </section>

      <section className="clothing-process">
        <div>
          <span>01</span>
          <h3>Reference</h3>
          <p>Start from the Moulay Youssef CPGE inspiration and define the emotional territory.</p>
        </div>
        <div>
          <span>02</span>
          <h3>System</h3>
          <p>Build a direct graphic language that can work as identity.</p>
        </div>
        <div>
          <span>03</span>
          <h3>Product</h3>
          <p>Apply the system to clothing mockups and brand touchpoints so it feels wearable.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ClothingProject;
