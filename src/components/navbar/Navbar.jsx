"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";
// import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react"; // check the state of session
import { useState } from "react";

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

  const [menuState, setMenuState] = useState(false); // nav Links close or not
  const handleLinkClick = () => {
    setMenuState(false);
    setHamburgerChange(false);
  };
  const [isHamburgerChange, setHamburgerChange] = useState(false);

  const handleHamburgerChange = () => {
    setMenuState(!menuState);
    setHamburgerChange(!isHamburgerChange);
    console.log(isHamburgerChange);
  };

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo} onClick={handleLinkClick}>
        <Image
          src="/logo1.png"
          width={320}
          height={110}
          alt=""
          layout="responsive"
        ></Image>
      </Link>
      {/* //Because i dont want add every link  */}

      <div className={styles.links} style={{ left: menuState ? "0" : "-100%" }}>
        {/* <DarkModeToggle /> */}
        {links.map((link, index) => {
          return (
            <Link
              key={link.id}
              href={link.url}
              className={styles.link}
              onClick={handleLinkClick}
            >
              <h3>{link.title}</h3>
            </Link>
          );
        })}
        {session.status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            登出
          </button>
        )}
      </div>

      <label
        htmlFor="menuControl"
        className={`${styles.hamburger} ${
          isHamburgerChange ? styles.hamburgerChange : ""
        }`}
        onClick={handleHamburgerChange}
      ></label>
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
