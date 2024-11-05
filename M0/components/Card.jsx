// components/Card.js
import React from "react";
import styles from "./card.module.css";

function Card({ imageSrc, title, description }) {
  return (
    <div className={styles.card}>
      <img src={imageSrc} alt={title} className={styles.cardImage} />

      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
}

export default Card;
