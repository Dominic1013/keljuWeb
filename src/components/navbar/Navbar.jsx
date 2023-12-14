"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.scss";
// import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react"; // check the state of session
import { useState } from "react";
import { items } from "./navData";
const links = items.links; // Nav Link array
const authenticatedLinks = items.authenticatedLinks; // Nav authenticatedLinks array

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
    // console.log(isHamburgerChange);
  };

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo} onClick={handleLinkClick}>
        <Image
          src="/logo1.png"
          width={320}
          height={110}
          alt=""
          className={styles.logoImage}
          // layout="fill"
          // layout="responsive"
        ></Image>
      </Link>

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
              key={link.id}
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
