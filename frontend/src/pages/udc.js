import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Project.css";
import Informationsdesigners from "../components/Informationsdesigners";
import "../components/Navbar";
import Contact from "../components/Contact";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setlight, setdark } from "../reducers/themeReducer";
import image from "./394709091_359688783151169_5143872337014891556_n.mp4";
import Footer from "../components/footer_new";
import styles from '../components/Articlecomp.module.css';
import Card from "../components/Card";
import Blackbords from "../components/Blackbords";
import NewReleases from "../components/articlescomponent.js";
import Articlecomp from "../components/articlescomponent";



const instagramURLs = [
  "https://www.instagram.com/reel/CgkZG9nDgaN/",
  "https://www.instagram.com/p/ChLVO2rjilt/",
  "https://www.instagram.com/p/CRHtD4_HbiF/",
  "https://www.instagram.com/p/CTGBzlgjGQD/"
];



const cardsData = [
  {
    title: "Nezar RADI",
    description: "Monetizing students' creativity, UM6P's first Graphic Design club: a fresh alternative to traditional design agencies.",
    tag: "VICE PRESIDENT",
    imageUrl: "nezar.png",
    isFeatured: true,
    article: "/udc",
  },
  {
    title: "El Houssaine CHAHBOUN",
    description: "Gao Hang is an artist who seamlessly blends the contemporary with the classic.",
    tag: "PRESIDENT",
    imageUrl: "testid.png",
    isFeatured: true,
    article: "/project/66718936219f0d12d16680cf",
  },
  {
    title: "ANAS QARQOURI",
    description: "An introduction to tracking objects across frames in video using the Tracking by Detection approach.",
    tag: "TREASURER",
    imageUrl: "anas.png",
    isFeatured: true,
    article: "/project/644310db0e626d1b2192ea40",
  },
  {
    title: "ABDELLAH EMINES",
    description: "Training LSTM and Transformer models for generating music sequences.",
    tag: "COMMUNICATION CHAIR",
    imageUrl: "abdo.png",
    isFeatured: true,
    article: "/biomed",
  },
  {
    title: "CHAIMAA ",
    description: "Houssaine the frog is stunned by technology, turns his screen off, and realizes it's all under his control.",
    tag: "PARTNERSHIP CHAIR",
    imageUrl: "chaimaa.png",
    isFeatured: true,
    article: "/shortfilm",
  },
  {
    title: "Souheil GNANE",
    description: "MLYSF is a clothing brand design concept inspired by Moulay Youssef CPGE.",
    tag: "MEMBERSHIP CHAIR",
    imageUrl: "1715617518905-modified.jpeg",
    isFeatured: true,
    article: "/clothing",
  },
];
function UdcProject() {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageList, setImageList] = useState([
    "elxdesign.gif"
    // Add more image URLs as needed
  ]);

  const textElements = [
    ["UM6P UNIVERSITY DESIGN CLUB", "Monetizing students creativity, UM6P's first Graphic Design club: a fresh alternative to traditional design agencies.."]

  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textElements.length);
    }, 12000); // Changes text every 3000 milliseconds (3 seconds)

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  const navigateTo = index => {
    setCurrentIndex(index);
  };
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setlight());
    // Load Instagram embed script
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);
  

 {
  
    return (
      <div>
       <div className={styles.container}>
        <div>
        <div >
            <div className={styles.topText}>
              <h1 style={{  marginBottom:"10%", margin:"14%", color:"white", marginTop:"17%"}}>{textElements[currentIndex][0]}</h1>
              <p style={{  margin:"14%", color:"white"}}>{textElements[currentIndex][1]}</p>
            </div>
            {/* <div className={styles.bottomText}>
              <p>{textElements[currentIndex][1]}</p>
            </div> */}
          </div>
          <div className={styles.indicatorContainer}>
            {textElements.map((_, index) => (
              <div
                key={index}
                onClick={() => navigateTo(index)}
                className={`${styles.indicator} ${index === currentIndex ? styles.indicatorActive : ''}`}
              ></div>
            ))}
          </div>
        </div>
        <div>

          <img src={imageList[currentIndex]} style={{ width:'100%'}} alt="Placeholder" />
        </div>
      </div>
        {/* Conditional rendering based on isMobile state */}
     <div className={`${styles.additionalColumnsContainer}`}>
        


        </div>


           <section className={styles.newReleases}>
      <header className={styles.header}>

        <h2 className={styles.headertitle}>Our story</h2>
        <a href="/stories" className={styles.allStoriesLink}>View all members</a>
             </header>
             <p className={styles.headertitle}>Founded at the exciting Mohammed VI Polytechnic University in 2023, the University Design Club (UDC), previously ELX, began as a small initiative by a group of passionate design enthusiasts led by El Houssaine CHAHBOUN, our first President. Inspired by the need for a collaborative space where creativity, innovation, and learning could thrive, UDC was established to empower students to turn their design dreams into reality.</p>
      
            
    </section>
    <video src={"https://elx.onrender.com/udcvideo.mp4"}className={styles.unidesclub} autoPlay muted loop controls/>
    <section className={styles.newReleases}>
      <header className={styles.header}>

        <h2 className={styles.headertitle}>Our Purpose</h2>
                    </header>
             <p className={styles.headertitle}>Design is more than aesthetics—it's a tool for solving problems, expressing ideas, and shaping the future. UDC exists to provide a platform for students across all disciplines to explore, develop, and showcase their design skills. By connecting aspiring designers with resources, mentorship, and real-world opportunities, we aim to foster a community that celebrates creativity and innovation.</p>
      
            
    </section>
      <section className={styles.newReleases}>
      <header className={styles.header}>

        <h2 className={styles.headertitle}>Club Members</h2>
        <a href="/stories" className={styles.allStoriesLink}>View all members</a>
      </header>
      <div className={styles.cardContainer}>
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
    <section className={styles.newReleases}>
        <header className={styles.header}>
          <h2 className={styles.headertitle}>University Design Club</h2>
          <a href="/stories" className={styles.allStoriesLink}> Join us </a>
        </header>
      </section> <video src={"https://elx.onrender.com/udcvideo.mp4"}className={styles.unidesclub} autoPlay muted loop controls/>

      <Blackbords />
      <section className={styles.newReleases}>
      <header className={styles.header}>

        <h2 className={styles.headertitle}>Why UDC Matters</h2>
        <a href="/stories" className={styles.allStoriesLink}>Sponser Us</a>
             </header>
             <p className={styles.headertitle}>In an era where design is shaping everything from technology to society, UDC plays a crucial role in bridging the gap between academic knowledge and practical application. What sets UDC apart is its ability to transform students’ hobbies into lucrative opportunities. By leveraging their skills to contribute to projects of all scales—from assisting other university clubs with their branding to designing for major campus events and department initiatives—our members gain invaluable experience while creating meaningful, professional-grade work.</p>
      
            
    </section>

    <section className={styles.newReleases}>
      <header className={styles.header}>

        <h2 className={styles.headertitle}>We're Online</h2>
        <a href="https://www.instagram.com/elx.design/" className={styles.allStoriesLink}>Follow Us</a>
             </header>      
            
    </section>

    <div style={gridContainerStyle}>
          {instagramURLs.map((url, index) => (
            <blockquote
              key={index}
              className="instagram-media"
              data-instgrm-permalink={url}
              data-instgrm-version="14"
              style={gridItemStyle}
            ></blockquote>
          ))}
        </div>

        <section className={styles.newReleases}>
      <header className={styles.header}>

        <h2 className={styles.headertitle}>Join The Club</h2>
        <a href="/stories" className={styles.allStoriesLink}>Join Us</a>
             </header>
             <p className={styles.headertitle}>Whether you're an experienced designer or just starting your creative journey, UDC welcomes you. Together, we’re shaping the future of design and turning passions into professions.</p>

      
            
    </section>
    <Footer />
    

    </div>


  
    );
  } 
}
// CSS Styles for the matrix layout
const gridContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "20px",
  padding: "20px",
  marginTop:"-20px",
  marginLeft:"25px"
};

const gridItemStyle = {
  maxWidth: "100%",
};



export default UdcProject;
