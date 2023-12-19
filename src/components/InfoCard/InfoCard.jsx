import React from "react";
import styles from "./infoCard.module.scss";
import Button from "../button/Button";
import Image from "next/image";

const InfoCard = ({ selectedTheme }) => {
  return (
    <div className={styles.container} id="card">
      <div className={styles.infoCardWordContainer}>
        <h3 className={styles.infoCardTitle}>◎{selectedTheme.title}◎</h3>
        <p className={styles.infoCardContent1}>{selectedTheme.content1}</p>
        <p className={styles.infoCardContent2}>{selectedTheme.content2}</p>
        <Button url={selectedTheme.buttonUrl} text={selectedTheme.buttonText} />
      </div>
      <div className={styles.infoCardImgContainer}>
        <Image
          src={selectedTheme.infoImgUrl}
          alt={selectedTheme.title}
          className={styles.infoCardImg}
          width={340}
          height={340}
          layout="responsive"
        ></Image>
      </div>
    </div>
  );
};

export default InfoCard;
