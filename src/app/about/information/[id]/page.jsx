import React from "react";
import styles from "./page.module.scss";

import Image from "next/image";
import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { format } from "date-fns";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";

async function getData(id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/information/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const information = await getData(params.id);
  return {
    title: information.title,
    img: information.img,
    content: information.content,
  };
}

const InformationEach = async ({ params }) => {
  const data = await getData(params.id);
  const breadCrumbs = [
    { name: "首頁", url: "/" },
    { name: "最新消息", url: "/about/information" },
    { name: data.title, url: `/about/information/${data._id}` },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.breadCrumbs}>
        <BreadCrumbs breadCrumbs={breadCrumbs} />
      </div>
      <h1 className={styles.title}>{data.title}</h1>

      <p className={styles.date}>
        撰寫日期：{format(new Date(data.createdAt), "yyyy/MM/dd")}
      </p>

      <div className={styles.line1}></div>

      {data.img ? (
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
      ) : null}

      <div className={styles.content}>
        {/* <p className={styles.text}>{parse(data.content)}</p> */}
        {parse(data.content)}
      </div>
    </div>
  );
};

export default InformationEach;
