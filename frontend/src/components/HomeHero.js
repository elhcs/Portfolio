import React from "react";
import "./HomeHero.css";

function HomeHero({
  slides,
  currentIndex,
  imageSrc,
  imageAlt = "Featured preview",
  onNavigate,
}) {
  const currentSlide = slides[currentIndex] || ["", ""];

  return (
    <div className="home-hero">
      <div className="home-hero__text-column">
        <div className="home-hero__text-wrapper">
          <div className="home-hero__top-text">
            <h1>{currentSlide[0]}</h1>
            <p>{currentSlide[1]}</p>
          </div>
        </div>

        <div className="home-hero__indicator-container">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => onNavigate(index)}
              className={`home-hero__indicator ${
                index === currentIndex ? "home-hero__indicator--active" : ""
              }`}
              aria-label={`Show slide ${index + 1}`}
              aria-current={index === currentIndex ? "true" : undefined}
            />
          ))}
        </div>
      </div>

      <div className="home-hero__wall" />

      <div className="home-hero__media-column">
        <img src={imageSrc} className="home-hero__image" alt={imageAlt} />
      </div>
    </div>
  );
}

export default HomeHero;
