"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.scss";
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
    sublinks: [
      {
        id: 101,
        title: "關於革路",
        url: "/about",
      },
      {
        id: 102,
        title: "最新消息",
        url: "/about/news", // 還沒寫
      },
    ],
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
    url: "/taiwu", // 還沒寫 記得把它變成一個資料夾，裡面放兩個內容。
    sublinks: [
      {
        id: 501,
        title: "泰武資料",
        url: "/taiwu/taiwuInfo", // 還沒寫
      },
      {
        id: 502,
        title: "合作商家",
        url: "/taiwu/shopInfo", // 還沒寫
      },
    ],
  },
];

const authenticatedLinks = [
  {
    id: 6,
    title: "後台管理",
    url: "/dashboard", // 做成一個資料夾，原本的頁面要記得轉成「文章撰寫」的頁面
    sublinks: [
      {
        id: 601,
        title: "消息撰寫",
        url: "/dashboard/newsWrite", // 還沒寫
      },
      {
        id: 602,
        title: "文章撰寫",
        url: "/dashboard/postWrite", //
      },
      { id: 603, title: "聯繫管理", url: "/dashboard/contactManagement" },
    ],
  },
];

const Navbar = () => {
  const session = useSession(); // check the state of session
  // console.log(session); // check the state of session

  const [menuState, setMenuState] = useState(false); // nav Links close or not
  const [subMenuState, setSubMenuState] = useState(null);
  const [clickedLinkId, setClickedLinkId] = useState(null);
  //處理 1.有沒有subMenu, 開啟subMenu
  // const handleSubMenuClick = (id, hasSublinks) => {
  //   if (hasSublinks) {
  //     // check SubMenu click
  //     if (subMenuState === id) {
  //       setSubMenuState(null); //若已經展開sub，關閉
  //     } else {
  //       setSubMenuState(id); //若沒有展開sub，打開
  //     }
  //   } else {
  //     handleLinkClick(); //若沒有sub，直接處理連結
  //   }
  // };

  const handleSubMenuClick = (id, hasSublinks, event) => {
    if (hasSublinks) {
      // prevent href
      event.preventDefault();
      setClickedLinkId(id);

      if (subMenuState === id) {
        setSubMenuState(null); //  if open sublinks, close it
      } else {
        setSubMenuState(id); // or open it
      }
    } else {
      handleLinkClick(); //若沒有sub，直接處理連結
    }
  };

  const handleLinkClick = () => {
    setMenuState(false);
    setHamburgerChange(false);
    setSubMenuState(null); // close sublinks
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
            <div
              className={styles.linkContainer}
              // for PC user
              onMouseEnter={() =>
                link.sublinks?.length > 0 && setSubMenuState(link.id)
              }
              onMouseLeave={() => setSubMenuState(null)}
            >
              <Link
                key={link.id}
                href={link.url}
                // className={styles.link}
                className={`${styles.link} ${
                  clickedLinkId === link.id ? styles.clickedLink : ""
                }`}
                // for Mobile user
                onClick={(e) =>
                  handleSubMenuClick(link.id, link.sublinks?.length > 0, e)
                }
              >
                <h3>{link.title}</h3>
              </Link>

              {/* 這是subMenu */}
              {link.sublinks && subMenuState === link.id && (
                <div className={styles.subLinks}>
                  {link.sublinks.map((sublink) => (
                    <Link
                      className={styles.subLink}
                      key={sublink.id}
                      href={sublink.url}
                      onClick={handleLinkClick}
                    >
                      ▸ {sublink.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {session.status === "authenticated" && (
          // dashboard link
          <div className={styles.authenticatedLinks}>
            {authenticatedLinks.map((link, index) => {
              return (
                <div
                  className={styles.linkContainer}
                  // for PC user
                  onMouseEnter={() =>
                    link.sublinks?.length > 0 && setSubMenuState(link.id)
                  }
                  onMouseLeave={() => setSubMenuState(null)}
                >
                  <Link
                    key={link.id}
                    href={link.url}
                    // className={styles.link}
                    className={`${styles.link} ${
                      clickedLinkId === link.id ? styles.clickedLink : ""
                    }`}
                    // for Mobile user
                    onClick={(e) =>
                      handleSubMenuClick(link.id, link.sublinks?.length > 0, e)
                    }
                  >
                    <h3>{link.title}</h3>
                  </Link>

                  {/* 這是subMenu */}
                  {link.sublinks && subMenuState === link.id && (
                    <div className={styles.subLinks}>
                      {link.sublinks.map((sublink) => (
                        <Link
                          className={styles.subLink}
                          key={sublink.id}
                          href={sublink.url}
                          onClick={handleLinkClick}
                        >
                          ▸ {sublink.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <button className={styles.logout} onClick={signOut}>
              登出
            </button>
          </div>
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
