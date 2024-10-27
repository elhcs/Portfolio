import React, { useState, useEffect } from "react";
import axios from "axios";
import "./dynamic_project.css";
import { useParams } from "react-router-dom";

const DynamicProjectViewer = () => {
  const [elements, setElements] = useState([]);
  const [errors, setErrors] = useState(null);
  const output = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/dynamic_projects/get/")+ output.prjId; // Adjust the API endpoint if necessary
        setElements(response.data.elements); // Assuming the server returns an array of elements (text & images)
      } catch (error) {
        setErrors(error.response?.data || error.message);
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  if (errors) {
    return <div>Error: {errors}</div>;
  }

  return (
    <div className="project-viewer">
      {elements.length === 0 ? (
        <div>No data to display</div>
      ) : (
        elements.map((el, index) => (
          <div key={index} className="element">
            {el.type === "text" && (
              <div className="validated-text" dangerouslySetInnerHTML={{ __html: el.content }} />
            )}
            {el.type === "image" && (
              <img src={el.content} alt={`Uploaded content ${index}`} className="validated-image" />
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default DynamicProjectViewer;
