import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setdark } from "../reducers/themeReducer";
import "./dynamic_project.css";

const DynamicElementInserter = () => {
  const [elements, setElements] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(setdark());
  }, [dispatch]);

  const handleInsertText = () => {
    setElements([...elements, { type: "text", content: "", editing: true }]);
  };

  const handleInsertImage = () => {
    setElements([...elements, { type: "image", content: "", editing: true }]);
  };

  const handleTextChange = (index, value) => {
    const updatedElements = [...elements];
    updatedElements[index].content = value;
    setElements(updatedElements);
  };

  const handleImageChange = (index, event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const updatedElements = elements.map((el, elIndex) => {
                if (elIndex === index) {
                    return { ...el, content: reader.result, file: file };  // Store both the result and the file object
                }
                return el;
            });
            setElements(updatedElements);
        };
        reader.readAsDataURL(file);
    }
};

  const toggleEditing = (index) => {
    const updatedElements = [...elements];
    updatedElements[index].editing = !updatedElements[index].editing;
    setElements(updatedElements);
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    elements.forEach((el, index) => {
        if (el.type === "text" && !el.editing) {
            formData.append("paragraphs[]", el.content);
        } else if (el.type === "image" && !el.editing && el.file) {  // Ensure to check for el.file
            formData.append("images", el.file);  // Append the file object
        }
    });

    // if (userInfo && userInfo.id) {
    //     formData.append("owner", userInfo.id);
    // } else {
    //     console.error("User info id is undefined");
    // }

    try {
      const resp = await axios.post("http://localhost:3000/api/dynamic_projects/add", formData);
    } catch (error) {
      if (error.response) {
        console.log('Response data:', error.response.data);
        console.log('Response status:', error.response.status);
        console.log('Response headers:', error.response.headers);
      } else if (error.request) {
        console.log('Request error:', error.request);
      } else {
        console.log('Axios general error:', error.message);
      }
    }
};



  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      [{ align: [] }],
      ['clean'],
    ],
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="elements">
          {elements.map((el, index) => (
            <div key={index} className="element">
              {el.type === "text" && (
                <>
                  {el.editing ? (
                    <>
                      <ReactQuill
                        value={el.content}
                        onChange={(value) => handleTextChange(index, value)}
                        theme="snow"
                        modules={modules}
                      />
                      <button type="button" onClick={() => toggleEditing(index)} className="validate-btn">
                        Validate Text
                      </button>
                    </>
                  ) : (
                    <div
                      className="validated-text"
                      dangerouslySetInnerHTML={{ __html: el.content }}
                      onClick={() => toggleEditing(index)}
                    />
                  )}
                </>
              )}
              {el.type === "image" && (
                <>
                  {el.editing ? (
                    <>
                      <input
                        key={`file-input-${index}`}
                        type="file"
                        accept="image/*"
                        data-index={index}
                        onChange={(event) => handleImageChange(index, event)}
                      />
                      <button type="button" onClick={() => toggleEditing(index)} className="validate-btn">
                        Validate Image
                      </button>
                    </>
                  ) : (
                    el.content && (
                      <img
                        src={el.content}
                        alt={`Uploaded content ${index}`}
                        className="validated-image"
                        onClick={() => toggleEditing(index)}
                      />
                    )
                  )}
                </>
              )}
            </div>
          ))}
        </div>
        <div className="buttons">
          <button type="button" onClick={handleInsertText}>Insert Text Paragraph</button>
          <button type="button" onClick={handleInsertImage}>Insert Image</button>
          <button type="submit" className="submit-btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default DynamicElementInserter;