import React, { useEffect, useState } from "react";
import "./News.css";
import axios from "axios";

function News() {
 
  return (
    <div className="container article">
      <div className="row">
      <div className="col descarticle">
        <img src="https://media.newyorker.com/photos/62ea7afb6271f83a31690b22/master/w_2240,c_limit/220815_r40840web-story.jpg" alt="Description of the image" style={{ border: 'none' }} />
        </div>
        <div className="col textarticle">
          <div className="titletextarticle"style={{ color: '#000000' }}>{"ELX is a creative design studio based in Rabat and Founded in 2020 ELX is a creative design studio based in Rabat and Founded in 2020 ELX is a creative design studio based in Rabat and Founded in 2020 ELX is a creative design studio based in Rabat and Founded in 2020 ELX is a creative design studio based in Rabat and Founded in 2020. "}</div> 
          <div className="titletextarticle"style={{ color: '#000000' }}>{"ELX is a creative design studio based in Rabat and Founded in 2020 ELX is a creative design studio based in Rabat and Founded in 2020 ELX is a creative design studio based in Rabat and Founded in 2020 ELX is a creative design studio based in Rabat and Founded in 2020 ELX is a creative design studio based in Rabat and Founded in 2020. "}</div> <br></br><br></br><br></br><br></br>
          <div className="paratextarticle"style={{ color: '#000000' }}>{"ELX is a creative design studio based in Rabat and Founded in 2020 by El Houssaine CHAHBOUN."}</div>
        </div>
       
      </div>
      </div>

      
    );
  }


export default News;
