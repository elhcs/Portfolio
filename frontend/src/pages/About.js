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
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/resume.pdf'; // Path to your resume.pdf in the public directory
    link.download = 'resume.pdf';
    link.click();
  }

  return (
    <div className="App">
      <div className="App-body">
        

      <div className="full-width-container">
      <div className="row">
        <div className="col text">
          <div className="titletext"style={{ color: '#ffffff' }}>{"ABOUT EL HOUSSAINE CHAHBOUN"}</div>
          <div className="paratext"style={{ color: '#ffffff' }}>{"I am a final year engineering student at EMINES School of Industrial Management with a special interest for Data Science and Machine Learning."}</div>
        </div>
        <div className="col desc">
        <img src="./image.png" alt="Description of the image" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="full-width-container2">
            <div className="titletext2"style={{ color: '#000000' }}>{"My Resume"}</div>
            <div className="paratext2"style={{ color: '#000000',width:"29%" }}>{"Click the down arrow button to download my resume in PDF format."}</div></div>
        </div>
        <div className="col-md-2">
              
              <div className="full-width-container3" onClick={handleDownload}>
              <svg xmlns="http://www.w3.org/2000/svg" width="214" height="214" viewBox="0 0 224 224" fill="none">
                <rect width="214" height="214" fill="none"/>
                <path d="M109.379 157.621C110.55 158.793 112.45 158.793 113.621 157.621L132.713 138.529C133.885 137.358 133.885 135.458 132.713 134.287C131.542 133.115 129.642 133.115 128.471 134.287L111.5 151.257L94.5294 134.287C93.3579 133.115 91.4584 133.115 90.2868 134.287C89.1152 135.458 89.1152 137.358 90.2868 138.529L109.379 157.621ZM108.5 70V155.5H114.5V70H108.5Z" fill="white"/>
              </svg>

              </div></div></div>    
                
      

 
 
 
    </div>

          <div className="titletext"style={{ color: '#000000',  textAlign: 'left', marginLeft:"3.5%",marginTop:50, width:'90%' }}>{"COMPUTER GRAPHICS & ME"}</div>
          <div className="paratext"style={{ color: '#000000' ,  textAlign: 'left', marginLeft:"4%",marginTop:30, width: "80%"}}>{"From a very young age, my fascination with computer graphics was apparent. While I played video games just as much as the average person, or even less, what intrigued me most about video games and Disney animation was the intricate process behind their creation. I marveled at how they brought digital 3D objects to life, particularly Disney's ability to achieve such realism."}<br></br><br></br>{"I often found myself engrossed in these thoughts while playing games or watching CGI animations, sometimes prioritizing the technical aspects over the entertainment itself. I delved into a plethora of 3D software, exploring various tools like Unity and Unreal game engines, as well as 3D modeling, animation software such as Blender or Maya, and even specialized simulation programs like Houdini 3D or Reflow, not to mention diving into ray tracing with software like Octane Render and the open-source PBRT."}<br></br><br></br>{"By the age of 15, I had established an active blog showcasing my 3D projects—from models and materials to my fascination with fluid simulations, whether manipulating liquid or smoke. I devoted considerable time to tweaking physical properties to observe their effects on my simulations. During that time, I created several video tutorials, which have garnered thousands of views and remain accessible online through my blog. To date, the blog has attracted over 20,000 visitors worldwide, despite my decision to pause its activities in 2018 to concentrate fully on my studies."}<br></br><br></br>{"Ah, about that blog? Well, I'd totally share the link, but let's just say my younger self's English skills were, uh, a work in progress. Decided to spare you the cringe-worthy grammar fails and keep it under wraps."}</div>
          <br></br><br></br><h4 style={{textAlign:'left',marginLeft:'4%',marginBottom:'-4%'}}>Some renders & simulations by me:</h4>
         <img style={{width:"24.2%",marginLeft:"", outline: "4px solid rgb(0, 0, 0)"}} 
          source  src="13735088_1056250914466066_1985454792110117529_o.jpg" /><img style={{width:"24.2%",marginLeft:"", outline: "4px solid rgb(0, 0, 0)"}} 
          source  src="57390018_2192175747540238_753468165731647488_n.jpg" /><img style={{width:"24.2%",marginLeft:"", outline: "4px solid rgb(0, 0, 0)"}} 
          source  src="240866183_4273649729392819_1744108151579240805_n.jpg" /><img style={{width:"24.2%",marginLeft:"", outline: "4px solid rgb(0, 0, 0)"}} 
          source  src="57882584_2192146047543208_7601226068124499968_n.jpg" />
   
        
  
       
          <div className="titletext"style={{ color: '#000000',  textAlign: 'left', marginLeft:"3.5%",marginTop:50, width:'90%' }}>{"THE PRESTIGIOUS MOULAY YOUSSEF HIGHER SCHOOL PREPARATORY CLASSES"}</div>
          <div className="paratext"style={{ color: '#000000' ,  textAlign: 'left', marginLeft:"4%",marginTop:30, width: "80%"}}>{"After excelling in my baccalaureate degree in math and sciences, I gained admission to the esteemed Moulay Youssef Higher School preparatory classes. Situated directly next to the capital's royal castle. Over two rigorous years at Moulay Youssef, I undertook an intensive curriculum covering mathematics, physics, computer science, and engineering. Aligned with France's education system, this program is renowned globally for its demanding nature. During my initial year, I achieved top rankings in mathematics for three consecutive years, earning a place in a highly selective class called MPSTAR (Maths Physics Star) comprised of exceptional students from across the country."}</div>
          <div className="paratext"style={{ color: '#000000' ,  textAlign: 'left', marginLeft:"4%",marginTop:30, width: "70%"}}>{""}</div>
         
        <br></br> <br></br>
        <img style={{width:"44.2%",marginRight:'5%', outline: "4px solid rgb(0, 0, 0)"}} 
          source  src="323728844_3210235322620335_8663680062689233439_n.jpg" />
    <img style={{width:"44.2%", outline: "4px solid rgb(0, 0, 0)"}} 
          source  src="323818999_1158027298187733_5547904797577858900_n.jpg" />
   
        
        <br></br> <br></br>
        <div className="paratext"style={{ color: '#000000' ,  textAlign: 'left', marginLeft:"4%",marginTop:30, width: "90%"}}>{""}</div>

 



        <div className="titletext"style={{ color: '#000000',  textAlign: 'left', marginLeft:"3.5%",marginTop:50 }}>{"MOHAMED VI POLYTECHNIC UNIVERSITY"}</div>
   
        <div className="paratext"style={{ color: '#000000' ,  textAlign: 'left', marginLeft:"4%",marginTop:30, width: "80%"}}>{"Following my successful tenure at this esteemed institution, I secured admission to the esteemed Mohamed VI Polytechnic University, specifically at the School of Engineering - EMINES Industrial Management School. This transition allowed me to apply the extensive theoretical knowledge gained during preparatory classes to real-life and highly practical scenarios. At EMINES, spanning from robotics to biomedical engineering, optimization, and even quantum mechanics, I gained comprehensive exposure. This education equipped me with the tools to confront industry challenges, fostering innovative solutions that seamlessly merge theoretical understanding with practical applications."}</div>
       <br></br>
       <img style={{width:"30.2%",marginRight:'1%',height:'8%',  outline: "4px solid rgb(0, 0, 0)"}} 
          source  src="403978058_1825602267896647_6074929059360318198_n.webp" />
    <img style={{width:"30.2%",marginRight:'1%', outline: "4px solid rgb(0, 0, 0)"}} 
          source  src="403802824_1426302501281478_4361830792942459783_n.webp" />
    <img style={{width:"30.2%", outline: "4px solid rgb(0, 0, 0)"}} 
          source  src="403840818_762485429040993_2426155338349760533_n.webp" />
          
          <div className="titletext"style={{ color: '#000000',  textAlign: 'left', marginLeft:"3.5%",marginTop:50 }}>{"INTERNATIONAL EXPERIENCE"}</div>
        
        <div className="paratext"style={{ color: '#000000' ,  textAlign: 'left', marginLeft:"4%",marginTop:30, width: "80%"}}>{"During my curriculum at EMINES, the provision for a research internship abroad has been a significant opportunity that I highly value. This experience has offered me numerous opportunities where I've engaged in compelling projects within my field of interest. Additionally, it provided me with the chance to connect with diverse individuals, both within and outside of my lab, fostering invaluable connections and experiences."}</div>

 <br></br><br></br>
        <img style={{width:"94.2%",marginLeft:"", outline: "4px solid rgb(0, 0, 0)"}} 
          source  src="e74267a5-c525-4166-b287-2ee79356181d.JPG" />
   
        
        <br></br> <br></br>
        
        <Parteners />
        <br></br>
        <br></br>
      
 
      
  

   <Contactfooter />
      </div>
    </div>
  );
}

export default Article;
