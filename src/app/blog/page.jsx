import React from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";

async function getData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
}

const Blog = async () => {
  const data = await getData();
  const breadCrumbs = [
    { name: "首頁", url: "/" },

    { name: "精選文章", url: "/blog" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.breadCrumbs}>
        <BreadCrumbs breadCrumbs={breadCrumbs} />
      </div>
      <h1>- 精選文章 -</h1>
      <div className={styles.itemsContainer}>
        {data?.map((item) => (
          <Link
            href={`/blog/${item._id}`}
            className={styles.itemContainer}
            key={item.id}
          >
            <div className={styles.textAndImgContainer}>
              <div className={styles.textContainer}>
                <p>
                  撰寫日期：{format(new Date(item.createdAt), "yyyy/MM/dd")}
                </p>

                <h2 className={styles.title}>{item.title}</h2>

                {/* 電腦版的desc，手機版沒有 */}
                <p className={styles.desc}>{item.desc}</p>
              </div>
              <div className={styles.imgContainer}>
                <Image
                  src={item.img}
                  alt=""
                  width={200}
                  height={200}
                  className={styles.image}
                />
              </div>
            </div>
            <div className={styles.authorContainer}>
              <Image
                src={item.userImg}
                alt=""
                width={40}
                height={40}
                className={styles.avatar}
              />
              <span className={styles.authorName}>{item.author}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
