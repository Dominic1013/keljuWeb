import React from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>四大服務</h1>

      <div className={styles.itemsContainer}>
        <div className={styles.itemsBox}>
          <Link href="/portfolio/product" className={styles.item1}>
            <span className={styles.title}>工藝</span>
          </Link>
          <Link href="/portfolio/journey" className={styles.item1}>
            <span className={styles.title}>旅行</span>
          </Link>
        </div>
        <div className={styles.itemsBox}>
          <Link href="/portfolio/youth" className={styles.item2}>
            <span className={styles.title}>青培</span>
          </Link>
          <Link href="/portfolio/industry" className={styles.item2}>
            <span className={styles.title}>串連</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
