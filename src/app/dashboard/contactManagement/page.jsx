"use client";

import React from "react";
import { useState, useEffect } from "react";
import styles from "./page.module.scss";
import { useSession } from "next-auth/react"; // check the state of session
import { useRouter } from "next/navigation";

const ContactManagement = () => {
  const session = useSession(); // check the state of session

  const [messages, setMessages] = useState([]); // 全部的messages
  const [currentPage, setCurrentPage] = useState(1);
  const messagesPerPage = 6; // 6 messages in one page

  useEffect(() => {
    fetch("/api/contactMessages")
      .then((res) => res.json())
      .then((data) => setMessages(data)); // 根据您的数据结构调整
  }, []);

  // 分頁邏輯
  const indexOfLastMessage = currentPage * messagesPerPage; //index:6, 12, 18... slice會排除此數，選前一個
  const indexOfFirstMessage = indexOfLastMessage - messagesPerPage; //index:0, 6, 12, 18... slice會選擇此數
  const currentMessages = messages.slice(
    indexOfFirstMessage,
    indexOfLastMessage // 排除所選的end，所以只會有6個messages
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const wholePageLength = Math.ceil(messages.length / messagesPerPage);
  // arrow
  const goToPreviousPage = () => {
    setCurrentPage((currentPage) => Math.max(1, currentPage - 1));
  };

  const goToNextPage = () => {
    setCurrentPage((currentPage) => Math.min(wholePageLength, currentPage + 1));
    //ceil的目的是將不足一頁的messages直接算成一頁。
  };

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }
  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }
  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <h1 id="h1">聯繫管理</h1>
        <div>
          <p>第 {currentPage} 頁</p>
        </div>
        <div className={styles.messageContainers}>
          {currentMessages.map((item, index) => (
            <div key={index} className={styles.messageContainer}>
              <h3>from: {item.name}</h3>
              <p>
                <strong>Email:</strong> {item.email}
              </p>
              <p>
                <strong>Message:</strong> {item.message}
              </p>
            </div>
          ))}
        </div>
        <div className={styles.buttons}>
          <div className={styles.arrowContainer}>
            <a
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className={styles.arrow}
              href="#h1"
            >
              &lt;
            </a>
          </div>
          {Array.from(
            { length: wholePageLength }, // 總頁數
            (
              _,
              i // i is index
            ) => (
              <div className={styles.paginateContainer}>
                <a
                  key={i}
                  onClick={() => paginate(i + 1)} // i+1＝實際頁數, i為index。
                  className={styles.paginate}
                  href="#h1"
                >
                  {i + 1}
                </a>
              </div>
            )
          )}
          <div className={styles.arrowContainer}>
            <a
              onClick={goToNextPage}
              disabled={currentPage === wholePageLength}
              className={styles.arrow}
              href="#h1"
            >
              &gt;
            </a>
          </div>
        </div>
      </div>
    );
  }
};

export default ContactManagement;
