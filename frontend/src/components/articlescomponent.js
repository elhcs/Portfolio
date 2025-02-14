import React from 'react';
import styles from './Articlecomp.module.css'; // Adjust the path as necessary
import { NavLink } from 'react-router-dom';
import Card from './Card';
// Helper function to determine if the URL is a video
const isVideo = (url) => {
  // Checks for video file extensions
  return /\.(mp4|webm)$/i.test(url);
};



const NewReleases = () => {
  // Example data, this should come from your state or props
  const cardsData = [
    {
      title: 'University Design Club Founded By Me',
      description: "Monetizing students creativity, UM6P's first Graphic Design club: a fresh alternative to traditional design agencies. ",
      tag: 'UNIVERSITY',
      imageUrl: 'https://elx.onrender.com/udcvideo.mp4',
      isFeatured: true,
      article : 'udc'
    },
    {
      title: 'Lets make music with LSTM and Transformers',
      description: 'Training LSTM and Transformer models for generating music sequences (One-to-Many)',
      tag: 'DEEP LEARNING',
      imageUrl: 'https://i.pinimg.com/736x/c3/95/f3/c395f340d60ee7197704ff17344430d5.jpg',
      isFeatured: true,
      article : '../biomed'
    }, 
    {
      title: "Tracking by Detection in Computer Vision",
      description: 'An introduction to tracking objects across frames in video using the Tracking by Detection approach, including pose estimation and tracking algorithms.',
      tag: 'DEEP LEARNING',
      imageUrl: 'https://portfoliox-vdrp.onrender.com/public/images/f987ac3c-0c6b-49b3-b016-52d00a5d755a-1732460993710.png',
      isFeatured: true,
      article : '../project/644310db0e626d1b2192ea40'
    },
   
    {
      title: 'Blender Addon: Image to 3D Avatar!',
      description: 'This addon allows users to generate 3D avatars from 2D images, enhancing workflow for 3D artists and developers..',
      tag: 'ART',
      imageUrl: "https://i.pinimg.com/736x/6d/ef/02/6def029af03e7acec92bb8585fd2c32f.jpg",
      isFeatured: true,
      article : '/blenderaddon'
    },{
      title: 'Short Film Starring me As a Frog!',
      description: 'Houssaine the frog is stunned by technology, which uses increasingly invasive techniques to get attention. He turns his screen off in an attempt to escape and connect with real life, only to realize its all under his control.',
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
