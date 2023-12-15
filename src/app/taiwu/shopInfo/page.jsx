import React from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import Image from "next/image";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import { items } from "./shopData";
const links = items.links;

const ShopInfo = () => {
  const breadCrumbs = [
    { name: "首頁", url: "/" },
    { name: "合作店家", url: "/taiwu/shopInfo" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.breadCrumbs}>
        <BreadCrumbs breadCrumbs={breadCrumbs} />
      </div>
      <h1>⁃ 合作店家 ⁃</h1>

      <div className={styles.category}>
        <p>泰武鄉</p>
      </div>
      <section className={styles.shopsContainer}>
        {links.map((item) => {
          return (
            <div className={styles.item}>
              <div className={styles.imgLinkContainer}>
                <Link
                  href={`/taiwu/shopInfo/${item.id}`}
                  className={styles.imgLink}
                >
                  <Image
                    layout="responsive"
                    width={200}
                    height={100}
                    src={item.img}
                    className={styles.img}
                    alt=""
                  ></Image>
                </Link>
              </div>
              <h3>{item.shopName}</h3>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default ShopInfo;
