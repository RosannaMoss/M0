import React from "react";
import Card from "./Card";
import styles from "./cardContainer.module.css";

function CardContainer() {
  return (
    <div className={styles.cardContainer}>
      <Card
        imageSrc="https://www.tnnursery.net/cdn/shop/files/virginia-pine-tree-tn-nursery-3.webp?v=1710165960&%3Bwidth=2000&em-format=auto" // Replace with actual image URL
        title="Pine Tree"
        description="This is a pine tree"
      />
      <Card
        imageSrc="https://cdn.mos.cms.futurecdn.net/qZKTPsoUiVuyXMuKVF9DfP-1200-80.jpg" // Replace with actual image URL
        title="Willow Tree"
        description="This is a willow tree"
      />
      <Card
        imageSrc="https://growbilliontrees.com/cdn/shop/articles/oak-tree-2018822_1280.jpg?v=1702365858" // Replace with actual image URL
        title="Oak tree"
        description="This is an oak tree"
      />
    </div>
  );
}

export default CardContainer;
