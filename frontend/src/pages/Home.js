import "./Home.css";
import Contact from "../components/Contact";
import Feed from "../components/Feed";
import Articles from "../components/Articles";
import Informations from "../components/Informations";
import MainRec from "../components/MainRec";
import Mathpbm from "../components/Mathpbm";
import "../components/Navbar";
import News from "../components/News";
import Parteners from "../components/Parteners";
import FAQ from "../components/FAQ";
import Blackbords from "../components/Blackbords";
import { useDispatch } from "react-redux";
import { setlight, setdark } from "../reducers/themeReducer";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import shortyy from "./394709091_359688783151169_5143872337014891556_n-ezgif.com-video-to-gif-converter.gif";
import Contactfooter from "../components/Contactfooter";
import Modal from '../components/Modal';
import React, { useState } from 'react';
function Home() {
   


    
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Set a timeout to show the modal after 45 seconds
    const timeoutId = setTimeout(() => {
      setShowModal(true);
    }, 5000); // 15 seconds in milliseconds

    // Clear the timeout if the component unmounts or the modal is shown earlier
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures the effect runs only once



  
  //const HOME_PROJECT_NUMBER = 4;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setlight());
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      
    });
  };
  let Styles = {
    color: "white",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "black",
  };
  return (
    
    <div className="App">
      <div className="App-body">
        <MainRec />
        <br></br>

        <br></br>
      {showModal && <Modal
        isOpen={isModalOpen}
        handleClose={handleCloseModal}
        message="Hello, this is EL Houssaine! Thank you for visiting my portfolio. I'd like to apologize in advance for any delay in loading the projects and articles. I am actively exploring better database service providers to address this issue. Your understanding is greatly appreciated. Thank you!"
      />}
        <FAQ />

      
        
        <Blackbords />
        <br></br>


      
      <NavLink to={"/shortfilm"}>
       
    <div className="container">

      <div className="row">
        <div className="col text">
          <div className="titletext"style={{ color: '#ffffff' }}>{"A SHORT FILM STARRING ME" }<br/>{" AS A FROG"}</div>
         <br></br> <div className="paratext"style={{ color: '#ffffff',width:"70%" }}>{"Houssaine the frog is stunned by technology, which uses increasingly invasive techniques to get  attention. He turns his screen off in an attempt to escape and connect with real life, only to realize it's all under his control."}</div>
        </div>
        <div className="col desc">
        <div
              style={{
                backgroundImage: `url(${shortyy})`, // Use the imported image variable here
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '730px',
                width: 'auto',
              }}
              className="col desc"
            ></div>        </div>
             
      </div>
      </div>
      </NavLink>
      <br></br><br></br>




      <Articles number="5" />
      <br></br>
      
      <div className="load-more-container">
      <div className="left-column">
        <p>Load more projects</p>
      </div>
      <div className="right-column">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="214"
          height="214"
          viewBox="0 0 224 224"
          fill="none"
        >
          <rect width="214" height="214" fill="none" />
          <path
            d="M109.379 157.621C110.55 158.793 112.45 158.793 113.621 157.621L132.713 138.529C133.885 137.358 133.885 135.458 132.713 134.287C131.542 133.115 129.642 133.115 128.471 134.287L111.5 151.257L94.5294 134.287C93.3579 133.115 91.4584 133.115 90.2868 134.287C89.1152 135.458 89.1152 137.358 90.2868 138.529L109.379 157.621ZM108.5 70V155.5H114.5V70H108.5Z"
            fill="white"
          />
        </svg>
      </div>
    </div>

    <br></br>
        <div className="row">
        <div className="col">
        
            <div className="titletext2"style={{ color: '#000000' }}>{"Articles & more"}</div>
            <div className="paratext2"style={{ color: '#000000' }}>{"A curated collection of articles that I've written, along with school projects that I take great pride in. "}</div></div>
        
      </div>
                
       <br></br><br></br><br></br>
        <Mathpbm />
        <NavLink to={"/biomed"}>
      <div
        className="RecContent container full-height d-flex flex-column"
        style={Styles}
      >
        <div style={{width:"53"}} className="row title__RecContent">{"Biomedical Engineering Project"}</div>
        <div className="row mt-auto">
          <div className="col subtitle__RecContent">{"The surfactant diffusion at the alveolar surface, a crucial phenomenon in the respiratory process."}</div>
          <div className="col subtitle__RecContent">
            {}
          </div>
          <div className="col subtitle__RecContent">
            {}
          </div>
        </div>
      </div>
      </NavLink>

        <Feed number="5"/>

        <div className="load-more-container">
      <div className="left-column">
        <p>Load more articles</p>
      </div>
      <div className="right-column">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="214"
          height="214"
          viewBox="0 0 224 224"
          fill="none"
        >
          <rect width="214" height="214" fill="none" />
          <path
            d="M109.379 157.621C110.55 158.793 112.45 158.793 113.621 157.621L132.713 138.529C133.885 137.358 133.885 135.458 132.713 134.287C131.542 133.115 129.642 133.115 128.471 134.287L111.5 151.257L94.5294 134.287C93.3579 133.115 91.4584 133.115 90.2868 134.287C89.1152 135.458 89.1152 137.358 90.2868 138.529L109.379 157.621ZM108.5 70V155.5H114.5V70H108.5Z"
            fill="white"
          />
        </svg>
      </div>
    </div>

        <br></br><br></br>
        <div className="row">
        <div className="col">
          
            <div className="titletext2"style={{ color: '#000000' }}>{"About me"}</div>
            <div className="paratext2"style={{ color: '#000000' }}>{"Explore details about my academic journey and interests by clicking on the image below. "}</div></div>
        
        <div className="col-md-4">
              
             </div></div>
                
       <br></br><br></br>
       <NavLink to="/about">
        <Parteners /></NavLink>
        
        <br></br>
       
       
         <br></br><br></br><br></br>
              

            <Contactfooter />
      </div>
    </div>
  );
}

export default Home;
