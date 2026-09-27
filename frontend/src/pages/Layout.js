import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import styles from "./Layout.module.css";

function Layout() {
  return (
    <div className={styles.layout}>
        <Navbar />

      <Outlet />
    </div>
  );
}

export default Layout;
