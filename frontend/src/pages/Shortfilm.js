import React from 'react';
import Footer from '../components/footer_new';
import film from './394709091_359688783151169_5143872337014891556_n.mp4';
import preview from './394709091_359688783151169_5143872337014891556_n-ezgif.com-video-to-gif-converter.gif';
import styles from './Shortfilm.module.css';

const Shortfilm = () => (
  <div className={styles.page}>
    <header className={styles.hero}>
      <div className={styles.heroText}>
        <h1>Short Film Starring Me as a Frog</h1>
        <p>Houssaine the frog is stunned by technology, which uses increasingly invasive techniques to get attention. He turns his screen off in an attempt to escape and connect with real life, only to realize it's all under his control.</p>
        <a className={styles.heroLink} href="#film-preview">Watch the preview <span aria-hidden="true">↗</span></a>
      </div>
      <div className={styles.heroMedia}>
        <img src={preview} alt="Animated preview of the short film starring Houssaine the frog" />
      </div>
    </header>
    <div className={styles.articleLabel}>
      <span>Short film</span>
      <span>Stop-motion, technology & connection</span>
    </div>

    <section className={styles.section} aria-labelledby="made-by">
      <div className={styles.sectionHeader}><span className={styles.kicker}>01 / People</span><h2 id="made-by">Made by</h2></div>
      <div className={styles.people}>
        <figure>
          <img src="/beatriz.jpeg" alt="Beatriz Filizola" loading="lazy" />
          <figcaption><h3>Beatriz Filizola</h3><p>talented Cinema & Audiovisual artist and passionate stop-motion director, currently pursuing her studies at Universidade Federal Fluminense (UFF) in Rio de Janeiro Brazil.</p></figcaption>
        </figure>
        <figure>
          <img src="/elhcs.jpeg" alt="El Houssaine Chahboun" loading="lazy" />
          <figcaption><h3>El Houssaine Chahboun</h3><p>Master's (M2) in Data Science at École Polytechnique in Paris.</p></figcaption>
        </figure>
      </div>
    </section>

    <section className={styles.section} aria-labelledby="behind-scenes">
      <div className={styles.sectionHeader}><span className={styles.kicker}>02 / On set</span><h2 id="behind-scenes">Behind the scenes</h2></div>
      <div className={styles.gallery}>
        <img src="/shortfilm1.webp" alt="Behind the scenes of the stop-motion production" loading="lazy" />
        <img src="/shortfilm2.webp" alt="A second view of the short-film set" loading="lazy" />
      </div>
      <div className={styles.story}>
        <p>During my enriching internship in Brazil, I explored machine learning challenges with supportive tutors and diverse problem-solving approaches. Beyond academia, I connected with inspiring individuals, including Alice Kupac and Beatriz Filizola, whose dedication to their cinema and animation project was truly rewarding.</p>
      </div>
    </section>

    <section id="film-preview" className={styles.screening} aria-labelledby="preview-title">
      <div className={styles.sectionHeader}><span className={styles.kicker}>03 / In motion</span><h2 id="preview-title">Meet the frog</h2></div>
      <video src={film} poster={preview} controls playsInline preload="metadata" aria-label="Short-film preview" />
    </section>

    <section className={styles.section} aria-labelledby="process-title">
      <div className={styles.sectionHeader}><span className={styles.kicker}>04 / The process</span><h2 id="process-title">Frame by frame</h2></div>
      <div className={styles.process}>
        <img src="/shortfilm5.webp" alt="A scene from the stop-motion production" loading="lazy" />
        <div className={styles.processText}>
          <div><h3>A (Long) Stop-Motion Process</h3><p>with each frame carefully crafted to bring the character's journey to life. The team spent hours designing the set, creating the frog, and meticulously adjusting the scenes to reflect the growing tension between the frog and the invasive technology. Every movement required precise adjustments to ensure smooth animation and convey emotion.</p></div>
          <div><h3>Creating a Nighttime Atmosphere</h3><p>One of the biggest challenges was shooting during the day while the short film's events took place at night. we had to manage lighting carefully to simulate a nighttime atmosphere, using shadows and subtle color shifts to maintain the desired mood. Despite these challenges, we were able to bring the story to life.</p></div>
        </div>
      </div>
    </section>

    <section className={styles.closing} aria-labelledby="frog-title">
      <div className={styles.closingText}>
        <span className={styles.kicker}>05 / Connection</span>
        <h2 id="frog-title">The frog is me!</h2>
        <p>Witnessing Alice craft a lonely green frog with just needle and thread, and Beatriz meticulously perfecting lighting setups, was inspiring. Their dedication and creativity made every moment memorable. Back in Morocco, I was touched to find the frog shared my name and lived in an animated version of my Brazilian apartment—a heartwarming reminder of the power of subtle, kind friendships that quietly leave lasting warmth.</p>
      </div>
      <img src="/shortfilm4.jpeg" alt="The frog character from the short film" loading="lazy" />
    </section>
    <Footer />
  </div>
);

export default Shortfilm;
