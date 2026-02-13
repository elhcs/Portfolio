import React from "react";
import { NavLink } from "react-router-dom";
import "./Nopage.css";
import GaussianTextBackground from "../components/internship_timeline";

function Nopage() {
  return (
    <div>
      <h1>404</h1>
      <br />
      No page found
      <br />
      <NavLink to="/">Go to the home page</NavLink>
      <GaussianTextBackground/>
    </div>
  );
}

export default Nopage;
