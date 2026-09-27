import React, { useEffect } from "react";
import "./Navbar.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import setAuthToken from "../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../reducers/authReducers";
import jwt_decode from "jwt-decode";
import { rosaliaHeroColors } from "../pages/Rosalia";
import { aboutOnly } from "../siteMode";

function Navbar() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); // Use location to check the current route

  useEffect(() => {
    if (aboutOnly) return;
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
  const isAboutPage = aboutOnly || location.pathname === "/about";
  const isRosaliaPage = !aboutOnly && location.pathname === "/rosalia";
  const navBackgroundColor = isRosaliaPage
    ? rosaliaHeroColors.textColumn
    : isAboutPage
      ? "#ffffff"
      : "#000000";
  const navTextColor = isRosaliaPage ? "#ffffff" : isAboutPage ? "#000000" : "#ffffff";

  useEffect(() => {
    const themeColor = document.querySelector('meta[name="theme-color"]');
    themeColor?.setAttribute("content", navBackgroundColor);
    document.documentElement.style.setProperty("--nav-safe-area-color", navBackgroundColor);
  }, [navBackgroundColor]);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{
        backgroundColor: navBackgroundColor,
        borderBottom: isAboutPage ? "3px solid white" : "none",
      }}
    >
      <div className="container-fluid">
        <NavLink to="/" id="LogoText" className="navbar-brand" style={{ color: navTextColor }}>
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
              <NavLink to="/about" className={`nav-link ${isAboutPage ? "special-about-class" : ""}`} aria-current="page" style={{ color: navTextColor }}>
                ABOUT
              </NavLink>
            </li>
            <li className={`nav-item ms-auto p-2 ${isAboutPage ? "special-about-item" : ""}`}>
            <NavLink 
  to="#" 
  onClick={() => window.location.href = "mailto:el-houssaine.chahboun@polytechnique.edu"} 
  className="nav-link" 
  style={{ color: navTextColor }}
>
  CONTACT
</NavLink>
            </li>
            {!aboutOnly && !isAuthenticated && (
              <li className={`nav-item ms-auto p-2 ${isAboutPage ? "special-about-item" : ""}`}>
                <NavLink to="/login" className="nav-link" style={{ color: navTextColor }}>
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
