"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";
// import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react"; // check the state of session

// Nav Link array
const links = [
  {
    id: 1,
    title: "關於我們",
    url: "/about",
  },
  {
    id: 2,
    title: "服務介紹",
    url: "/portfolio",
  },

  {
    id: 3,
    title: "精選文章",
    url: "/blog",
  },
  {
    id: 4,
    title: "聯繫我們",
    url: "/contact",
  },

  {
    id: 5,
    title: "泰武資訊",
    url: "/",
  },
  {
    id: 6,
    title: "後台管理",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const session = useSession(); // check the state of session
  console.log(session); // check the state of session

  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        name=""
        id={"menuControl"}
        className={styles.checkbox}
      />
      <Link href="/" className={styles.logo}>
        <Image
          src="/logo1.png"
          width={320}
          height={110}
          alt=""
          layout="responsive"
        ></Image>
      </Link>
      {/* //Because i dont want add every link  */}

      <div className={styles.links}>
        {/* <DarkModeToggle /> */}
        {links.map((link, index) => {
          return (
            <Link key={link.id} href={link.url} className={styles.link}>
              <h3>{link.title}</h3>
              {index < links.length - 1 && <span>|</span>}
            </Link>
          );
        })}
        {session.status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            登出
          </button>
        )}
      </div>

      <label htmlFor="menuControl" className={styles.hamburger}>
        <span>選單</span>
      </label>
      {/* <div className={styles.social}>
        <Image
          src="/1.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="FB"
          layout="responsive"
        />
        <Image
          src="/2.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="FB"
          layout="responsive"
        />
      </div> */}
    </div>
  );
};

export default Navbar;
