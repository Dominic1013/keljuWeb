import React from "react";
import styles from "./page.module.scss";
import Button from "@/components/button/Button";
import Image from "next/image";

export const metadata = {
  title: "Keliu 革路聚聚 Contact Information",
  description: "This is Keliu 革路聚聚 Contact Page",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>與 我 們 聯 繫 ！ </h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/connect/connect_discuss.png"
            alt=""
            // fill={true}
            layout="responsive"
            width={500}
            height={800}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" text="送出" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
