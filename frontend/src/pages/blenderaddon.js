import React, { useState, useEffect } from 'react';
import '../components/newprojects.css';
import "../components/Navbar";
import Footer from "../components/footer_new";
import CodeCell from "../components/codecell"; // Adjust the path if necessary
import GitHubRepoView from "../components/GitHubRepoView"; // Add your GitHubRepoView component

const BlenderAddonProject = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint for mobile
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="App">
      <div className="App-body">

  
        
        {/* Introduction Section */}
        <div className="main-content" style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          padding: '0px',
          flexWrap: 'wrap'
        }}>
          <div className="bodypage" style={{ padding: '20px', maxWidth: '95%', margin: '0' }}>
            <h1>Blender Addon: Image to 3D Avatar</h1>
            <img 
  src="https://cdn.freelogovectors.net/wp-content/uploads/2023/09/blender-logo-01-freelogovectors.net_.png" 
  alt="Blender Logo" 
  style={{ maxWidth: '123px', marginTop: '5px',textAlign: 'left',  display: 'block', marginLeft:'13px',marginBottom:'45px'}} 
/>
            {/* Introduction to Blender */}
            <h2>Introduction</h2>
            <p>My journey with Blender started when I was around 14 or 15 years old. I was captivated by the endless possibilities of 3D design and quickly found myself exploring Blender's powerful interface. The ability to mold 3D objects, animate them, and bring them to life sparked a passion that has only grown stronger over the years.</p>

<p>Blender is not just a tool; it's an open-source 3D creation suite that has revolutionized the way I approach design and development. From modeling and animation to simulations and rendering, Blender does it all. And with this addon, I’m excited to bring even more powerful capabilities to the community.</p>

<p>The current release of this Blender addon is based solely on the Human 3Diffusion paper (referenced in the References section). While this foundation is already robust and exciting, I am actively working on better versions that aim to leverage the best aspects of this research while addressing some of its key limitations, particularly in terms of sampling efficiency and training time for the novel diffusion model it presents.</p>

<p>I'm hoping to release newer versions that combine all my ongoing work, making this tool more efficient and versatile. My goal is to provide something that will captivate and empower 3D enthusiasts, enabling them to push the boundaries of creativity in ways that were previously unimaginable.</p>

<p>Now, let’s dive into the specifics of the project!</p>



            <p>Version: 2025/02/01 (Initial Release)</p>

            <h2>Objective</h2>
            <p>This Blender addon integrates the **Human 3Diffusion** model into Blender, allowing users to generate 3D avatars from 2D images, enhancing workflow for 3D artists and developers.</p>

            <h2>Key Features</h2>
            <ul>
              <li>Generate 3D avatars directly in Blender from 2D images</li>
              <li>Seamless integration with Blender's interface</li>
              <li>Customizable avatar generation with easy-to-use sliders and controls</li>
            </ul>
            <h2>Install Addon</h2>
            <img style={{ maxWidth: '100%', textAlign: 'left',  display: 'block', 
    margin: '0', marginLeft:'13px'}}src='blenderaddon.png' alt="Blender Addon Demo"  />

            <h2>Code Example</h2>
            <CodeCell
              codeString={`
import bpy
from human3diffusion import generate_avatar  # Hypothetical import

# Addon function to generate avatars
def generate_avatar_from_image(image_path):
    # Call Human 3Diffusion inference to generate 3D avatar
    avatar = generate_avatar(image_path)
    bpy.context.scene.collection.objects.link(avatar)

# Example usage
generate_avatar_from_image("/path/to/input_image.jpg")
              `}
            />
            
            <header style={{maxWidth:'922px'}} className={"header"}>
            <h2>Repository Structure</h2>
            <a href="/stories" className={"allStoriesLink"}> Download </a>
            </header>
            <div style={{maxWidth:'922px'}}>
            <GitHubRepoView repoUrl="https://github.com/elhcs/blender_addon" />
            </div>
            <h2>Setup Instructions</h2>
            <p>1. Clone the repository: <code>git clone https://github.com/elhcs/blender_addon.git</code></p>
            <p>2. Populate the `checkpoints/` folder with the required pretrained model weights.</p>
            <p>3. Install the necessary dependencies with: <code>pip install -r requirements.txt</code></p>

            <h2>Usage</h2>
            <p>After installation, enable the addon in Blender's preferences. Once enabled, use the UI to upload a 2D image and generate a 3D avatar in real time.</p>

            <h2>Demo</h2>
            <img src='ScreenRecording2025-02-07at11.42.32PM-ezgif.com-video-to-gif-converter.gif' alt="Blender Addon Demo" style={{ maxWidth: '100%', textAlign: 'left',  display: 'block', 
    margin: '0', marginLeft:'13px'}} />

            <h2>Contributing</h2>
            <p>Contributions are welcome! Fork the repository and create a pull request with improvements. If you have feedback or suggestions, feel free to open an issue!</p>
            <h2>References</h2>
                <ul>
                <li>
                    Human 3Diffusion: <a href="https://yuxuan-xue.com/human-3diffusion/" target="_blank" rel="noopener noreferrer">
                   
                    </a> —  work that explores generating 3D avatars from 2D images using 3dgs guided 2d diffusion models .
                </li>
                <li>
                    Blender Official Website: <a href="https://www.blender.org/" target="_blank" rel="noopener noreferrer">
                    https://www.blender.org/
                    </a> — The open-source 3D creation suite that powers this project.
                </li>
                <li>
                    Diffusion Models in AI: <a href="https://towardsdatascience.com/diffusion-models-explained-what-are-they-how-do-they-work-f8ab94f8b5b4" target="_blank" rel="noopener noreferrer">
                    Explanation and Practical Applications
                    </a> — A great resource for understanding diffusion models.
                </li>
                </ul>

            <h2>License</h2>
            <p>This project is licensed under the MIT License. See LICENSE for more details.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default BlenderAddonProject;
