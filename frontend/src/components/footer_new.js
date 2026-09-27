import React from 'react';
import { Link } from 'react-router-dom';
import './Footer_new.css';

const FooterDesign = ({ design = 'compact', variant = 'a' }) => (
  <footer className={`site-footer site-footer--${design} site-footer--variant-${variant}`}>
    <div className="site-footer__main">
      <div className="site-footer__identity">
        <span className="site-footer__eyebrow"></span>
        <Link className="site-footer__name" to="/">
          <img className="site-footer__logo" src="/elx-ezgif.com-crop.gif" alt="El Houssaine Chahboun" />
        </Link>
      </div>
      <nav className="site-footer__nav" aria-label="Footer navigation">
        <Link to="/"><span className="site-footer__number" aria-hidden="true">01</span>Home</Link>
        <Link to="/about"><span className="site-footer__number" aria-hidden="true">02</span>About</Link>
        <Link to="/udc"><span className="site-footer__number" aria-hidden="true">03</span>University Design Club</Link>
        <a href="https://github.com/elhcs" target="_blank" rel="noopener noreferrer"><span className="site-footer__number" aria-hidden="true">04</span>GitHub</a>
      </nav>
    </div>
    <div className="site-footer__bottom">
      <small>© {new Date().getFullYear()} El Houssaine Chahboun</small>
      <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>
        Back to top <span aria-hidden="true">↑</span>
      </button>
    </div>
  </footer>
);

const footerStyles = [
  { design: 'index', label: '01 / Index', variants: ['Numbered rows', 'Four-cell grid'] },
  { design: 'masthead', label: '02 / Masthead', variants: ['White signature', 'Black signature'] },
  { design: 'compact', label: '03 / Compact', variants: ['Horizontal strip', 'Centered colophon'] },
];

const MergedFooter = ({ showcase = false, design = 'compact', variant = 'a' }) => {
  if (!showcase) return <FooterDesign design={design} variant={variant} />;

  return (
    <div className="footer-showcase" aria-label="Footer design comparison">
      {footerStyles.map(style => (
        <section className="footer-showcase__style" key={style.design} aria-label={style.label}>
          {style.variants.map((label, index) => (
            <div className="footer-showcase__example" key={label}>
              <h2 className="footer-showcase__label">{style.label} — {index === 0 ? 'A' : 'B'} / {label}</h2>
              <FooterDesign design={style.design} variant={index === 0 ? 'a' : 'b'} />
            </div>
          ))}
        </section>
      ))}
    </div>
  );
};

export default MergedFooter;
