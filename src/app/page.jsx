"use client";

import styles from "./page.module.scss";

import ImgSlider_slick from "@/components/ImgSlider_slick/ImgSlider_slick";

import { useState, useRef, useEffect } from "react";

import useSWR from "swr";

import HomepageCircle from "@/components/HomepageCircle/HomepageCircle";
import InfoCard from "@/components/InfoCard/InfoCard";
import HomePageBlog from "@/components/HomePageBlog/HomePageBlog";
import { items } from "./themesData";

export default function Home() {
  const { themes } = items;

  const [selectedTheme, setSelectedTheme] = useState(themes[0]);
  const handleCircleClick = (theme) => {
    setSelectedTheme(theme);
  };

  //useSWR to get blogs
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(`/api/posts`, fetcher);

  // 處理加載和錯誤狀態
  if (error) return <div>加載出錯</div>;
  if (!themes) return <div>加載中...</div>;

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  // ... 為每個區塊創建更多的 ref

  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  // ... 為每個區塊創建更多的狀態

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === ref1.current && !isVisible1) {
              setIsVisible1(true); // 只有在首次進入視口時改變狀態
            }
            if (entry.target === ref2.current && !isVisible2) {
              setIsVisible2(true); // 只有在首次進入視口時改變狀態
            }
            if (entry.target === ref3.current && !isVisible3) {
              setIsVisible3(true); // 只有在首次進入視口時改變狀態
            }
            // 為其他元素重複此邏輯
          }
          // ... 為每個區塊添加更多的條件判斷
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (ref1.current) {
      observer.observe(ref1.current);
    }
    if (ref2.current) {
      observer.observe(ref2.current);
    }
    if (ref3.current) {
      observer.observe(ref3.current);
    }
    // ... 為每個區塊添加更多的觀察

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.container}>
      {/* <ImgSlider /> */}
      <ImgSlider_slick />

      <section
        className={`${styles.infoSection} ${styles.fadeIn} ${
          isVisible1 ? styles.visible : ""
        }`}
        ref={ref1}
      >
        <h3 className={styles.h3}>❖ 遊玩主題 ❖</h3>
        <div className={styles.infoCircles}>
          {/* 這用themes.map來做出themeComponent，並且用theme放上所有的圖形跟文字 */}

          {themes.map((theme) => (
            <HomepageCircle
              key={theme.title}
              img={theme.circleImgUrl}
              alt={theme.title}
              title={theme.title}
              onclick={() => handleCircleClick(theme)} // 抓到個別circle的物件
              href="#card"
            />
          ))}
        </div>
      </section>

      <section
        className={`${styles.infoCardsSection} ${styles.fadeIn} ${
          isVisible2 ? styles.visible : ""
        }`}
        ref={ref2}
      >
        {/* 這裡根據圓形的圖片來放上不同的主題資訊，使用useState來抓住狀態 */}
        {selectedTheme && (
          <InfoCard selectedTheme={selectedTheme} key={selectedTheme.title} />
        )}
      </section>

      <section
        className={`${styles.blogSection} ${styles.fadeIn} ${
          isVisible3 ? styles.visible : ""
        }`}
        ref={ref3}
      >
        <HomePageBlog data={data} />
      </section>
    </div>
  );
}
