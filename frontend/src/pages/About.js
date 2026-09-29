import React from 'react';
import styles from './About.module.css';

const About = () => {
  const description =
  (
    <>
      <p>I am a joint PhD student at ESSEC Business School and the University of Warwick, focusing on scalable Bayesian inference for complex latent variable models. I work with Importance Weighted Variational Inference methods and their connections to Sequential Monte Carlo, aiming to improve reliability in high-dimensional applications like epidemiology and neuroscience. I am co-supervised by{' '}

      <a
        href="https://www.essec.edu/en/faculty-research/faculty-directory/kamelia-daudel/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Kamélia Daudel
      </a>,{' '}
      <a
        href="https://warwick.ac.uk/fac/sci/statistics/staff/academic-research/johansen/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Adam Johansen
      </a>
      ,{' '}
      <a
        href="https://www.warwick.ac.uk/fac/sci/statistics/staff/academic-research/everitt/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Richard Everitt
      </a>{' '}
      and{' '}
      <a
        href="https://www.essec.edu/en/faculty-research/faculty-directory/pierre-jacob/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Pierre Jacob
      </a>.</p>
    </>
  );

  return (
    <main className={styles.page}>
      <section className={styles.biography} aria-labelledby="about-title">
        <span id="about-title" className={styles.kicker}>El Houssaine Chahboun</span>
        <p className={styles.role}>PhD student · Variational (Bayesian) inference</p>
        <div className={styles.description}>{description}</div>
      </section>
      <div className={styles.portraitPanel}>
        <figure className={styles.portrait}>
          <img src="/testid.png" alt="El Houssaine Chahboun" />
    
        </figure>
      </div>
    </main>
  );
};

export default About;
