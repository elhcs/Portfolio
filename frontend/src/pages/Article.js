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
            <div className="titletext2"style={{ color: '#000000' }}>{"Design Club"}</div>
            <div className="paratext2"style={{ color: '#000000' }}>{"I am president and founder of UDC, UM6P's Design Club, scroll through exciting projects i got to work on as a club president and member. "}</div></div>
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
          <div className="titletext"style={{ color: '#000000',  textAlign: 'left', marginLeft:"3.5%",marginTop:50 }}>{"FROM PERSONAL PROJECTS TO UM6P'S BIGGEST EVENTS"}</div>
          <div className="paratext"style={{ color: '#000000' ,  textAlign: 'left', marginLeft:"4%",marginTop:30, width: "70%"}}>{"In 2023, my journey through motion design ranged from crafting vibrant and captivating content for the University Graphic Design Club (UDC) to producing high-stakes, grand-scale videos and teasers for the university's most significant events. It was a year brimming with diverse and engaging projects that showcased the breadth of motion design's creative possibilities."}</div>
          <div className="paratext"style={{ color: '#000000' ,  textAlign: 'left', marginLeft:"4%",marginTop:30, width: "70%"}}>{"In the same year, a whirlwind of events unfolded, all centered around Motion Design. It proved to be an exhilarating period, marked by the official launch and remarkable success of my university's graphic design club. We not only cultivated a thriving community of graphic designers and enthusiasts but also exceeded our expectations by conducting engaging design workshops for students. Amidst these achievements, another pivotal moment unfolded at SOLE's office, where I formalized the graphic design club. Simultaneously, the university's Department for Student Affairs presented me with a valuable and lucratively rewarding student job opportunity. Joining SOLE's graphic design team opened the door to a plethora of projects, and I've since crafted numerous graphic and motion design visuals. Highlights include designing teaser videos for major university events featuring luminaries like L'ARTISTE, a North African superstar, and hosting concerts for prominent artists such as Tagne and 7ari."}</div>
        
        </div>
        <br></br>
        <FAQ />
  
        <Blackbords />
        <video style={{width:"95.2%", marginLeft:"2.4%"}}  controls autoPlay muted>
          <source  src="https://elx.onrender.com/udcvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
                <div className="titletext"style={{ color: '#000000',  textAlign: 'left', marginLeft:"3.5%",marginTop:50 }}>{"ABOUT THE CLUB"}</div>
   
        <div className="paratext"style={{ color: '#000000' ,  textAlign: 'left', marginLeft:"4%",marginTop:30, width: "70%"}}>{"In the vibrant community of our university, the Graphic Design Club stands as a dynamic hub for creativity and collaboration. Established with a passion for visual storytelling and design excellence, our club has quickly become a haven for both seasoned graphic designers and budding enthusiasts. Throughout the year, we've embarked on an exciting journey, organizing engaging workshops that not only hone design skills but also foster a sense of artistic community. Our club is not just about creating stunning visuals; it's about sharing knowledge, inspiring creativity, and pushing the boundaries of design innovation. Join us as we explore the vast realm of graphic design, where every stroke and pixel has the power to convey a compelling message. Let's transform ideas into impactful visuals and celebrate the artistry that lies at the intersection of imagination and design."}</div>
        <div className="titletext"style={{ color: '#000000',  textAlign: 'left', marginLeft:"3.5%",marginTop:50 ,width: "70%"}}>{"CLUB ACTIVITIES"}</div>
        <br></br> <br></br>
        <img style={{width:"94.2%", marginLeft:"", outline: "4px solid rgb(0, 0, 0)"}} 
          source  src="https://elx.onrender.com/ezgif.com-gif-maker.gif" />
        <br></br><br></br>
        <div className="titletext"style={{ color: '#000000',  textAlign: 'left', marginLeft:"3.5%",marginTop:50 }}>{"XIBITION EVENT"}</div>
        <div className="paratext"style={{ color: '#000000' ,  textAlign: 'left', marginLeft:"4%",marginTop:30, width: "88%"}}>{"Undoubtedly, XIBITION stands as the university's paramount social event, drawing students and clubs together in a celebration of creativity and community. For the last two editions, I had the distinct honor of crafting the visual identity for these remarkable gatherings. Beyond designing captivating motion videos and teasers, I also assumed the role of a club president, contributing actively to the success of the event. Being present during XIBITION allowed me to showcase not only my work but also the incredible creations that emerged from our club's support and workshops. The event buzzed with excitement, and the response was overwhelming—I received a multitude of applications from individuals eager to join our creative community. Here's a glimpse into the event and some of the visual elements I had the privilege of creating for this unforgettable occasion."}</div>

        <br></br>
        <iframe width="1444" height="815" src="https://www.youtube.com/embed/LO6xnL0Sme8?si=-itctKkOuuTttUcc&amp;start=4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <br></br><br></br>
        <iframe width="1444" height="815" src="https://www.youtube.com/embed/48_0llaGPCw?si=SHaWYLmW7O_gB30M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <br></br> <br></br>
        <iframe width="1444" height="815" src="https://www.youtube.com/embed/Pek5COBvRU4?si=YzfKHtbbxB39YrPp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
