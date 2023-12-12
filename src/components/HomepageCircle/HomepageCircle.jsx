import React from "react";
import styles from "./homepageCircle.module.css";
import Image from "next/image";
import Link from "next/link";

const HomepageCircle = ({ img, alt, title, onclick, href }) => {
  return (
    <Link href={href}>
      <div className={styles.infoCircle}>
        {/* <img src={img} alt={alt} className={styles.circleImg} onClick={onclick} /> */}

        <Image
          src={img}
          alt={alt}
          className={styles.circleImg}
          onClick={onclick}
          width={220}
          height={220}
          // layout="responsive"
        ></Image>
        <h3 className={styles.circleText} onClick={onclick}>
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default HomepageCircle;
