//pages/Dynamic_project.js

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
import DynamicElementInserter from "../components/dynamic_project_component"; // Assuming it's in the same folder
import DynamicElementDisplayer from "../components/dynamicprojectdisplay"; // Assuming it's in the same folder















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
function DynamicProject() {
  const output = useParams();
  const api_url = "http://localhost:3000/api/dynamic_projects/get/" + output.prjId;
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

  if (project && !loading && project.paragraphs && project.imgs) {
    return (
      <div className="App">
        <div className="App-body">
          <div className="full-width-container">
            <div className="row">
              <div className="col text">
                <div className="titletext" style={{ color: '#ffffff', padding: 40 }}>{project.paragraphs[0].replace(/<\/?p>/g, '')}</div>
                <div className="paratext" style={{ color: '#ffffff', width: '70%', padding: 40 }}>{project.paragraphs[1]}</div>
                <div
                      className="validated-text"
                      dangerouslySetInnerHTML={{ __html: project.paragraphs }}
                    />

              </div>
              <div className="col img">
                <div
                  style={{
                    backgroundImage: "url(" + "http://localhost:3000" + project.imgs[0].path_url + ")",
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: '730px',
                    border: "3px solid black",
                  }}
                  className="col desc"
                ></div>
              </div>
            </div>
          </div>
          <DynamicElementInserter />
          <Footer />
        </div>
      </div>
    );
  } else {
    return <div>Still loading<DynamicElementInserter /><Footer /></div>;
  }

}

export default DynamicProject;


