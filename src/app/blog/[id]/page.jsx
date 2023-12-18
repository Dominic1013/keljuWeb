import React from "react";
import styles from "./page.module.scss";

import Image from "next/image";
import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { format } from "date-fns";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";

async function getData(id) {
  const res = await fetch(`https://kelju-web.vercel.app/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  const breadCrumbs = [
    { name: "首頁", url: "/" },
    { name: "精選文章", url: "/blog" },
    { name: data.title, url: `/blog/${data._id}` },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.breadCrumbs}>
        <BreadCrumbs breadCrumbs={breadCrumbs} />
      </div>
      <h1 className={styles.title}>{data.title}</h1>
      <div className={styles.authorAndDateContainer}>
        <div className={styles.authorContainer}>
          <Image
            src={data.userImg}
            alt=""
            width={40}
            height={40}
            className={styles.avatar}
          />
          <span className={styles.authorName}>{data.author}</span>
        </div>
        <p className={styles.date}>
          撰寫日期：{format(new Date(data.createdAt), "yyyy/MM/dd")}
        </p>
      </div>
      <div className={styles.line1}></div>
      <p className={styles.desc}>
        <i>{data.desc}</i>
      </p>
      <div className={styles.line}></div>

      <div className={styles.imageContainer}>
        <Image
          src={data.img}
          alt=""
          width={10}
          height={10}
          layout="responsive"
          className={styles.image}
        />
      </div>
      <div className={styles.line}></div>
      <div className={styles.content}>
        {/* <p className={styles.text}>{parse(data.content)}</p> */}
        {parse(data.content)}
      </div>
    </div>
  );
};

export default BlogPost;
