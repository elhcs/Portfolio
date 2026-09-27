import React, { useEffect, useState } from 'react';
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
  const frameList = Array.isArray(imageUrl) ? imageUrl : [imageUrl];
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);

  useEffect(() => {
    if (frameList.length < 2) {
      return undefined;
    }

    const intervalId = setInterval(() => {
      setCurrentFrameIndex((previousIndex) => (previousIndex + 1) % frameList.length);
    }, 1800);

    return () => clearInterval(intervalId);
  }, [frameList]);

  const thumbnailSource = frameList[currentFrameIndex] || frameList[0];

  return (
    <div className={styles.card}>
      <NavLink to={article}>
        <div className={styles.imageWrapper}>
          {isVideo(thumbnailSource) ? (
            <video
              src={thumbnailSource}
              alt={title}
              className={styles.cardImage}
              autoPlay
              muted
              loop
              controls
            />
          ) : (
            <img src={thumbnailSource} alt={title} className={styles.cardImage} />
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
