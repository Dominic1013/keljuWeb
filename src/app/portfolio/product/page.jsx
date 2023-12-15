import Image from "next/image";
import React from "react";
import styles from "./page.module.scss";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";

const Product = () => {
  const breadCrumbs = [
    { name: "首頁", url: "/" },

    { name: "服務介紹", url: "/portfolio" },
    { name: "工藝商品", url: "/portfolio/product" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.breadCrumbs}>
        <BreadCrumbs breadCrumbs={breadCrumbs} />
      </div>
      <h1>- 工藝商品 -</h1>
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

export default Product;
