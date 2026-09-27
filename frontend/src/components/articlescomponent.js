import React from 'react';
import styles from './Articlecomp.module.css'; // Adjust the path as necessary
import Card from './Card';

const NewReleases = () => {
  // Example data, this should come from your state or props
  const cardsData = [
    {
      title: 'Founding a University Design Club',
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
      title: 'Rosalía and the Art of Transformation',
      description: 'A review of Rosalía’s music through transformation, contradiction, and transcendence.',
      tag: 'MUSIC',
      imageUrl: [
        'https://i.pinimg.com/1200x/2f/d0/62/2fd062f916481cfb5ffb3d72030e2fcd.jpg',
        'https://i.pinimg.com/1200x/82/f5/94/82f5943c86690cd9e4cfe7f8c82eb01d.jpg',
      ],
      isFeatured: true,
      article : '/rosalia'
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
      article : '/clothing'
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
