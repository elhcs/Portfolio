import React from "react";
import "./Blackbords.css";

const Blackbords = () => {
  return (
    <div className="video-list">
      <div className="video-wrapper">
        <video controls autoPlay muted>
          <source src="https://elx.onrender.com/elxpod.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video controls autoPlay muted>
          <source src="https://elx.onrender.com/elxlunchglw.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video controls autoPlay muted>
          <source src="https://elx.onrender.com/melusino.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video controls autoPlay muted>
          <source src="https://elx.onrender.com/jibit.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Ensure all video tags are properly self-closed */}
      </div>
    </div>
  );
};

export default Blackbords;