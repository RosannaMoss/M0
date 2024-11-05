import React from "react";
import { useState } from "react";
import styles from "./header.module.css";
import placeholder from "../assets/grey.avif";
import profilePic from "../assets/treeProfile.webp";

export default function Header() {
  // const [menuOpen, setMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen);
  // };

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img
            src={profilePic}
            alt="profilePic"
            className={styles.profileImage}
          />
          <div className={styles.logo}>Tree Time</div>
        </div>

        <nav className={styles.headings}>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </nav>

        <button className={styles.loginButton}>Login</button>

        {/* <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <a href="#">Menu1</a>
          <a href="#">Menu2</a>
          <a href="#">Menu3</a>
          <button className={styles.loginButton}>Login</button>
        </nav>

        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div> */}
      </header>
    </div>
  );
}
