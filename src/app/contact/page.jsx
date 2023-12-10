"use client";

import React from "react";
import styles from "./page.module.scss";
import Button from "@/components/button/Button";
import Image from "next/image";

// export const metadata = {
//   title: "Keliu 革路聚聚 Contact Information",
//   description: "This is Keliu 革路聚聚 Contact Page",
// }; // 這有用嗎？在csr中

// 處理表單事件，用來傳送表單內容的。參考dashboard。

const Contact = () => {
  // handle Submit with contactMessage
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const message = e.target[2].value;

    try {
      let contactMessage = await fetch("/api/contactMessages", {
        // headers: {
        //   "Content-Type": "application/json",
        // },
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });
      console.log(contactMessage);
      if (contactMessage.ok) {
        e.target.reset(); // reset my form

        window.alert("已經成功聯繫囉！人員於一個禮拜內回覆信件");
      } else {
        window.alert("好像失敗了，再檢查一下！");
      }
    } catch (err) {
      window.alert("好像失敗了，再檢查一下！");
    }
  };

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
        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <button className={styles.button}>送出</button>
          {/* <Button url="#" text="送出" /> */}
        </form>
      </div>
    </div>
  );
};

export default Contact;
