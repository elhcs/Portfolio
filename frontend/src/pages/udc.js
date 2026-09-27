import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setlight } from '../reducers/themeReducer';
import Footer from '../components/footer_new';
import styles from './Udc.module.css';

const instagramURLs = [
  "https://www.instagram.com/reel/CgkZG9nDgaN/",
  "https://www.instagram.com/p/ChLVO2rjilt/",
  "https://www.instagram.com/p/CTGBzlgjGQD/"
];



const cardsData = [
  {
    title: "Nezar RADI",
    description: "Monetizing students' creativity, UM6P's first Graphic Design club: a fresh alternative to traditional design agencies.",
    tag: "VICE PRESIDENT",
    imageUrl: "nezar.png",
    isFeatured: true,
    article: "/udc",
  },
  {
    title: "El Houssaine CHAHBOUN",
    description: "Gao Hang is an artist who seamlessly blends the contemporary with the classic.",
    tag: "PRESIDENT",
    imageUrl: "testid.png",
    isFeatured: true,
    article: "/project/66718936219f0d12d16680cf",
  },
  {
    title: "ANAS QARQOURI",
    description: "An introduction to tracking objects across frames in video using the Tracking by Detection approach.",
    tag: "TREASURER",
    imageUrl: "anas.png",
    isFeatured: true,
    article: "/project/644310db0e626d1b2192ea40",
  },
  {
    title: "ABDELLAH EMINES",
    description: "Training LSTM and Transformer models for generating music sequences.",
    tag: "COMMUNICATION CHAIR",
    imageUrl: "abdo.png",
    isFeatured: true,
    article: "/biomed",
  },
  {
    title: "CHAIMAA ",
    description: "Houssaine the frog is stunned by technology, turns his screen off, and realizes it's all under his control.",
    tag: "PARTNERSHIP CHAIR",
    imageUrl: "chaimaa.png",
    isFeatured: true,
    article: "/shortfilm",
  },
  {
    title: "Souheil GNANE",
    description: "MLYSF is a clothing brand design concept inspired by Moulay Youssef CPGE.",
    tag: "MEMBERSHIP CHAIR",
    imageUrl: "1715617518905-modified.jpeg",
    isFeatured: true,
    article: "/clothing",
  },
];
function UdcProject() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setlight());
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else if (!document.querySelector('script[src="https://www.instagram.com/embed.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, [dispatch]);

  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroText}>
          <h1>University Design Club</h1>
          <p>Monetizing students’ creativity. UM6P’s first Graphic Design club: a fresh alternative to traditional design agencies.</p>
          <a href="#udc-story" className={styles.heroLink}>Discover the club <span aria-hidden="true">↗</span></a>
        </div>
        <div className={styles.heroMedia}><img src="/ezgif-com-video-to-gif-converted-2.gif" alt="University Design Club preview" /></div>
      </header>
      <div className={styles.strip}><span>Creativity meets opportunity</span><span>Mohammed VI Polytechnic University</span></div>
           <section id="udc-story" className={styles.section}>
      <header className={styles.header}>

        <h2 className={styles.title}>Our story</h2>

             </header>
             <p className={styles.description}>Founded at the exciting Mohammed VI Polytechnic University in 2023, the University Design Club (UDC), previously ELX, began as a small initiative by a group of passionate design enthusiasts led by El Houssaine CHAHBOUN, our first President. Inspired by the need for a collaborative space where creativity, innovation, and learning could thrive, UDC was established to empower students to turn their design dreams into reality.</p>


      <div className={styles.storyMedia}>
        <video src="https://elx.onrender.com/udcvideo.mp4" className={styles.film} autoPlay muted loop controls playsInline preload="metadata" aria-label="University Design Club film" />
        <div className={styles.videoGrid}>
          {['elxpod', 'elxlunchglw', 'melusino', 'jibit'].map((name, index) => (
            <figure className={styles.videoCard} key={name}>
              <video src={`https://elx.onrender.com/${name}.mp4`} autoPlay muted loop controls playsInline preload="metadata" aria-label={`Club project video ${index + 1}`} />
              <figcaption><span>UDC / Film 0{index + 1}</span><span aria-hidden="true">↗</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
      <section className={styles.section}>
      <header className={styles.header}>

        <h2 className={styles.title}>Club Members</h2>
        <a href="/stories" className={styles.link}>View all members</a>
      </header>
      <div className={styles.cardContainer}>
        {cardsData.map((card, index) => (
          <a className={styles.member} href={card.article} key={card.title}>
            <img src={card.imageUrl} alt={card.title} loading="lazy" />
            <span className={styles.kicker}>{card.tag}</span>
            <h3>{card.title}</h3>
          </a>
        ))}
      </div>
    </section>
    <section className={styles.section}>
        <header className={styles.header}>
          <h2 className={styles.title}>University Design Club</h2>
          <a href="/stories" className={styles.link}> Join us </a>
          <a href="/stories" className={styles.link}> Sponsor us </a>
        </header>
      </section>




    <section className={`${styles.section} ${styles.online}`} aria-labelledby="udc-online">
      <header className={styles.onlineHeader}>
        <span className={styles.kicker}>From the feed</span>
        <h2 id="udc-online" className={styles.title}>We're online.</h2>
        <p>Follow the work as it happens.</p>
        <a href="https://www.instagram.com/elx.design/" className={styles.socialLink} target="_blank" rel="noreferrer">@elx.design <span aria-hidden="true">↗</span></a>
      </header>
      <div className={styles.socialGrid}>
        {instagramURLs.map((url, index) => (
          <div className={styles.socialPost} key={url}>
            <blockquote className="instagram-media" data-instgrm-permalink={url} data-instgrm-version="14">
              <a href={url} target="_blank" rel="noreferrer">View this post on Instagram ↗</a>
            </blockquote>
          </div>
        ))}
      </div>
    </section>


    <Footer />
    </div>
  );
}

export default UdcProject;
