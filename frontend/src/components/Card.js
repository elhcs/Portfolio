import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Articlecomp.module.css'; 

const isVideo = (url) => /\.(mp4|webm)$/i.test(url);

const Card = ({
  title,
  description,
  tag,
  imageUrl,
  article,
  textColor = '#333', // default color
}) => {
  return (
    <div className={styles.card}>
      <NavLink to={article}>
        <div className={styles.imageWrapper}>
          {isVideo(imageUrl) ? (
            <video
              src={imageUrl}
              alt={title}
              className={styles.cardImage}
              autoPlay
              muted
              loop
              controls
            />
          ) : (
            <img src={imageUrl} alt={title} className={styles.cardImage} />
          )}
        </div>
        <div className={styles.cardTextContent}>
          <div className={styles.tagWrapper}>
            <span style={{ marginLeft: 0, color: 'white', backgroundColor: 'black' }}>
              {tag}
            </span>
          </div>
          <h3 className={styles.cardTitle} style={{ color: textColor }}>
            {title}
          </h3>
          <p className={styles.cardDescription} style={{ color: textColor }}>
            {description}
          </p>
        </div>
      </NavLink>
    </div>
  );
};

export default Card;
