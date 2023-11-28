import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>四大服務</h1>

      <div className={styles.itemsContainer}>
        <div className={styles.itemsBox}>
          <Link href="/portfolio/illustrations" className={styles.item1}>
            {/* <Image
              src="/illustration.png"
              alt=""
              className={styles.image}
              layout="fill"
            ></Image> */}
            <span className={styles.title}>工藝</span>
          </Link>
          <Link href="/portfolio/websites" className={styles.item1}>
            {/* <Image
              src="/websites.jpg"
              alt=""
              className={styles.image}
              width={300}
              height={400}
              layout="responsive"
            ></Image> */}
            <span className={styles.title}>旅行</span>
          </Link>
        </div>
        <div className={styles.itemsBox}>
          <Link href="/portfolio/application" className={styles.item2}>
            {/* <Image
              src="/apps.jpg"
              alt=""
              className={styles.image}
              width={300}
              height={400}
              layout="responsive"
            ></Image> */}
            <span className={styles.title}>青培</span>
          </Link>
          <Link href="/portfolio/application" className={styles.item2}>
            {/* <Image
              src="/apps.jpg"
              alt=""
              className={styles.image}
              width={300}
              height={400}
              layout="responsive"
            ></Image> */}
            <span className={styles.title}>串連</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
