"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import Button from "@/components/button/Button";
import ImgSlider from "@/components/ImgSlider/ImgSlider";
import { useState } from "react";
import Link from "next/link";
import useSWR from "swr";

import HomepageCircle from "@/components/HomepageCircle/HomepageCircle";
import InfoCard from "@/components/InfoCard/InfoCard";
import HomePageBlog from "@/components/HomePageBlog/HomePageBlog";

export default function Home() {
  const themes = [
    {
      title: "工藝商品",
      content1: "來自在地vuvu的匠心之作。",
      content2:
        "以工藝品作為載體，\n將排灣文化的古老生命經驗，\n融進作品之中，\n述說泰武鄉千百年的記憶與故事。",
      circleImgUrl: "/co-space.jpg",
      infoImgUrl: "/co-space.jpg",
      buttonUrl: "#",
      buttonText: "技藝與記憶",
    },
    {
      title: "風土旅行",
      content1: "了解一個地方真正的生活文化。",
      content2:
        "透過深度旅行，\n看見文化與生活的堅韌，\n這塊土地長出來的美麗姿態，\n等你一同來感受。",
      circleImgUrl: "/travel.jpg",
      infoImgUrl: "/travel.jpg",
      buttonUrl: "#",
      buttonText: "山的約定",
    },
    {
      title: "青年培力",
      content1: "溫柔地接住所有回來的孩子。",
      content2:
        "我們設計青年輔導諮詢系統，\n從產業夥伴、社工、青年會，\n帶著青年一步一步落地、串接在地就業，\n回到血液中的根，生命的住所。",
      circleImgUrl: "/youthEmpower2.jpg",
      infoImgUrl: "/youthEmpower2.jpg",
      buttonUrl: "#",
      buttonText: "回家的門",
    },
    {
      title: "產業串連",
      content1: "在地夥伴一起走出好大的力量。",
      content2:
        "舉辦青年小聚，\n從吃喝玩樂到實現夢想，\n我們一同合作長出產業共創計畫，\n實現共享、共好的傳統價值。",
      circleImgUrl: "/speak.jpg",
      infoImgUrl: "/speak.jpg",
      buttonUrl: "#",
      buttonText: "合作共好",
    },
  ];

  //useState to get CircleInfoChange
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

  return (
    <div className={styles.container}>
      <ImgSlider />

      <section className={styles.infoSection}>
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

      <section className={styles.infoCardsSection}>
        {/* 這裡根據圓形的圖片來放上不同的主題資訊，使用useState來抓住狀態 */}
        {selectedTheme && (
          <InfoCard selectedTheme={selectedTheme} key={selectedTheme.title} />
        )}
      </section>

      <section className={styles.blogSection}>
        <HomePageBlog data={data} />
      </section>
    </div>
  );
}
