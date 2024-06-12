import "./Login.css";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/authActions";
import { useForm } from "react-hook-form";
import { setlight, setdark } from "../reducers/themeReducer";

const Login = () => {
  const { loading, userInfo, error, success, isAuthenticated } = useSelector(
    (state) => state.auth
  );
  const err = useSelector((state) => state.err);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const location = useLocation();
  const { register, handleSubmit } = useForm();

  const redirectPath = location.state?.path || "/";

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/admin");
    }
  }, [navigate, userInfo]);
  useEffect(() => {
    dispatch(setlight());
  }, []);
  const submitForm = (data) => {
    dispatch(loginUser(data));
  };

  return (


  




   

    <div
      className="loginSection"
     
    >
       <div className="row">
        <div className="col text">
      <h1 className="title_admin">Admin</h1>
      <form
        noValidate
        className="d-flex flex-column"
        onSubmit={handleSubmit(submitForm)}
      >
        {err.email && <span style={{ color: "red",marginLeft:"0" }}>{err.email}</span>}
        {err.emailnotfound && (
          <span style={{ color: "red",marginLeft:"0" }}>{err.emailnotfound}</span>
        )}

        <input
          type="email"
          id="email"
          error={errors.email}
          {...register("email")}
          required
          placeholder="Email"
        ></input>

        {err.password && <span style={{ color: "red",marginLeft:"0" }}>{err.password}</span>}
        {err.passwordincorrect && (
          <span style={{ color: "red",marginLeft:"0" }}>{err.passwordincorrect}</span>
        )}
        <input
          type="password"
          id="password"
          error={errors.password}
          {...register("password")}
          required
          placeholder="Password"
        ></input>
        
      

        <button type="submit" className="btn btn-success" disabled={loading}>
          <b>Log in</b>
        </button>
        
      </form>
      <p style={{color:'white'}}className="subtitle_login">
          
          © All rights reserved EL Houssaine CHAHBOUN
          <br />
          Benguerir - Rabat Morocco.
        </p>
      
      </div>
      
      <div className="col desc">
        <img src="https://i.ibb.co/pJLyjpM/ezgif-com-video-to-gif-converted.gif" alt="Description of the image" />
        </div>
      </div>
    </div>
  );
};

export default Login;
