import React from "react";
import styles from "./homepageCircle.module.css";
import Image from "next/image";

const HomepageCircle = ({ img, alt, title, onclick }) => {
  return (
    <div className={styles.infoCircle}>
      {/* <img src={img} alt={alt} className={styles.circleImg} onClick={onclick} /> */}
      <Image
        src={img}
        alt={alt}
        className={styles.circleImg}
        onClick={onclick}
        width={15}
        height={15}
        layout="responsive"
      ></Image>
      <h3 className={styles.circleText} onClick={onclick}>
        {title}
      </h3>
    </div>
  );
};

export default HomepageCircle;
