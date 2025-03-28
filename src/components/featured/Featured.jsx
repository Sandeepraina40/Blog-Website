import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, welcome to Insight Haven!</b> Dive into a world of stories, insights, and endless creativity. ✨
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Unveiling Perspectives: Stories That Inspire</h1>
          <p className={styles.postDesc}>
          Step into a realm of thought-provoking ideas, personal experiences, and creative expressions. Discover stories that spark curiosity and leave a lasting impact.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
