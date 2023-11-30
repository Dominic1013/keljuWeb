import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/about/aboutBanner1.png"
          // fill={true}
          layout="responsive"
          width={1200}
          height={400}
          alt=""
          className={styles.img}
        />
        {/* <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>革路聚聚地方創生 </h1>
          <h2 className={styles.imgDesc}>
            大武山下的美麗風土，看見排灣文化的傳承
          </h2>
        </div> */}
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>我們是誰？</h1>
          <p className={styles.desc}>
            我們是革路聚聚地方創生青年培力工作站，
            我們是泰武鄉在地青年所組成的地方創生團隊, 成員有：
            <br />
            <br />「 社工、社會教育、人類學研究、社區營造 」
            <br />
            「 行銷、平面設計、遊程專業、工藝師團隊 」
            <br />
            <br />
            在部落深耕的日子裡,我們深知部落的溫暖與美好,
            也看見、聽見、發現部落的各式需求,
            例如部落長者照顧、人口外移、產業經濟瓶頸、文化傳承......等,
            我們希望青年培力工作站成為返鄉與在地青年的匯集站,
            從大家的回應中找答案, 一同串起文化、經濟、社會、認同感,
            「一起以部落人,思考部落事,解決部落問題,建構泰武生活」
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>我們正在做</h1>
          <p className={styles.desc}>
            我們根據在地需求，共同討論，一同於泰武鄉推動以下幾點事項：
            <br />
            <br /> 青年培力 X 產業串連
            <br />
            共創計劃 X 遊程推動
            <br />
            商品通路 X 文化採集
            <br />
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
