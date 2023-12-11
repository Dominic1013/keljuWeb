"use client";

import React from "react";
import { useState, useEffect } from "react";
import styles from "./page.module.scss";
import { format } from "date-fns";
import Link from "next/link";

const Information = () => {
  // const data = await getdata();
  const [messages, setMessages] = useState([]); // 全部的messages
  const [currentPage, setCurrentPage] = useState(1);
  const messagesPerPage = 10; // 10 messages in one page

  useEffect(() => {
    fetch("/api/information")
      .then((res) => res.json())
      .then((data) => setMessages(data)); // 根据您的数据结构调整
  }, []);

  useEffect(() => {
    console.log(messages); // 每當 messages 改變時執行
  }, [messages]);

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

  return (
    <div className={styles.container}>
      <h1 id="h1">最新消息</h1>
      <div>
        <p>第 {currentPage} 頁</p>
      </div>
      <div className={styles.messageContainers}>
        {currentMessages.map((item) => (
          //   <div key={index} className={styles.messageContainer}>
          <Link
            href={`/about/information/${item._id}`}
            className={styles.messageContainer}
            key={item.id}
          >
            <div>
              <p>{format(new Date(item.createdAt), "yyyy/MM/dd")}</p>
            </div>
            <h3>{item.title}</h3>
            {/* <p>{item.content}</p> */}
          </Link>
          //   </div>
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
};

export default Information;
