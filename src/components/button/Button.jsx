import React from "react";
import styles from "./button.module.css";
import Link from "next/link";

const Button = ({ url, text }) => {
  return (
    <div className={styles.container}>
      <Link href={url}>{text}</Link>
    </div>
  );
};

export default Button;
