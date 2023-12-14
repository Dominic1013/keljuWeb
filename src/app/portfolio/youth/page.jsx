import Image from "next/image";
import React from "react";
import styles from "./page.module.scss";

const Youth = () => {
  return (
    <div className={styles.container}>
      <h1>青年培力</h1>
      <section className={styles.bannerSection}>
        <Image
          src="/portfolio/product/unsplash10.jpg"
          layout="responsive"
          width={1200}
          height={400}
          alt=""
          className={styles.banner}
        ></Image>
      </section>
      <section className={styles.section01}>
        <div className={styles.imgContainer}>
          <Image
            src="/portfolio/product/millet.jpg"
            // layout="responsive"
            width={325}
            height={486}
            alt=""
            className={styles.img}
          ></Image>
        </div>
        <div className={styles.textContainer}>
          <h2>01</h2>
          <h3>title</h3>
          <p>
            contentsdsdfsdfsdfsdfasdfgasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfsdfsdfsdfsdfsdfsdfasdfadfasdfasfe
          </p>
        </div>
      </section>
      <section className={styles.section02}>
        <div className={styles.imgContainer}>
          <Image
            src="/portfolio/product/yellow_millet.jpg"
            // layout="responsive"
            width={391}
            height={261}
            alt=""
            className={styles.img}
          ></Image>
        </div>
        <div className={styles.textContainer}>
          <h2>02</h2>
          <h3>title</h3>
          <p>
            contentsdsdfsdfsdfsdfasdfgasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfsdfsdfsdfsdfsdfsdfasdfadfasdfasfe
          </p>
        </div>
      </section>
      <section className={styles.section03}>
        <div className={styles.textContainer03}>
          <h2>03</h2>
          <h3>title</h3>
          <p>
            contentsdsdfsdfsdfsdfasdfgasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfsdfsdfsdfsdfsdfsdfasdfadfasdfasfe
          </p>
        </div>
        <div className={styles.imgContainer03}>
          <Image
            src="/portfolio/product/newBox1.jpg"
            layout="responsive"
            width={325}
            height={486}
            alt=""
            className={styles.img}
          ></Image>
        </div>
      </section>
    </div>
  );
};

export default Youth;
