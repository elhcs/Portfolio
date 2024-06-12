import React from 'react';
import styles from './Articlecomp.module.css'; // Adjust the path as necessary

const Card = ({ title, description, tag, imageUrl, isFeatured }) => {
    return (
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <img src={imageUrl} alt={title} className={styles.cardImage} />
        </div>
        <div className={styles.cardTextContent}>
          <div className={styles.tagWrapper}>
          <span style={{ marginLeft: 0, color: 'white', backgroundColor: 'black',  }}>{tag}</span>
          </div>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardDescription}>{description}</p>
        </div>
      </div>
    );
  };
  
  
  const NewReleases = () => {
    // Example data, this should come from your state or props
    const cardsData = [
      {
        title: 'Rosalias third album: MOTOMAMI',
        description: 'Learn how engineers and designers collaborate at Spotify.',
        tag: 'MUSIC',
        imageUrl: 'https://portfoliox-vdrp.onrender.com/public/images/ba4a495fd3c16fdd83340acf4039e960.jpg',
        isFeatured: true
      },
      // ... add other cards
    ];
  
    return (
      <section className={styles.newReleases}>
        <header className={styles.header}>
          <h2 className={styles.headertitle}>New Releases</h2>
          <a href="/stories" className={styles.allStoriesLink}> View all stories </a>
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