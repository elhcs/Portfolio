import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import Home from "./pages/Home";
import Biomed from "./pages/Biomed";

import Layout from "./pages/Layout";
import Project from "./pages/Project";
import Nopage from "./pages/Nopage";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Article from "./pages/Article";
import Shortfilm from "./pages/Shortfilm";
import About from "./pages/About";
import Newhome from "./pages/newhome";
import Mathpbmartc from "./pages/Mathpbmartc";
import RequireAuth from "./components/auth/RequireAuth";
import RequireSudo from "./components/auth/RequireSudo";

import UploadProject from "./pages/UploadProject";
import UploadDynamicProject from "./pages/UploadDynamicProject";
import UploadBlog from "./pages/UploadBlog";
import Adminlayout from "./pages/Adminlayout";

import Account from "./pages/Account";
import DynamicProject from "./pages/Dynamic_project";
import Register from "./pages/Register";
import AdminRestrict from "./components/auth/AdminRestrict";
import ScrollToTop from './ScrollToTop';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="project/:prjId" element={<Project />} />
          <Route path="dynamicproject/:prjId" element={<DynamicProject />} />
          <Route
            path="admin"
            element={
              <RequireAuth>
                <Adminlayout />
              </RequireAuth>
            }
          >
            
              <Route index element={<Admin />} />
              <Route path="upload" element={<AdminRestrict><UploadProject /></AdminRestrict>} />
              <Route path="uploaddynamic" element={<AdminRestrict><UploadDynamicProject /></AdminRestrict>} />
              <Route path="addblog" element={<AdminRestrict><UploadBlog /></AdminRestrict>}></Route>
              <Route path="account" element={<AdminRestrict><Account /></AdminRestrict>} />
            <Route
              path="register"
              element={
                <RequireSudo>
                  <Register />
                </RequireSudo>
              }
            />
          </Route>
          
          <Route path="login" element={<Login />}></Route>
          <Route path="article" element={<Article />}></Route>
          <Route path="shortfilm" element={<Shortfilm />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="newhome" element={<Newhome />}></Route>
          <Route path="mathartc" element={<Mathpbmartc />}></Route>
          <Route path="biomed" element={<Biomed />}></Route>
          <Route path="DynamicProject" element={<DynamicProject />}></Route>
          <Route path="*" element={<Nopage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
