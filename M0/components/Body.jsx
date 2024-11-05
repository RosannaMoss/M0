import React from "react";
import styles from "./body.module.css";

export default function Body() {
  return (
    <div>
      <section className={styles.bodyBanner}>
        <h1>It's Tree Time!</h1>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search for a tree..." />
          <button>Search</button>
        </div>
      </section>
    </div>
  );
}
