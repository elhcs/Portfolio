import React from 'react';
import styles from './Articlecomp.module.css'; // Adjust the path as necessary
import { NavLink } from 'react-router-dom';

// Helper function to determine if the URL is a video
const isVideo = (url) => {
  // Checks for video file extensions
  return /\.(mp4|webm)$/i.test(url);
};

const Card = ({ title, description, tag, imageUrl, isFeatured, article }) => {
  return (
    <div className={styles.card}>
      <NavLink to = {article}>
      <div className={styles.imageWrapper}>
        {isVideo(imageUrl) ? (
          // Renders a video element if the URL is a video
          <video src={imageUrl} alt={title} className={styles.cardImage} autoPlay muted loop controls/>
        ) : (
          // Renders an image element if the URL is an image
          <img src={imageUrl} alt={title} className={styles.cardImage} />
        )}
      </div>
      <div className={styles.cardTextContent}>
        <div className={styles.tagWrapper}>
          <span style={{ marginLeft: 0, color: 'white', backgroundColor: 'black' }}>{tag}</span>
        </div>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
      </NavLink>
    </div>
  );
};

const NewReleases = () => {
  // Example data, this should come from your state or props
  const cardsData = [
    {
      title: 'University Design Club Founded by me',
      description: 'MLYSF is a clothing brand design concept inspired by moulay youssef CPGE.',
      tag: 'UNIVERSITY',
      imageUrl: 'https://elx.onrender.com/udcvideo.mp4',
      isFeatured: true,
      article : ''
    },
    {
      title: "Rosalia's Third Album: MOTOMAMI",
      description: 'Explore the latest album by Rosalia.',
      tag: 'MUSIC',
      imageUrl: 'https://portfoliox-vdrp.onrender.com/public/images/ba4a495fd3c16fdd83340acf4039e960.jpg',
      isFeatured: true,
      article : '../644310db0e626d1b2192ea40'
    },
    {
      title: 'Logos that never made it',
      description: 'Logos and visual designs that got scrapped',
      tag: 'DESIGN',
      imageUrl: 'https://i.ibb.co/DbSMJY8/345654099-219362074136514-1256384178040045729-n.jpg',
      isFeatured: true,
      article : ''
    },{
      title: 'Collaboration Secrets: Design X Engineering',
      description: 'Learn how engineers and designers collaborate at Spotify.',
      tag: 'BEHIND THE SCENES',
      imageUrl: ("/static/media/394709091_359688783151169_5143872337014891556_n-ezgif.com-video-to-gif-converter.b415dfbe5b6be405b6c2.gif"),
      isFeatured: true,
      article : '../shortfilm'
    },
    {
      title: 'Clothing Brand visual identity and product design',
      description: 'MLYSF is a clothing brand deisgn concept inspired by moulay youssef CPGE.',
      tag: 'DESIGN',
      imageUrl: 'https://i.ibb.co/kmtqYMh/271682691-1338805246567477-450652492691158394-n.jpg',
      isFeatured: true,
      article : ''
    },

  ];

  return (
    <section className={styles.newReleases}>
      <header className={styles.header}>
        <h2 className={styles.headertitle}>New Projects</h2>
        <a href="/stories" className={styles.allStoriesLink}>View all projects</a>
      </header>
      <div className={styles.cardContainer}>
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default NewReleases;
