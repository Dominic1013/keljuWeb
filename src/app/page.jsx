"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import ImgSlider from "@/components/ImgSlider/ImgSlider";
import { useState } from "react";
import Link from "next/link";
import useSWR from "swr";

import HomepageCircle from "@/components/HomepageCircle/HomepageCircle";

export default function Home() {
  const themes = [
    //搞到這邊
    {
      title: "工藝商品",
      content1: "來自在地vuvu的匠心之作。",
      content2:
        "以工藝品作為載體，\n將排灣文化的古老生命經驗，\n融進作品之中，\n述說泰武鄉千百年的記憶與故事。",
      circleImgUrl: "/co-space.jpeg",
      infoImgUrl: "/co-space.jpeg",
      buttonUrl: "#",
      buttonText: "技藝與記憶",
    },
    {
      title: "風土旅行",
      content1: "了解一個地方真正的生活文化。",
      content2:
        "透過深度旅行，\n看見文化與生活的堅韌，\n這塊土地長出來的美麗姿態，\n等你一同來感受。",
      circleImgUrl: "/travel.jpeg",
      infoImgUrl: "/travel.jpeg",
      buttonUrl: "#",
      buttonText: "山的約定",
    },
    {
      title: "青年培力",
      content1: "溫柔地接住所有回來的孩子。",
      content2:
        "我們設計青年輔導諮詢系統，\n從產業夥伴、社工、青年會，\n帶著青年一步一步落地、串接在地就業，\n回到血液中的根，生命的住所。",
      circleImgUrl: "/youthEmpower.jpg",
      infoImgUrl: "/youthEmpower.jpg",
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
  console.log(data);

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
            />
          ))}
        </div>
      </section>

      <section className={styles.infoCardsChange}>
        {/* 這裡根據圓形的圖片來放上不同的主題資訊，使用useState來抓住狀態 */}
        {selectedTheme && (
          <div className={styles.infoCard}>
            <div className={styles.infoCardWordContainer}>
              <h3 className={styles.infoCardTitle}>◎{selectedTheme.title}◎</h3>
              <p className={styles.infoCardContent}>{selectedTheme.content1}</p>
              <p className={styles.infoCardContent}>{selectedTheme.content2}</p>
              <Button
                url={selectedTheme.buttonUrl}
                text={selectedTheme.buttonText}
              />
            </div>
            <div className={styles.infoCardImgContainer}>
              <img
                src={selectedTheme.infoImgUrl}
                alt={selectedTheme.title}
                className={styles.infoCardImg}
              />
            </div>
          </div>
        )}
      </section>

      <section className={styles.blogSection}>
        <h3 className={styles.h3}>❖ 精選文章 ❖</h3>
        <div className={styles.blogContainer}>
          <div className={styles.bigBlogContainer}>
            {data && data.length > 0 && (
              <Link href={`/blog/${data[0]._id}`} className={styles.bigBlog}>
                <img src={data[0].img} alt="" className={styles.bigBlogImg} />
                <h3 className={styles.blogTitle}>{data[0].title}</h3>
                <p className={styles.blogText}>{data[0].desc}</p>
              </Link>
            )}
          </div>
          <div className={styles.smallBlogContainerAndButton}>
            <div className={styles.smallBlogContainer}>
              {data && data.length > 0 && (
                <Link
                  href={`/blog/${data[1]._id}`}
                  className={styles.smallBlog}
                >
                  <img
                    src={data[1].img}
                    alt=""
                    className={styles.smallBlogImg}
                  />
                  <h3 className={styles.blogTitle}>{data[1].title}</h3>
                  <p className={styles.blogText}>{data[1].desc}</p>
                </Link>
              )}
              {data && data.length > 0 && (
                <Link
                  href={`/blog/${data[2]._id}`}
                  className={styles.smallBlog}
                >
                  <img
                    src={data[2].img}
                    alt=""
                    className={styles.smallBlogImg}
                  />
                  <h3 className={styles.blogTitle}>{data[2].title}</h3>
                  <p className={styles.blogText}>{data[2].desc}</p>
                </Link>
              )}
            </div>

            <Button url={"#"} text={"點我看更多文章"} />
          </div>
        </div>
      </section>
    </div>
  );
}
