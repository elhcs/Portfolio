import React, { useEffect } from "react";
import "./Navbar.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import setAuthToken from "../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../reducers/authReducers";
import jwt_decode from "jwt-decode";

function Navbar() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { light } = useSelector((state) => state.light);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); // Use location to check the current route

  useEffect(() => {
    if (localStorage.jwtToken) {
      setAuthToken(localStorage.jwtToken);
      const decoded = jwt_decode(localStorage.jwtToken);
      dispatch(setCurrentUser(decoded));

      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        dispatch(logoutUser());
        navigate("/login");
      }
    }
  }, [dispatch, navigate]);

  // Determine if the current page is the About page
  const isAboutPage = location.pathname === "/about";

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{
        backgroundColor: isAboutPage ? "white" : "black",
        borderBottom: isAboutPage ? "3px solid white" : "none"
      }}
    >
      <div className="container-fluid">
        <NavLink to="/" id="LogoText" className="navbar-brand" style={{ color: isAboutPage ? "black" : "white" }}>
          EL HOUSSAINE
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className={`navbar-nav d-flex ms-auto nav-list ${isAboutPage ? "special-nav-list-class" : ""}`}>
            <li className={`nav-item ms-auto p-2 ${isAboutPage ? "special-about-item" : ""}`}>
              <NavLink to="/about" className={`nav-link ${isAboutPage ? "special-about-class" : ""}`} aria-current="page" style={{ color: isAboutPage ? "black" : "white" }}>
                ABOUT
              </NavLink>
            </li>
            <li className={`nav-item ms-auto p-2 ${isAboutPage ? "special-about-item" : ""}`}>
              <NavLink to="/admin" className="nav-link" style={{ color: isAboutPage ? "black" : "white" }}>
                PORTFOLIO
              </NavLink>
            </li>
            <li className={`nav-item ms-auto p-2 ${isAboutPage ? "special-about-item" : ""}`}>
            <NavLink 
  to="#" 
  onClick={() => window.location.href = "mailto:el-houssaine.chahboun@polytechnique.edu"} 
  className="nav-link" 
  style={{ color: isAboutPage ? "black" : "white" }}
>
  CONTACT
</NavLink>
            </li>
            {!isAuthenticated && (
              <li className={`nav-item ms-auto p-2 ${isAboutPage ? "special-about-item" : ""}`}>
                <NavLink to="/login" className="nav-link" style={{ color: isAboutPage ? "black" : "white" }}>
                  LOGIN
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
