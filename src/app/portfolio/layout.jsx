import React from "react";
import styles from "./page.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <h3 className={styles.mainTitle}>服務介紹</h3>
      {children}
    </div>
  );
};

export default Layout;
