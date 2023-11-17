import React from "react";
import styles from "./homePageBlog.module.css";
import Button from "../button/Button";
import Link from "next/link";
import Image from "next/image";

const HomePageBlog = ({ data }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.h3}>❖ 精選文章 ❖</h3>
      <div className={styles.blogContainer}>
        <div className={styles.bigBlogContainer}>
          {data && data.length > 0 && (
            <Link href={`/blog/${data[0]._id}`} className={styles.bigBlog}>
              <div className={styles.bigBlogImg}>
                <Image
                  src={data[0].img}
                  alt=""
                  width={330}
                  height={330}
                  layout="responsive"
                ></Image>
              </div>
              <h3 className={styles.blogTitle}>{data[0].title}</h3>
              <p className={styles.blogText}>{data[0].desc}</p>
            </Link>
          )}
        </div>
        <div className={styles.smallBlogContainerAndButton}>
          <div className={styles.smallBlogContainer}>
            {data && data.length > 0 && (
              <Link href={`/blog/${data[1]._id}`} className={styles.smallBlog}>
                <div className={styles.smallBlogImg}>
                  <Image
                    src={data[1].img}
                    alt=""
                    width={330}
                    height={330}
                    layout="responsive"
                  ></Image>
                </div>
                <h3 className={styles.blogTitle}>{data[1].title}</h3>
                <p className={styles.blogText}>{data[1].desc}</p>
              </Link>
            )}
            {data && data.length > 0 && (
              <Link href={`/blog/${data[2]._id}`} className={styles.smallBlog}>
                {/* <img src={data[2].img} alt="" className={styles.smallBlogImg} /> */}
                <div className={styles.smallBlogImg}>
                  <Image
                    src={data[2].img}
                    alt=""
                    width={330}
                    height={330}
                    layout="responsive"
                  ></Image>
                </div>
                <h3 className={styles.blogTitle}>{data[2].title}</h3>
                <p className={styles.blogText}>{data[2].desc}</p>
              </Link>
            )}
          </div>

          <Button url={"#"} text={"點我看更多文章"} />
        </div>
      </div>
    </div>
  );
};

export default HomePageBlog;
