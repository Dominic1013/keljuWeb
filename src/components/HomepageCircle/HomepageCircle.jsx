import React from "react";
import styles from "./homepage.module.css";

const HomepageCircle = ({ img, alt, title, onclick }) => {
  return (
    <div className={styles.infoCircle}>
      <img src={img} alt={alt} className={styles.circleImg} onClick={onclick} />
      <h3 className={styles.circleText} onClick={onclick}>
        {title}
      </h3>
    </div>
  );
};

export default HomepageCircle;
