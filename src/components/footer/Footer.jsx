import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bigItem}>
        <div className={styles.textContainer1}>
          <h3 className={styles.textShopName}>革路聚聚在地共創空間</h3>
          <p className={styles.textTitle}>
            <strong>| 營業時間 |</strong>
          </p>
          <p className={styles.textContent}>&nbsp;預約制</p>

          <p className={styles.textTitle}>
            <strong>| 地址 |</strong>
          </p>
          <p className={styles.textContent}>&nbsp;屏東縣萬巒鄉大武山一街5號</p>
          <p className={styles.textContent}>&nbsp;[5號貨櫃屋]</p>
          <p className={styles.textTitle}>
            <strong>| 電話 |</strong>
          </p>
          <p className={styles.textContent}>&nbsp;0934151550</p>
          <p className={styles.textTitle}>
            <strong>| Email |</strong>
          </p>
          <p className={styles.textContent}>&nbsp;keljukelju112@gmail.com</p>
        </div>
        <div className={styles.textContainer2}>
          <h3 className={styles.textShopName}>革路聚聚在地選物店</h3>
          <p className={styles.textTitle}>
            <strong>| 營業時間 |</strong>
          </p>
          <p className={styles.textContent}>預約制&nbsp;</p>

          <p className={styles.textTitle}>
            <strong>| 地址 |</strong>
          </p>
          <p className={styles.textContent}>&nbsp;屏東縣萬巒鄉大武山一街5號</p>
          <p className={styles.textContent}>&nbsp;[6號貨櫃屋]</p>
          <p className={styles.textTitle}>
            <strong>| 電話 |</strong>
          </p>
          <p className={styles.textContent}>0934151550&nbsp;</p>
          <p className={styles.textTitle}>
            <strong>| Email |</strong>
          </p>
          <p className={styles.textContent}>keljukelju112@gmail.com&nbsp;</p>
        </div>
      </div>
      <div className={styles.smallItem}>
        <div>
          <Image
            src="/logoCircle.png"
            width={320}
            height={110}
            alt=""
            layout="responsive"
          ></Image>
        </div>
        <div className={styles.social}>
          <Link
            href="https://www.facebook.com/keljutaiwu"
            target="_blank"
            className={styles.icon}
          >
            <Image
              src="/1.png"
              width={15}
              height={15}
              layout="responsive"
              alt="FB"
            />
          </Link>
          <Link
            href="https://www.instagram.com/kelju_kelju/"
            target="_blank"
            className={styles.icon}
          >
            <Image
              src="/2.png"
              width={15}
              height={15}
              layout="responsive"
              alt="IG"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
