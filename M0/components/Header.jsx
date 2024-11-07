import React from "react";
import { useState } from "react";
import styles from "./header.module.css";
import profilePic from "../assets/treeProfile.webp";
import hamburgerImg from "../assets/hamburger.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(styles);
  };

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

        {/* Hamburger menu icon for mobile */}
        <div
          className={`${styles.hamburgerMenu} ${menuOpen ? styles.open : ""}`}
          onClick={toggleMenu}
        >
          <img className={styles.hamburgerImg} src={hamburgerImg}></img>
          {/* <span></span>
          <span></span>
          <span></span> */}
        </div>

        {/* Conditional nav links */}
        <nav className={`${styles.navLinks} ${menuOpen ? styles.show : ""}`}>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          <a className={styles.loginLink} href="#">
            Login
          </a>
        </nav>

        <button className={styles.loginButton}>Login</button>
      </header>
    </div>
  );
}
