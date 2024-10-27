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
function UploadDynamicProject() {
  const output = useParams();
  const api_url = "http://localhost:3000/api/dynamic_projects/get/" + output.prjId;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setlight());

   
  }, []);

  
    return <div><DynamicElementInserter /><Footer /></div>;

}

export default UploadDynamicProject;


