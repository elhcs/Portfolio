import React, { useEffect, useState } from "react";
import "./LegacyHomeHero.css";

const defaultSlides = [
  [
    "MATHEMATICS, MACHINE LEARNING AND ARTS",
    "I'm all about mathematics, machine learning, and creative design (in that exact order, because even my passions need a proper sequence)",
  ],
  [
    "TRACKING BY DETECTION IN COMPUTER VISION",
    "An introduction to tracking objects across frames in video using the Tracking by Detection approach, including pose estimation and tracking algorithms.",
  ],
  [
    "MAKING MUSIC WITH LSTM AND TRANSFORMERS",
    "Training LSTM and Transformer models for generating music sequences (One-to-Many).",
  ],
];

const defaultImages = [
  "/ezgif-com-video-to-gif-converted-2.gif",
  null,
  "/elxdesign.gif",
];

function LegacyHomeHero({
  slides = defaultSlides,
  images = defaultImages,
  viewerSrc = "https://superspl.at/s?id=bb29f70a",
  viewerIndex = 1,
  interval = 12000,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((previousIndex) => (previousIndex + 1) % slides.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [interval, slides.length]);

  const currentSlide = slides[currentIndex] || ["", ""];
  const isViewerSlide = viewerIndex !== null && currentIndex === viewerIndex;

  return (
    <section className={`legacy-home-hero ${isMobile ? "legacy-home-hero--mobile" : ""}`}>
      <div className="legacy-home-hero__text-column">
        <div className="legacy-home-hero__text-wrapper">
          <div className="legacy-home-hero__top-text">
            <h1>{currentSlide[0]}</h1>
            <p>{currentSlide[1]}</p>
          </div>
        </div>

        <div className="legacy-home-hero__indicator-container" role="group" aria-label="Featured stories">
          {slides.map((slide, index) => (
            <button
              key={slide[0] || index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              className={`legacy-home-hero__indicator ${index === currentIndex ? "legacy-home-hero__indicator--active" : ""}`}
              aria-label={`Show ${slide[0] || `slide ${index + 1}`}`}
              aria-pressed={index === currentIndex}
            />
          ))}
        </div>
      </div>

      <div className="legacy-home-hero__media-column">
        {isViewerSlide ? (
          <iframe
            title="Computer vision interactive project"
            className="legacy-home-hero__viewer"
            allow="fullscreen; xr-spatial-tracking"
            src={viewerSrc}
          />
        ) : (
          <img
            className="legacy-home-hero__image"
            src={images[currentIndex]}
            alt={currentSlide[0] || "Featured project"}
          />
        )}
      </div>
    </section>
  );
}

export default LegacyHomeHero;
