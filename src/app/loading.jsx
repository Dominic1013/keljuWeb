import React from "react";
import Image from "next/image";
import styles from "./loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <Image
        src="/logoCircle.png"
        width={300}
        height={300}
        className={styles.img}
      ></Image>
    </div>
  );
};

export default Loading;
