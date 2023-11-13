// src/pages/index.js
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./ImgSlider.module.css"; // 引入 CSS 模块

const images = [
  "/change1.png",
  "/change2.jpg",
  "/change3.jpg",
  "/change4.jpg",
  // 添加更多图片路径
];

export default function ImgSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 每5秒切换图片

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.slider}>
      {images.map((src, index) => (
        <div
          key={src}
          className={`${styles.slide} ${
            index === currentImageIndex ? styles.active : ""
          }`}
        >
          <Image
            src={src}
            alt={`Slide ${index}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
      ))}
      {/* 其他内容 */}
    </div>
  );
}
