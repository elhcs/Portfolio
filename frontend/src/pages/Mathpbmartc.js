import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Project.css";
import Informationsdesigners from "../components/Informationsdesigners";
import "../components/Navbar";
import Contact from "../components/Contact";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setlight, setdark } from "../reducers/themeReducer";
import Contactfooter from "../components/Contactfooter";


const tlines = (
  <svg
    width="145"
    height="146"
    viewBox="0 0 145 146"
    fill="red"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M145 116.693V145.078H0V116.693H145Z" fill="red" />
    <path d="M145 56.7695V88.3082H0V56.7695H145Z" fill="red" />
    <path d="M145 0V28.3848H0V0H145Z" fill="red" />
  </svg>
);
function Project() {
   {
    return (
      <div className="App">
      <div className="App-body">
        

      <div className="full-width-container">
      <div className="row">
        <div className="col text">
          <div className="titletext"style={{ color: '#ffffff', padding: 7,width:'60%' }}>{"SEQUENCE CONVERGENCE PROBLEM"}</div>
          <div className="paratext"style={{ color: '#ffffff', width:'60%', padding: 90}}>{"while solving this problem a number of important math results have been used like Bolzano-Weierstrass theorem, Euclidian division, and basic sequence manipulation techniques."}</div>
        </div>
     


      </div>
      
    </div>
    <div className="col text">
          <div className="titletext"style={{ color: '#000000',  textAlign: 'left', marginLeft:50,marginTop:50 }}>{"Maths Problem:"}</div>
          <div className="paratext"style={{ color: '#000000' ,  textAlign: 'left', marginLeft:55,marginTop:30, width: 900}}>{"Maths has become a very natural thing for me to do, whether its for a school project, an internship or personal research, I always find myself having the most fun not only while solving math problems but also when i come up with interesting and legitimate math questions."}</div>
          <div className="paratext"style={{ color: '#000000' ,  textAlign: 'left', marginLeft:55,marginTop:30, width: 900}}>{"In the process i often come across very impressive results that make proving them become an obsession of mine for a while, and in order to value the efforts I put into solving each of these problems I decided to write it all down and share it somewhere online with other math enthusiasts."}</div>
          <div className="paratext"style={{ color: '#000000' ,  textAlign: 'left', marginLeft:55,marginTop:30, width: 900}}>{"So I decided to start Maths Problems I Enjoyed Solving Series, a series of detailed math proofs. If you’re reading this and you’re not me, then my idea has probably worked and I would like to thank you for making it this far."}<br></br><br></br> {"This is a personal project, meaning that despite the efforts I put into it, there will always be chances of error, and if you spot what appears to you to be an error or would like to contribute to this project in any way shape or form please feel free to reach out to me at : elhoussaine.chahboun@emines.um6p.ma ."}< /div>
          <br></br>
          <img style={{marginLeft:35}} src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*voJyWTHXi0m9c44DgrirVg.png" alt="Image" width="76%" align='left'  />
          <br></br>
          <div style={{ color: '#000000' ,  textAlign: 'left', marginLeft:45,marginTop:30, width: 900,fontWeight:999,fontSize:21}}>{"Intermediate results :"}</div>
                <br />
        <img style={{ marginLeft: 35 }} src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*jb0V05JXVxOn-BpqDMTQSQ.png" alt="Image" width="56%" align='left' />
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <div className="paratext" style={{ color: '#000000', textAlign: 'left', marginLeft: 55, marginTop: 30, width: 900 }}>
        {"For the first point it suffices to consider the case n ∈ N and m=1 ; In fact, (*) gives un+1 ≤ un + u1 by subtracting u1 from both sides and summing the obtained telescoping series, we find un ≤ (n + 1) ∗ u1 which gives un/n ≤ 2 , we can therefore deduce immediately from the fact that un is bounded below that un/n is bounded (from both sides)" }<br /> {"Let M ∈ R, we have :"}
        </div>
        <br />
        <img style={{ marginLeft: 45 }} src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*MI220MmRUujrkt92RtDP-g.png" alt="Image" width="56%" align='left' />
        <br /> <br /> 
        <div className="paratext"style={{ color: '#000000' ,  textAlign: 'left', marginLeft:55,marginTop:30, width: 900}}>{"The third point is immediate. According to the first point there exist an M verifiying for all n :"}</div>
        <br />
        <img style={{ marginLeft: -290 }} src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*-tqWN2tXd2RbWcpAvlXyFw.png" alt="Image" width="56%" align='left' />
        <br /> <br /> <br /> 
        <div className="paratext"style={{ color: '#000000' ,  textAlign: 'left', marginLeft:55,marginTop:30, width: 900}}>{"therefore the sequence un + nM is positive on the one hand and verifies (*) on the other hand and we also have according to the 3rd point that the result (the statement) is true for un if and only if it is for un + nM"}<br /> {"Even if, by connsidering the transformation above we can suppose that un is positive."}<br /> {"In the following, Without loss of generality, we can say that (un ≥ 0)."}</div>
        <div style={{ color: '#000000' ,  textAlign: 'left', marginLeft:45,marginTop:30, width: 900,fontWeight:999,fontSize:21}}>{"Proof:"}</div>
        <div className="paratext"style={{ color: '#000000' ,  textAlign: 'left', marginLeft:55,marginTop:30, width: 900}}>{"According to the preliminary un/n is bounded and therefore according to the Bolzano-Weierstrass theorem the sequence does have an accumulation point (Subsequential limit), the set of all its accumulation points is therfore non empty and besides it is below bounded ; let’s note l : the infimum of this set."}<br /> {"We can easily proove by absurd that l is an accumulation point and that starting from a certain rang n un/n ≥ l"}<br /> <br /> {"(I’ll let the curious ones handle this one)"}<br /> <br /> {"suppose uφ(m) converges into l and let n = φ(m) ∗ q{m,n} + r{m,n} the euclidian divisioin of n ≥ φ(m) by φ(m). (for the sake of simplicity q{m,n} and r{m,n} will be noted respectively q and r)"}</div><br /> 
        <br />
        <img style={{ marginLeft: 0 }} src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*o-ukYXKHQTJHgK6VUnH0Sg.png" alt="Image" width="56%" align='left' />
        <br /> <br /> <br /> <br /> 
        <div className="paratext"style={{ color: '#000000',  textAlign: 'left', marginLeft:50,marginTop:50,width: 900 }}>{"Take m such that :"}</div>
        <br />
        <img style={{ marginLeft: 0 }} src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*kSalvfGDvVOpASnIAP9Utw.png" alt="Image" width="56%" align='left' />
        <br /> <br /> <br /> <br /> 
        <div className="paratext"style={{ color: '#000000',  textAlign: 'left', marginLeft:50,marginTop:50,width: 900 }}>{"We have :"}</div>
        <br />
        <img style={{ marginLeft: 0 }} src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*pfdt58lePv310o7gd_YMpw.png" alt="Image" width="56%" align='left' />
        <br /> <br /> <br /> <br /> 
        <div className="paratext"style={{ color: '#000000',  textAlign: 'left', marginLeft:50,marginTop:50,width: 900 }}>{"and therefore for n ≥ Max[ε/(2.M.φ(m)), φ(m)] we get :"}</div>
        <br />
        <img style={{ marginLeft: 0 }} src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*HEtAiYjMzqP_vpIBDlAuLw.png" alt="Image" width="56%" align='left' />
        <br /> <br /> <br /> <br /> 


        </div>
        <br></br><br></br><br></br>
 
                
        <Contactfooter />
      </div>
    

    </div>


  
    );
  }  {
    return <div>Still loading</div>;
  }
}

export default Project;
