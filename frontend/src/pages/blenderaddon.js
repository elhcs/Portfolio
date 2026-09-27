import React from 'react';
import Footer from '../components/footer_new';
import CodeCell from '../components/codecell';
import styles from './BlenderAddon.module.css';

const BlenderAddonProject = () => (
  <div className={styles.page}>
    <header className={styles.hero}>
      <div>

      </div>
      <div className={styles.heroSummary}>
        <p>A Blender add-on for generating 3D avatars from 2D images, based on Human 3Diffusion.</p>
        <a href="#install-addon">Explore the add-on <span aria-hidden="true">↘</span></a>
        <span className={styles.version}>Initial release / 01 February 2025</span>
      </div>
    </header>
    <div className={styles.layout}>
      <nav className={styles.index} aria-label="On this page">
        <span className={styles.kicker}>On this page</span>
        <a href="#introduction">Introduction</a>
        <a href="#objective">The project</a>
        <a href="#install-addon">Installation</a>
        <a href="#code-example">Code & setup</a>
        <a href="#demo">Demo</a>
        <a href="#references">References</a>
      </nav>
      <article className={styles.article}>
            <h2 id="introduction">Introduction</h2>
            <p>I’ve used Blender since my teens and wanted to bring image-to-3D generation into it. This release uses Human 3Diffusion. </p>

            <h2 id="objective">Objective</h2>
            <p>This Blender addon integrates the <strong>Human 3Diffusion</strong> model into Blender, allowing users to generate 3D avatars from 2D images, enhancing workflow for 3D artists and developers.</p>

            <h2 id="key-features">Key Features</h2>
            <ul>
              <li>Generate 3D avatars directly in Blender from 2D images</li>
              <li>Seamless integration with Blender's interface</li>
              <li>Customizable avatar generation with easy-to-use sliders and controls</li>
            </ul>
            <h2 id="install-addon">Install Addon</h2>
            <img className={styles.articleImage} src="/blenderaddon.png" alt="Blender add-on installation interface" loading="lazy" />

            <h2 id="code-example">Code Example</h2>
            <p className={styles.note}>Illustrative example using a hypothetical import.</p>
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

            <h2 id="repository-structure">Repository Structure</h2>
            <a className={styles.repository} href="https://github.com/elhcs/blender_addon" target="_blank" rel="noopener noreferrer">Browse the add-on source on GitHub <span aria-hidden="true">↗</span></a>
            <h2 id="setup-instructions">Setup Instructions</h2>
            <p>1. Clone the repository: <code>git clone https://github.com/elhcs/blender_addon.git</code></p>
            <p>2. Populate the <code>checkpoints/</code> folder with the required pretrained model weights.</p>
            <p>3. Install the necessary dependencies with: <code>pip install -r requirements.txt</code></p>

            <h2 id="usage">Usage</h2>
            <p>After installation, enable the addon in Blender's preferences. Once enabled, use the UI to upload a 2D image and generate a 3D avatar in real time.</p>

            <h2 id="demo">Demo</h2>
            <img className={styles.articleImage} src="/ScreenRecording2025-02-07at11.42.32PM-ezgif.com-video-to-gif-converter.gif" alt="Blender avatar generation demonstration" loading="lazy" />

            <h2 id="contributing">Contributing</h2>
            <p>Contributions are welcome! Fork the repository and create a pull request with improvements. If you have feedback or suggestions, feel free to open an issue!</p>
            <h2 id="references">References</h2>
                <ul>
                <li>
                    <a href="https://yuxuan-xue.com/human-3diffusion/" target="_blank" rel="noopener noreferrer">Human 3Diffusion</a> —  work that explores generating 3D avatars from 2D images using 3dgs guided 2d diffusion models .
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

               </article>
    </div>
    <Footer />
  </div>
);

export default BlenderAddonProject;
