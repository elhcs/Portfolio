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
import Footer from "../components/footer_new";
import styles from '../components/Articlecomp.module.css';
import CodeCell from "../components/codecell";
// Custom theme based on VS Code Dark Plus
const customVscDarkPlus = {
  ...vscDarkPlus,
  'code[class*="language-"]': {
    ...vscDarkPlus['code[class*="language-"]'],
    color: '#f8f8f2', // Set text color for code
    backgroundColor: '#282a36', // Set background color for code
  },
  // Customizing token colors
  'token.comment': {
    ...vscDarkPlus['token.comment'],
    color: '#6272a4', // Custom color for comments
  },
  'token.keyword': {
    ...vscDarkPlus['token.keyword'],
    color: '#ff79c6', // Custom color for keywords
  },
  'token.string': {
    ...vscDarkPlus['token.string'],
    color: '#f1fa8c', // Custom color for strings
  },
  // Add more customizations as needed
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
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Call once to set initial state

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
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
 {output.prjId === "65a02dac2204224ad6100427" && (
        <div style={{
  backgroundImage: `url('/robotics.gif')`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  height: '730px',
  width:"auto",
  border: "3px solid black",
}} className="col desc">
</div>



  
)}



{!(output.prjId === "6441bbd8ef41920a6e6ba9dd"|| output.prjId === "65a02dac2204224ad6100427")  && (
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

    <div className="App">
      <div className="App-body">

        {/* Ensure full-width for the container */}
        

        {/* Conditional rendering based on isMobile state */}
        <div className={`${styles.additionalColumnsContainer} ${isMobile ? styles.hideOnMobile : ''}`}>
          <div className={styles.additionalColumnLeft} style={{ width: '85%' }}>
            {/* Content for left column */}
            <div className={styles.bio}>
              <div className={styles.biotitle}>{'Save it'}</div>
              <div className={styles.bioparag}>{'Explore this notebook and try the demo in your own environment!'}</div>
            </div>
          </div>
          <div className={styles.additionalColumnRight} style={{ width: '295px' }}>
            {/* Content for right column */}
            <div className={`${styles.blackBox} black-box`}>
              <div className={styles.rightArrow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="214" viewBox="0 27 300 350" fill="none" className="arrow-svg">
                  <rect width="214" height="214" fill="none" />
                  <path
                    d="M109.379 157.621C110.55 158.793 112.45 158.793 113.621 157.621L132.713 138.529C133.885 137.358 133.885 135.458 132.713 134.287C131.542 133.115 129.642 133.115 128.471 134.287L111.5 151.257L94.5294 134.287C93.3579 133.115 91.4584 133.115 90.2868 134.287C89.1152 135.458 89.1152 137.358 90.2868 138.529L109.379 157.621ZM108.5 70V155.5H114.5V70H108.5Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Main content flex container */}
        <div className="main-content" style={{
          display: 'flex',
          flexDirection: 'row', // Default for larger screens
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          padding: '0px',
          flexWrap: 'wrap'  // Ensure wrapping when space is tight
        }}>
          
          {/* Left content */}
          <div className="bodypage" style={{ padding: '-20px', maxWidth: '95%', margin: 'auto' }}>
            <h1>Tracking by Detection: Introduction</h1>
            <p>This technique is widely used for tracking objects in video across frames, maintaining identities consistently using object detection and tracking algorithms.</p>

            <h2>Detection Phase</h2>
            <p>In the detection phase, objects are identified in each frame using models like OpenPose. These models estimate the body pose and allow for object detection. OpenPose is a widely used pose detection algorithm.</p>

            <h2>Tracking Phase</h2>
            <p>After detection, we use tracking algorithms like the Hungarian algorithm to maintain the identity of each detected object over time across multiple frames.</p>

            <h2>Data Setup</h2>
            <p>To begin, we need to download a video file and set up the necessary libraries. The video is used as input data for object tracking.</p>
            <CodeCell
              codeString={`
# Download video and set up
!git clone https://github.com/xuexingyu24/Real-time-human-pose-estimation-by-pytorch.git
%cd Real-time-human-pose-estimation-by-pytorch/
!wget http://stelat.eu/wp-content/uploads/2023/10/video-tp.tar.gz
!tar xzvf video-tp.tar.gz
              `}
            />

            <h2>Video Preprocessing</h2>
            <p>Before processing, the video is resized to reduce computation time. We then process a small subset of frames (up to 150 frames) for quicker testing.</p>
            <CodeCell
              codeString={`
import cv2
import imageio
import matplotlib.pyplot as plt
import matplotlib.animation as animation

scale_res = 0.25
break_frame = 150
input_video = "img1/out.mp4"

cap = cv2.VideoCapture(input_video)
width  = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
fourcc = cv2.VideoWriter_fourcc(*'MP4V')
dim = (int(width*scale_res), int(height*scale_res))
out = cv2.VideoWriter('video_lowres.mp4', fourcc, 20.0, dim)

while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        print("Can't receive frame (stream end?). Exiting ...")
        break
    out.write(cv2.resize(frame,dim))

cap.release()
out.release()
cv2.destroyAllWindows()
              `}
            />

            <h2>Detection with OpenPose</h2>
            <p>We use OpenPose for detecting human poses in the video frames. The model predicts the keypoints of a human body (such as elbows, shoulders, etc.).</p>
            <CodeCell
              codeString={`
from model import bodypose_model, PoseEstimationWithMobileNet
from Demo_picture import Net_Prediction
import time
import torch
import numpy as np

class PoseConfig:
    def __init__(self, backbone='Mobilenet', scale=0.3, show=(-1, 2), thre=0.1):
        self.backbone = backbone
        self.scale = scale
        self.show = show
        self.thre = thre

# Initialize the model and set the configuration
config = PoseConfig()
device = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")
model = PoseEstimationWithMobileNet().to(device)
model.load_state_dict(torch.load('weights/MobileNet_bodypose_model', map_location=device))
model.eval()

cap = cv2.VideoCapture("img1/out.mp4")
all_dets = {}
current = 0

while True:
    isSuccess, frame = cap.read()
    if isSuccess and current < break_frame:
        # Processing...
    else:
        break
cap.release()
              `}
            />

            <h2>Tracking Visualization</h2>
            <p>We visualize the detected skeletons over time, each person gets a different color to distinguish between multiple people.</p>
            <CodeCell
              codeString={`
def draw_det(image, d, color, scale, track_id=None):
    for p in d:
        x, y = p[0:2]
        if x != -1 or y != -1:
            cv2.circle(image, (int(x*scale), int(y*scale)), int(5*scale+1), color, thickness=int(5*scale+1))
            if track_id is not None:
                image = cv2.putText(image, str(track_id), (int(x*scale)+5, int(y*scale)), cv2.FONT_HERSHEY_SIMPLEX, 1, color, 2, cv2.LINE_AA)

# Display video with skeletons
def display_det(video):
    fig = plt.figure(figsize=(10,5))
    mov = []
    for i in range(min(len(video), break_frame)):
        frame = video[i]
        draw_dets(frame, all_dets[i], scale_res)
        img = plt.imshow(frame, animated=True)
        mov.append([img])
    anime = animation.ArtistAnimation(fig, mov, interval=250, repeat_delay=1000)
    return anime

video = imageio.mimread("output_lowres.mp4")
HTML(display_det(video).to_html5_video())
              `}
            />

            <h2>Tracking Implementation</h2>
            <p>Now, we implement the tracker class to maintain object identities and assign detections to existing tracks.</p>
            <CodeCell
              codeString={`
class Track:
    def __init__(self, pose, track_id, t):
        self.poses = {t: pose} if pose else {}
        self.track_id = track_id
        self.last_appearance = 0
        self.alive = True

    def update_pose(self, pose, t):
        self.poses[t] = pose

# Matching detections with existing tracks
def distance_poses(track, det):
    pose1 = np.array(track)
    pose2 = np.array(det)
    valid1 = np.where(pose1[:, 0] < 0, 0, 1)
    valid2 = np.where(pose2[:, 0] < 0, 0, 1)
    valid = np.minimum(valid1, valid2)
    sum_valid = np.sum(valid)
    if sum_valid != 0:
        dist = np.sum(valid * (np.abs(pose1[:, 0] - pose2[:, 0]) + np.abs(pose1[:, 1] - pose2[:, 1]))) / sum_valid
    else:
        dist = 1e20
    return dist
              `}
            />

            <h2>Results and Future Improvements</h2>
            <p>We now track the detected people across frames, maintaining consistent identities. Some issues like occlusions and missing keypoints still persist, but they can be addressed with further research.</p>
            <p>To improve this approach, we suggest reading more about using bounding boxes for tracking and improving the detection accuracy under challenging conditions.</p>

            <h2>Conclusion</h2>
            <p>We've successfully implemented a tracking-by-detection system using OpenPose and a Hungarian algorithm for object tracking.</p>
          </div>

          {/* Right content */}
          <div className="right-content" style={{
              marginRight:'20px',
              flexBasis: '30%', 
              minWidth: '300px', 
              padding: "15px", 
              marginTop: "25px",
              position: 'sticky', 
              top: '20px' 
            }}>
            <div className="card" style={{ padding: '20px', borderRadius: '0px', width: '100%' }}>
              <h2 style={{ marginTop: '15px', textAlign: 'left', padding: '15px' }}>By El Houssaine</h2>
              <p>Meet El Houssaine Chahboun, M2 master's degree in Data Science from École Polytechnique (L'X), with a unique perspective on solving complex problems across various fields.</p>
              <div className="social-links" style={{ marginTop: '20px', textAlign: 'left' }}>
                <a href="https://x.com/elhoussainechah" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>Twitter</a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>Facebook</a>
                <a href="https://www.linkedin.com/in/elhoussainechahboun/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        <br /><br /><br />

      </div>
    </div>

        </div>
  )}

{output.prjId === "65a02dac2204224ad6100427" && (
          <div>
    <div className="col text">
          <div className="titletext"style={{ color: '#000000',  textAlign: 'left', marginLeft:50,marginTop:50 }}>{"AI POWERED CABLE-DRIVEN ROBOT"}</div>
          <div className="paratext"style={{ color: '#000000' ,  textAlign: 'left', marginLeft:55,marginTop:30, width: "70%"}}>{"Here is a comprehensive overview of our robotics project, where I collaborated with fellow students to conceptualize and construct a 6-degree-of-freedom AI-powered cable-driven robot. The design and construction phases demanded significant problem-solving skills and meticulous organization. Notably, the design phase relied extensively on a thorough and detailed theoretical study of the entire system."}</div>
         <br></br>
          <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQ7J1OnjYV1gr0xambRK-VMUs6EY9B_6aKLWPUXHzA6Wng3lp5xgsWlJQA_GksyQIT1Pj75Zb8FdIUH/embed?start=false&loop=false&delayms=3000" frameborder="0" width="1440" height="839" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
        </div>
        <br></br><br></br><br></br>
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
    <br></br><br></br><br></br>
          </div>
          
        )}

       
        {!(output.prjId === "6441bbd8ef41920a6e6ba9dd") && (
          <div>
            
  <Footer />
              </div>
        

        )}
     

    </div></div>


  
    );
  } else {
    return <div>Still loading</div>;
  }
}

export default Project;


