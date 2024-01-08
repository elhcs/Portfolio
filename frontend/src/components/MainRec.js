import React,{useState} from "react";
import "./MainRec.css";
import "./MainLogo";
import MainLogo from "./MainLogo";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



function MainRec() {

    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = process.env.PUBLIC_URL + '/resume.pdf'; // Path to your resume.pdf in the public directory
      link.download = 'resume.pdf';
      link.click();
    }
  
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const carouselContent = [
    {
      title: "MATHEMATICS, DATASCIENCE & GRAPHICS",
      description: "Welcome to El Houssaine's Portfolio! Explore below to discover the exciting projects I've worked on and the articles I've written.",
      imageUrl: "https://i.ibb.co/sKQw6jd/Frame-6802.png" // Image URL for slide 1
    },
    {
      title: "MOTION DESIGN SHOWREEL",
      description: "In 2023, I created diverse motion design projects, from club content to high-profile event videos, showcasing the broad creative scope of this field.",
      imageUrl: "https://i.ibb.co/pJLyjpM/ezgif-com-video-to-gif-converted.gif" // Image URL for slide 2
    },
    // Add more objects with slide content and corresponding image URLs
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlideIndex(newIndex);
    }
  };

  const handleSlideClick = (index) => {
    setCurrentSlideIndex(index);
  };

  return (
    <div className="full-width-container">
      <div className="row">
        <div className="col-md-6">
          {/* Right column with carousel */}
          <Slider {...settings}>
            {carouselContent.map((item, index) => (
              <div key={index} onClick={() => handleSlideClick(index)}>
                <div className="titletext" style={{ color: '#ffffff',width:'82%' }}>
                  {item.title}
                </div>
                <br />
                <div className="paratext" style={{ color: '#ffffff', padding: 40, width: '60%' }}>
                  {item.description}
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="col-md-6">
          {/* Left column with corresponding images */}
          <div className="right-column">
            {carouselContent.map((item, index) => (
              <div key={index} style={{ display: index === currentSlideIndex ? 'block' : 'none' }}>
                <img src={item.imageUrl} alt={`Slide ${index + 1}`} className="img-fluid" />
              </div>
              
            ))}
            
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

                </div>
                
            </div>
      </div>
 

      </div>
    </div>
  );
};

export default MainRec;