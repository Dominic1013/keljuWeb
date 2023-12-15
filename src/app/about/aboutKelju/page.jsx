import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";

const AboutKelju = () => {
  //breadCrumbs

  const breadCrumbs = [
    { name: "首頁", url: "/" },

    { name: "關於革路", url: "/about/aboutKelju" },
  ];

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
      <div className={styles.breadCrumbs}>
        <BreadCrumbs breadCrumbs={breadCrumbs} />
      </div>
      <div className={styles.sectionContainer}>
        <section>
          <h2>我們是誰？</h2>
          <p className={styles.strong}>
            <strong>
              Kelju！
              <br />
              在排灣族語意指「過來」，革路聚聚，意指一起過來聚一聚！
            </strong>
          </p>

          <p>
            我們是一群泰武鄉在地青年，都曾在外地工作就學闖蕩，每次返回鄉內，更深的體會到土地上的文化正在慢慢的、無形的消失。我們看見排灣傳統文化的價值觀逐漸被平地的資本價值掩蓋，老一輩充滿知識的雙眼看著時代的轉變,卻也無可奈何。
            而在昱軒的聚集下，將這群青年聚在了一起，一同談論在地的未來、願景，在這樣的熱情下，於2023年正式成立革路聚聚地方創生青年培力工作站，透過長者的文化知識作為底蘊，與在地組織、產業合作共創，打造在地支持系統。陪伴泰武青年、在地產業，讓泰武鄉內一起拾起傳統文化價值觀，帶著相同的理念一起前行。
          </p>
          <Image
            src="/about/about_whoWeAre1.png"
            layout="responsive"
            width={1200}
            height={400}
            alt=""
            className={styles.img}
          />
        </section>
        <section>
          <h2>排灣族生命歷程</h2>
          <p className={styles.strong}>
            <strong>- 最有價值、最應該照亮與分享的生命時段 -</strong>
          </p>
          <Image
            src="/about/about_lifeLine.png"
            layout="responsive"
            width={1200}
            height={400}
            alt=""
            className={styles.img}
          />
        </section>
        <section>
          <h2>我們做什麼？</h2>
          <p className={styles.strong}>
            <strong>
              - 重拾傳統部落生活價值觀，建構文化經濟產業，打造良好共好環境 -
            </strong>
          </p>
          <div className={styles.list}>
            <p>
              <strong>泰武地方支持系統</strong>
            </p>
            <ul>
              <li>
                <strong>青年返鄉培力系統 | </strong>
                青年諮詢服務、青年輔導陪伴服務、青年交流空間、青年活動辦理
              </li>
              <li>
                <strong>產業優化提升系統 | </strong>
                產業諮詢服務、產業輔導陪伴服務、產業提升工作坊、產業串連計劃
              </li>
              <li>
                <strong>跨域共創事業系統 | </strong>
                產業跨域共創計劃、青年共創計劃、長者青年共創計劃
              </li>
            </ul>
          </div>

          <Image
            src="/about/about_support.png"
            layout="responsive"
            width={1200}
            height={400}
            alt=""
            className={styles.img}
          />
        </section>
        <section>
          <h2>革路空間</h2>
          <p className={styles.strong}>
            <strong>
              - 革路聚聚工作站打造共創空間、選物店，提供各式活動參與！ -
            </strong>
          </p>
          <div className={styles.imgShopAndSpace}>
            <div className={styles.item}>
              <p>部落選物「質」售所 ▼</p>
              <Image
                src="/about/about_shop.png"
                layout="responsive"
                width={450}
                height={550}
                alt=""
              />
            </div>
            <div className={styles.item}>
              <p>革路聚聚共創空間 ▼</p>
              <Image
                src="/about/about_coSpace.png"
                layout="responsive"
                width={450}
                height={550}
                alt=""
              />
            </div>
          </div>
        </section>
        <section>
          <h2>地域創生大賞肯定</h2>

          <p className={styles.strong}>
            <strong>
              - 112年地域創生大賞，革路聚聚入圍「最佳世代傳承獎」-
            </strong>
          </p>
          <p>
            原住民的生命歷程之中，總會有那麼一段時刻，是渴望尋求血液中的根。我們在現代社會中，持續尋找世代之間的連結，讓長者的文化、青年的創新、族人的支持，藉由共同的努力走到了一起，我們堅信的在路上持續前行！
          </p>
          <Image
            src="/about/about_winning.png"
            layout="responsive"
            width={1200}
            height={400}
            alt=""
            className={styles.img}
          />
        </section>
      </div>
    </div>
  );
};

export default AboutKelju;
