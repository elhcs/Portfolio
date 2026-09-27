import React from 'react';
import { Link } from 'react-router-dom';
import Articlecomp from '../components/articlescomponent';
import Footer from '../components/footer_new';
import shortfilmPreview from './394709091_359688783151169_5143872337014891556_n-ezgif.com-video-to-gif-converter.gif';
import styles from './Home.module.css';
import LegacyHomeHero from "../components/LegacyHomeHero";



const textElements = [
  ['Founding a UNIVERSITY DESIGN CLUB', 'An exploration of creative coding as a means of extending the expressive and generative capabilities of visual design tools.'],
  ['Rosalía and the Art of Transformation', 'An examination of contradiction, transcendence, and Rosalía’s ability to convert deconstruction into a coherent artistic language.'],
  ['Motion and Visual Design', 'An exploration of creative coding as a means of extending the expressive and generative capabilities of visual design tools.'],
  ['Short Film Starring Me as a Frog', "Houssaine the frog is stunned by technology, which uses increasingly invasive techniques to get attention. He turns his screen off in an attempt to escape and connect with real life, only to realize it's all under his control."],
];
const images = ['/ezgif-com-video-to-gif-converted-2cropped.gif', 'https://i.pinimg.com/1200x/2f/d0/62/2fd062f916481cfb5ffb3d72030e2fcd.jpg', '/elxdesign.gif', shortfilmPreview];

const MyComponent = () => {
  return (
    <div className={styles.page}>
      <LegacyHomeHero slides={textElements} images={images} viewerIndex={null} />
      <div className={styles.projects}><Articlecomp /></div>
 
      <section className={styles.club} aria-labelledby="home-club">
        <header className={styles.sectionHeader}>
          <h2 id="home-club">University Design Club</h2>
          <Link className={styles.textLink} to="/udc">Explore the club ↗</Link>
        </header>
        <video className={styles.clubFilm} src="https://elx.onrender.com/udcvideo.mp4" autoPlay muted loop controls playsInline preload="metadata" aria-label="University Design Club film" />
        <div className={styles.videoGrid}>
          {['elxpod', 'elxlunchglw', 'melusino', 'jibit'].map((name, index) => (
            <figure className={styles.videoCard} key={name}>
              <video src={`https://elx.onrender.com/${name}.mp4`} autoPlay muted loop controls playsInline preload="metadata" aria-label={`Club project video ${index + 1}`} />
              <figcaption><span>UDC / Film 0{index + 1}</span><span aria-hidden="true">↗</span></figcaption>
            </figure>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MyComponent;
