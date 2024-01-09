import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Project.css";
import Informationsdesigners from "../components/Informationsdesigners";
import "../components/Navbar";
import Contact from "../components/Contact";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setlight, setdark } from "../reducers/themeReducer";
import { NavLink } from "react-router-dom";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Choose a style you prefer
import Contactfooter from "../components/Contactfooter";


const customVscDarkPlus = {
  ...vscDarkPlus,
  'code[class*="language-"]': {
    ...vscDarkPlus['code[class*="language-"]'],
    color: '#f8f8f2', // Set text color for code
    backgroundColor: '#282a36', // Set background color for code
  },
  // You can customize other token colors as needed
  // For example, to modify the color for comments:
  'token.comment': {
    ...vscDarkPlus['token.comment'],
    color: '#6272a4',
  },
};

const CppCodeSnippet2 = () => {
  const codeString = `    
    class LightSampler {
    private:
        std::vector<Light> lights;
        Camera camera;
    
    public:
        LightSampler(Camera cam) : camera(cam) {}
    
        void addLight(Light light) {
            lights.push_back(light);
        }
    
        Light* prioritizeLights() {
            if (lights.empty()) {
                return nullptr; // No lights available
            }
    
            Light* bestLight = &lights[0];
            double bestAngle = getAngle(*bestLight);
    
            // Find the light with the most favorable view angle concerning the camera
            for (size_t i = 1; i < lights.size(); ++i) {
                double currentAngle = getAngle(lights[i]);
    
                if (currentAngle > bestAngle) {
                    bestAngle = currentAngle;
                    bestLight = &lights[i];
                }
            }
    
            return bestLight;
        }
    
        double getAngle(const Light& light) {
            // Calculate the angle of the light concerning the camera
            // (This is a placeholder for the actual calculation logic)
            // Here, let's assume a simple calculation based on the distance from the camera
            double distance = std::sqrt(std::pow(light.x, 2) + std::pow(light.y, 2));
            return 1.0 / distance; // Inverse relation with distance as a simple angle representation
        }
    };
    
   
  `
;






return (
  <div>
    <SyntaxHighlighter language="cpp" style={customVscDarkPlus}>
      {codeString}
    </SyntaxHighlighter>
  </div>
);
};


const CppCodeSnippet = () => {
  const codeString = `namespace pbrt {
    // UniformLightSampler Definition
    class UniformLightSampler {
      public:
        // UniformLightSampler Public Methods
        UniformLightSampler(pstd::span<const Light> lights, Allocator alloc)
            : lights(lights.begin(), lights.end(), alloc) {}

        PBRT_CPU_GPU
        pstd::optional<SampledLight> Sample(Float u) const {
            if (lights.empty())
                return {};
            int lightIndex = std::min<int>(u * lights.size(), lights.size() - 1);
            return SampledLight{lights[lightIndex], 1.f / lights.size()};
        }     
        class Light {
          constructor(x, y) {
            this.x = x;
            this.y = y;
          }
          // Add any other necessary methods or properties for the Light class
        }   
}`
;






return (
  <div>
    <SyntaxHighlighter language="cpp" style={customVscDarkPlus}>
      {codeString}
    </SyntaxHighlighter>
  </div>
);
};


const CppCodeSnippet3 = () => {
  const codeString = `
  class LightSampler {
    private:
        std::vector<Light> lights;  
    public:
        void addLight(Light light) {
            lights.push_back(light);
        }
        Light* getBestAngleViewForX(double x) {
            std::vector<Light*> lightsAtX;
    
            // Collect all lights at the specified x-coordinate
            for (auto& light : lights) {
                if (std::abs(light.x - x) < std::numeric_limits<double>::epsilon()) {
                    lightsAtX.push_back(&light);
                }
            }   
            if (lightsAtX.empty()) {
                return nullptr; // No lights found at this x-coordinate
            }
            // Add logic here to determine the light with the best angle view among lightsAtX
        }
    
        Light* sampleClosestLightAtX(double x) {
            Light* bestAngleLight = getBestAngleViewForX(x);
    
            if (!bestAngleLight) {
                return nullptr; // No lights found at this x-coordinate
            }
            // Find the closest light to the best angle view point for abscissa 'x'
            Light* closestLight = nullptr;
            double closestDistance = std::numeric_limits<double>::max();
    
            for (auto& light : lights) {
                if (std::abs(light.x - x) < std::numeric_limits<double>::epsilon() && &light != bestAngleLight) {
                    double distance = std::sqrt(std::pow(light.x - bestAngleLight->x, 2) + std::pow(light.y - bestAngleLight->y, 2));
    
                    if (distance < closestDistance) {
                        closestDistance = distance;
                        closestLight = &light;
                    }
                }
            }
            return closestLight;
        }
    };
  `
;






return (
  <div>
    <SyntaxHighlighter language="cpp" style={customVscDarkPlus}>
      {codeString}
    </SyntaxHighlighter>
  </div>
);
};



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
  const output = useParams();
  const api_url = "https://portfoliox-vdrp.onrender.com/api/projects/get/" + output.prjId;
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setlight());

    const getProject = async () => {
      setLoading(true);
      const resp = await axios
        .get(api_url)
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        });
      setProject(resp[0]);
      setLoading(false);
    };
    getProject();
  }, []);

  if (project && !loading) {
    return (
      <div className="App">
      <div className="App-body">
        

      <div className="full-width-container">
      <div className="row">
        <div className="col text">
          <div className="titletext"style={{ color: '#ffffff', padding: 40 }}>{project.title}</div>
          <div className="paratext"style={{ color: '#ffffff', width:'70%', padding: 40}}>{project.parag1}</div>
        </div>
        <div className="col img">
        {output.prjId === "6441bbd8ef41920a6e6ba9dd" && (
        <div style={{
  backgroundImage: `url('/independantresearch.png')`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  height: '730px',
  width:"auto",
  border: "3px solid black",
}} className="col desc">
</div>



  
)}

{!(output.prjId === "6441bbd8ef41920a6e6ba9dd") && (
        <div style={{
  backgroundImage: "url(" +"https://portfoliox-vdrp.onrender.com"+ project.imgs[0].path_url + ")",
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  height: '730px',
  
  border: "3px solid black",
}} className="col desc">


</div>




)}

</div>
      </div>
       {output.prjId === "6441bbd8ef41920a6e6ba9dd" && (
      <div className="row">
        <div className="col">
          <div className="full-width-container2">
            <div className="titletext2"style={{ color: '#000000' }}>{"Download Paper"}</div>
            <div className="paratext2"style={{ color: '#000000',width:"29%" }}>{"Click the down arrow button to download the article  in PDF format."}</div></div>
        </div>
        <div className="col-md-2">
        <a href="https://www.researchgate.net/profile/El-Houssaine-Chahboun/publication/373598436_Exploring_Computational_Complexity_and_Properties_of_a_Natural_Class_of_Addition_Chains/links/6537c64d5d51a8012b6d8136/Exploring-Computational-Complexity-and-Properties-of-a-Natural-Class-of-Addition-Chains.pdf?origin=publicationDetail&_sg%5B0%5D=CrKasjaro3H_FRUmrWmSSf3IB-vRQIP7dxVZ_v-ETlUeoGetMR3Lq-h4K29CRoqomCikBvuW9zFd-t4rKEDE2A.D-gulkYJ9sKQTMd1_FxxSm4IiWHS4N5oY2qFo39Gr_NkBTRXkpQjPfNpbWrgOIgk1wQ_NLEIBesv5M2yIXvg_w&_sg%5B1%5D=f3TU-z4y71Y0dL688yEgFqB0wjihgGWQPwrvdLP5wpQ6qtMFYLlHhWOi9ktj1buY90mWOUD_7onV6kTTD6kVT-6JVZiKmx76PUfEsz-5joXj.D-gulkYJ9sKQTMd1_FxxSm4IiWHS4N5oY2qFo39Gr_NkBTRXkpQjPfNpbWrgOIgk1wQ_NLEIBesv5M2yIXvg_w&_iepl=&_rtd=eyJjb250ZW50SW50ZW50IjoibWFpbkl0ZW0ifQ%3D%3D&_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6ImhvbWUiLCJwYWdlIjoicHVibGljYXRpb24iLCJwcmV2aW91c1BhZ2UiOiJwcm9maWxlIiwicG9zaXRpb24iOiJwYWdlSGVhZGVyIn19" target="_blank" rel="noopener noreferrer">
  <div className="full-width-container3">
    <svg xmlns="http://www.w3.org/2000/svg" width="214" height="214" viewBox="0 0 224 224" fill="none">
      <rect width="214" height="214" fill="none"/>
      <path d="M109.379 157.621C110.55 158.793 112.45 158.793 113.621 157.621L132.713 138.529C133.885 137.358 133.885 135.458 132.713 134.287C131.542 133.115 129.642 133.115 128.471 134.287L111.5 151.257L94.5294 134.287C93.3579 133.115 91.4584 133.115 90.2868 134.287C89.1152 135.458 89.1152 137.358 90.2868 138.529L109.379 157.621ZM108.5 70V155.5H114.5V70H108.5Z" fill="white"/>
    </svg>
  </div>
</a>

            </div>

      </div>
       )}
    </div>



    {output.prjId === "644310db0e626d1b2192ea40" && (
          <div>
    <div className="col text">
          <div className="titletext"style={{ color: '#000000',  textAlign: 'left', marginLeft:50,marginTop:50 }}>{"ROSALIA IS A CULTURAL RESET"}</div>
          <div className="paratext"style={{ color: '#000000' ,  textAlign: 'left', marginLeft:55,marginTop:30, width: "70%"}}>{"It’s been six years since Beyoncé released “Lemonade,” an album (and film) on which she laid bare her marital strife, and subsequent reconciliation, with Jay-Z. The album was a feat of storytelling so ambitious that it made us reconsider what a modern pop star could accomplish. For years after its release, Beyoncé worked to expand the cultural footprint of “Lemonade,” first touring it in arenas around the world. In 2018, at Coachella, she blew it out into a baroque theatrical production honoring the legacy of Black collegiate marching bands. She followed that performance with a documentary about her preparation for the show, along with an accompanying live album called “Homecoming.” That year, she and Jay-Z released “Everything Is Love,” a joint album that was more a “Lemonade” victory lap than a new musical chapter. And yet the “Lemonade” era was so monumental that its long tail felt justified. Each iteration seemed to pump new fuel into the project."}</div>
          <div className="paratext"style={{ color: '#000000' ,  textAlign: 'left', marginLeft:55,marginTop:30, width: "70%"}}>{"The album was a feat of storytelling so ambitious that it made us reconsider what a modern pop star could accomplish. For years after its release, Beyoncé worked to expand the cultural footprint of “Lemonade,” first touring it in arenas around the world. In 2018, at Coachella, she blew it out into a baroque theatrical production honoring the legacy of Black collegiate marching bands. She followed that performance with a documentary about her preparation for the show, along with an accompanying live album called “Homecoming.” That year, she and Jay-Z released “Everything Is Love,” a joint album that was more a “Lemonade” victory lap than a new musical chapter. And yet the “Lemonade” era was so monumental that its long tail felt justified. Each iteration seemed to pump new fuel into the project."}</div>
        
        </div>
        </div>
  )}

        {output.prjId === "64438ed696ba6c03ace1038a" && (
          <div>
            { <div className="titletext"style={{ color: '#000000',  textAlign: 'left', marginLeft:50,marginTop:50 }}>{"PBRT V4"}</div> 
                /* This div will only be displayed if projectID matches "specificID" */}
            {<div className="paratext" style={{ color: '#000000', textAlign: 'left', marginLeft: 50, marginTop: "2%" }}>
  {"in order to create this custom sampler we will be using the open source pbrt volume 4 source code which can be downloaded by "}
  <NavLink to="/download/source-code"style={{ color: 'blue' }}>clicking here.</NavLink>
</div>} 

<div className="paratext"style={{ color: '#000000' ,  textAlign: 'left', marginLeft:55,marginTop:30, width: "70%"}}>{"In the following we will be basing off our code only on 'UniformLightSampler' and 'PowerLightSampler' from PBRT source code. "}<br></br> {"To define a new sampler based on the UniformLightSampler in PBRT and access it through PBRT commands, we'll need to extend PBRT's C++ codebase, define the new sampler class inheriting properties from the UniformLightSampler, and then expose it to PBRT's scene description language."}<br></br>{"Here's how the relevant part of PBRT source code should look like as of PBRT V4 current release (jan 01 2023):"}</div>

              <div className="code-snippet-wrapper">
                <CppCodeSnippet />
              </div>

              <div className="paratext"style={{ color: '#000000' ,  textAlign: 'left', marginLeft:55,marginTop:30, width: "70%"}}>{"This code snippet defines a C++ class UniformLightSampler within the pbrt namespace, Rather than uniformly sampling all lights within the 'lights' object, our approache prioritizes lights based on their favorable view angles concerning the camera. Represented by an abstracted interval AB, the figure below symbolizes this concept. When envisioning the euclidean plane where the x-axis aligns parallel to AB, among all points along the x-coordinate line, the point displaying the optimal view angle to the camera stands out. This point, in conjunction with points A and B, uniquely defines a circle tangent to the line characterized by the x-coordinate, which coincides with the x-coordinate of the said point."}</div>
     
              <img style={{float: 'left',width:"30%",outline: "3px solid black" ,margin:"3.6%"}} src="/Frame6803.png" alt="Image"   />

              <div className="code-snippet-wrapper">
                <CppCodeSnippet2 />
              </div>
              
              <div className="paratext" style={{ color: '#000000', textAlign: 'left', marginLeft: 55, marginTop: 30, width: '70%' }}>
  This code includes a Light class to represent individual lights, a Camera class to represent the camera, and a prioritize_lights function that calculates the view angles of each light concerning the camera and sorts them based on these angles in descending order. This approach does exactly what we aspire to do but <span style={{ fontWeight: 'bold' }}>at a high cost!</span> 
</div>
<div className="paratext" style={{ color: '#000000', textAlign: 'left', marginLeft: 55, marginTop: 30, width: '70%' }}>
  As described in the figure above the problem of finding the point with the best angle view is a theoratically solved problem we will try to implement an approximation of this solution to deliver a tolerable compromise between accuracy and low cost.
</div>
<div className="code-snippet-wrapper">
                <CppCodeSnippet3 />
              </div>

<div>
  
  
    </div>  
    
          </div>
          
        )}

       
        {!(output.prjId === "6441bbd8ef41920a6e6ba9dd") && (
          <div>
            <br></br><br></br><br></br>
  <Contactfooter />
              </div>
        

        )}
     

    </div></div>


  
    );
  } else {
    return <div>Still loading</div>;
  }
}

export default Project;


