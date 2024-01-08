import React from "react";
import "./ContentRec.css";
import { NavLink } from "react-router-dom";

function ContentRec() {
  let Styles = {
    color: "white",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "black",
  };

  return (

      <NavLink to={"/mathartc"}>
      <div
        className="RecContent container full-height d-flex flex-column"
        style={Styles}
      >
        <div className="row title__RecContent">{"Math Problem"}</div>
        <div className="row mt-auto">
          <div className="col subtitle__RecContent">{"An interesting mathematics problem about sequence convergence that merges arithematics, topology and sequence manipulation"}</div>
          <div className="col subtitle__RecContent">
            {}
          </div>
          <div className="col subtitle__RecContent">
            {}
          </div>
        </div>
      </div>
      </NavLink>

  );
}

export default ContentRec;
