import React from "react";
import styles from "./page.module.scss";
import { items } from "../shopData";
import Link from "next/link";
import Image from "next/image";
const links = items.links;
const getData = (id) => {
  let data = items.links[id - 1];
  return data;
  //   console.log(data);
};
const shopIntroduction = ({ params }) => {
  let data = getData(params.id);

  return (
    <div className={styles.container}>
      <h1>{data.shopName}</h1>
      <section className={styles.item}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src={data.img}
            width={200}
            height={200}
            layout="responsive"
          ></Image>
        </div>
        <div className={styles.rightSideContainer}>
          <div className={styles.category}>泰武鄉</div>
          <div className={styles.title}>
            <p>
              <strong>{data.title}</strong>
            </p>
          </div>
          <div className={styles.content}>
            <p>{data.desc}</p>
          </div>
          <div className={styles.fanPage}>
            <a href={data.fanPage}>粉絲專頁</a>
          </div>
        </div>
      </section>
      <Link href="/taiwu/shopInfo" className={styles.back}>
        回上頁
      </Link>
    </div>
  );
};

export default shopIntroduction;
