import React from "react";
import { NavLink } from "react-router-dom";
import "./Nopage.css";
import GaussianTextBackground from "../components/internship_timeline";

function Nopage() {
  return (
    <main className="not-found" aria-labelledby="not-found-title">
      <div className="not-found__graphic" aria-hidden="true">
        <div className="not-found__visual"><GaussianTextBackground responsive pixelSpacing={48} pixelSize={44} sigma={130} persistenceFrames={45} /></div>
        <span className="not-found__label">Move or touch to leave a trace</span>
        <span className="not-found__label">Nothing is ever really empty.</span>
      </div>
      <div className="not-found__content">
        <div className="not-found__text-wrapper">
          <div className="not-found__top-text">
        <h1 id="not-found-title">404 <br />Page not found</h1>
        <p>This page may have moved, or the link may be incorrect.</p>
        {/* <NavLink className="not-found__link" to="/">
          Back to home <span aria-hidden="true">↗</span>
        </NavLink> */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Nopage;
