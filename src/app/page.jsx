import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import ImgSlider from "@/components/ImgSlider/ImgSlider";

import change1 from "public/change1.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <ImgSlider />
      <section className={styles.infoSection}>
        <h3 className={styles.h3}>遊玩主題</h3>
        <div className={styles.infoCircles}>
          <div className={styles.infoCircle}>
            <img
              src="/co-space.jpeg"
              alt=""
              layout="fill"
              objectFit="cover"
              className={styles.circleImg}
            ></img>
            <p className={styles.circleText}>工藝商品</p>
          </div>
          <div className={styles.infoCircle}>
            <img
              src="/travel.jpeg"
              alt=""
              layout="fill"
              objectFit="cover"
              className={styles.circleImg}
            ></img>
            <p className={styles.circleText}>風土旅行</p>
          </div>
          <div className={styles.infoCircle}>
            <img
              src="/youthEmpower.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
              className={styles.circleImg}
            ></img>
            <p className={styles.circleText}>青年培力</p>
          </div>
          <div className={styles.infoCircle}>
            <img
              src="/speak.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
              className={styles.circleImg}
            ></img>
            <p className={styles.circleText}>產業串連</p>
          </div>
        </div>
      </section>
    </div>
  );
}
