import "./Home.css";
import Contact from "../components/Contact";
import Feed from "../components/Feed";
import Informations from "../components/Informations";
import MainRec from "../components/MainRec";
import "../components/Navbar";
import News from "../components/News";
import Parteners from "../components/Parteners";
import FAQ from "../components/FAQ";
import Blackbords from "../components/Blackbords";
import { useDispatch } from "react-redux";
import { setlight, setdark } from "../reducers/themeReducer";
import { useEffect } from "react";
import Contactfooter from "../components/Contactfooter";

function Article() {
  //const HOME_PROJECT_NUMBER = 4;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setlight());
  }, []);

  return (
    <div className="App">
      <div className="App-body">
        

      <div className="full-width-container">
      <div className="row">
        <div className="col text">
          <div className="titletext"style={{ color: '#ffffff',width:"80%" }}>{"MOTION DESIGN SHOWREEL"}</div><br></br>
          <div className="paratext"style={{ color: '#ffffff',width:"55%" }}>{"In 2023, I created diverse motion design projects, from club content to high-profile event videos, showcasing the broad creative scope of this field."}</div>
        </div>
        <div className="col desc">
        <img src="https://i.ibb.co/pJLyjpM/ezgif-com-video-to-gif-converted.gif" alt="Description of the image" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="full-width-container4">
            <div className="titletext2"style={{ color: '#000000' }}>{"Recent Projects"}</div>
            <div className="paratext2"style={{ color: '#000000' }}>{"ELX is a creative design studio based in Rabat and Founded in 2020 by El Houssaine CHAHBOUN."}</div></div>
        </div>
        <div className="col-md-2">
              
              <div className="full-width-container3">
              <svg xmlns="http://www.w3.org/2000/svg" width="214" height="214" viewBox="0 0 224 224" fill="none">
                <rect width="214" height="214" fill="none"/>
                <path d="M109.379 157.621C110.55 158.793 112.45 158.793 113.621 157.621L132.713 138.529C133.885 137.358 133.885 135.458 132.713 134.287C131.542 133.115 129.642 133.115 128.471 134.287L111.5 151.257L94.5294 134.287C93.3579 133.115 91.4584 133.115 90.2868 134.287C89.1152 135.458 89.1152 137.358 90.2868 138.529L109.379 157.621ZM108.5 70V155.5H114.5V70H108.5Z" fill="white"/>
              </svg>

                </div>
                
            </div>
      </div>
 
    </div>


  
       
        <div className="col text">
          <div className="titletext"style={{ color: '#000000',  textAlign: 'left', marginLeft:"3.5%",marginTop:50 }}>{"MATHEMATICS, DATASCIENCE & GRAPHICS"}</div>
          <div className="paratext"style={{ color: '#000000' ,  textAlign: 'left', marginLeft:"4%",marginTop:30, width: "70%"}}>{"In 2023, my journey through motion design ranged from crafting vibrant and captivating content for the University Graphic Design Club (UDC) to producing high-stakes, grand-scale videos and teasers for the university's most significant events. It was a year brimming with diverse and engaging projects that showcased the breadth of motion design's creative possibilities."}</div>
          <div className="paratext"style={{ color: '#000000' ,  textAlign: 'left', marginLeft:"4%",marginTop:30, width: "70%"}}>{"It’s been six years since Beyoncé released “Lemonade,” an album (andect."}</div>
        
        </div>
        <br></br>
        <FAQ />
        <br></br>
        <video style={{width:"95.2%", marginLeft:"2.4%"}}  controls autoPlay muted>
          <source  src="https://elx.onrender.com/udcvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="titletext"style={{ color: '#000000',  textAlign: 'left', marginLeft:"3.5%",marginTop:50 }}>{"CLUB MISSION"}</div>
   
        <div className="paratext"style={{ color: '#000000' ,  textAlign: 'left', marginLeft:"4%",marginTop:30, width: "70%"}}>{"It’s been six years since Beyoncé released “Lemonade,” an album (and film) on which she laid bare her marital strife, and subsequent reconciliation, with Jay-Z. The album was a feat of storytelling so ambitious that it made us reconsider what a modern pop star could accomplish. For years after its release, Beyoncé worked to expand the cultural footprint of “Lemonade,” first touring it in arenas around the world. In 2018, at Coachella, she blew it out into a baroque theatrical production honoring the legacy of Black collegiate marching bands. She followed that performance with a documentary about her preparation for the show, along with an accompanying live album called “Homecoming.” That year, she and Jay-Z released “Everything Is Love,” a joint album that was more a “Lemonade” victory lap than a new musical chapter. And yet the “Lemonade” era was so monumental that its long tail felt justified. Each iteration seemed to pump new fuel into the project."}</div>
        <div className="titletext"style={{ color: '#000000',  textAlign: 'left', marginLeft:"3.5%",marginTop:50 }}>{"CLUB ACTIVITIES"}</div>
        <br></br> <br></br>
        <img style={{width:"94.2%", marginLeft:"", outline: "4px solid rgb(0, 0, 0)"}} 
          source  src="https://elx.onrender.com/ezgif.com-gif-maker.gif" />
   
        
        <br></br> <br></br>
        
        <Parteners />
        <br></br>
        <br></br>
      
 
      
      </div>

    <Contactfooter />
      </div>
 
  );
}

export default Article;
