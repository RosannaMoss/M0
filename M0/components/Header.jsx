import React from "react";
import { useState } from "react";
import styles from "./header.module.css";
import profilePic from "../assets/treeProfile.webp";

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
        <div className={styles.hamburgerMenu} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation links with conditional class based on menuOpen state */}
        <nav className={`${styles.navLinks} ${menuOpen ? styles.show : ""}`}>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </nav>

        <button className={styles.loginButton}>Login</button>
      </header>
    </div>
  );
}
