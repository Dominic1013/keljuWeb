"use client";

import React, { useRef } from "react";
import { useState } from "react";
import styles from "./page.module.scss";
import useSWR from "swr";
import { useSession } from "next-auth/react"; // check the state of session
import { useRouter } from "next/navigation";
import Image from "next/image";
import UploadButton from "@/components/uploadButton/UploadButton";
import { format } from "date-fns";

import { Editor } from "@tinymce/tinymce-react";

const InformationWrite = () => {
  const session = useSession(); // check the state of session
  // console.log(session); // check the state of session

  const router = useRouter();

  //messages useState
  const [messages, setMessages] = useState([]); // 全部的messages
  const [currentPage, setCurrentPage] = useState(1);
  const messagesPerPage = 10; // 10 messages in one page

  // use SWR to get our posts in left part of dashboard page
  const fetcher = (...args) =>
    fetch(...args)
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
      });
  const { data, error, isLoading, mutate } = useSWR(
    `/api/information`,
    fetcher
  );

  // form useState
  let [coverPhoto, setCoverPhoto] = useState(null);
  let [userPhoto, setUserPhoto] = useState(null);

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

  const editorRef = useRef(null);
  //test

  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = e.target[0].value;

    const img = coverPhoto;

    const content = editorRef.current ? editorRef.current.getContent() : "";

    try {
      let postThing = await fetch("/api/information", {
        method: "POST",
        body: JSON.stringify({
          title,
          img,
          content,
        }),
      });
      if (postThing.ok) {
        mutate();
        e.target.reset(); // reset my form
        setCoverPhoto(null);

        window.alert("已經成功發佈消息！");
      } else {
        window.alert("好像失敗了，再檢查一下！");
      }
    } catch (err) {
      console.log(err);
      window.alert("好像失敗了，再檢查一下！");
    }
  };
  // 針對現在post的id來進行fetch delete API
  const handleDelete = async (id) => {
    try {
      await fetch(`/api/information/${id}`, {
        method: "DELETE",
      });

      mutate();
    } catch (err) {
      console.log(err);
    }
  };
  const handlePasteCoverPhoto = (e) => {
    e.preventDefault();
    let data = document.getElementById("pasteCoverPhoto");
    // console.log(data.value);
    setCoverPhoto(data.value);
  };
  //tinyMCE init value
  const tinyInit = {
    language: "zh_TW", // local module
    plugins:
      " anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
    toolbar:
      "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
    tinycomments_mode: "embedded",
    tinycomments_author: "Author name",
    mergetags_list: [
      { value: "First.Name", title: "First Name" },
      { value: "Email", title: "Email" },
    ],
    ai_request: (request, respondWith) =>
      respondWith.string(() =>
        Promise.reject("See docs to implement AI Assistant")
      ),
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
        <h2 id="h2">消息瀏覽</h2>
        <div className={styles.posts}>
          {isLoading
            ? "loading"
            : currentMessages?.map((post) => (
                <div className={styles.post} key={post._id}>
                  <div>
                    <p>{format(new Date(post.createdAt), "yyyy/MM/dd")}</p>
                  </div>
                  <div className={styles.postBox}>
                    <h2 className={styles.postTitle}>{post.title}</h2>
                    {post.img ? (
                      <div className={styles.imgContainer}>
                        <Image
                          src={post.img}
                          alt=""
                          layout="responsive"
                          width={200}
                          height={100}
                        />
                      </div>
                    ) : null}
                    <span
                      className={styles.delete}
                      onClick={() => {
                        handleDelete(post._id);
                      }}
                    >
                      X
                    </span>
                  </div>
                </div>
              ))}
        </div>
        <div className={styles.buttons}>
          <div className={styles.arrowContainer}>
            <a
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className={styles.arrow}
              href="#h2"
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
                  href="#h2"
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
              href="#h2"
            >
              &gt;
            </a>
          </div>
        </div>
        <form id="form" className={styles.new} onSubmit={handleSubmit}>
          <h2>新增消息</h2>

          <input type="text" placeholder="title" className={styles.input} />

          <div className={styles.photoInputContainer}>
            <input
              type="text"
              placeholder="*沒有封面圖片請勿填寫"
              className={styles.input}
              id="pasteCoverPhoto"
            />
            <button onClick={handlePasteCoverPhoto}>提交圖片</button>
            <span>or</span>
            <UploadButton setCoverPhoto={setCoverPhoto} />
          </div>

          <div className={styles.previewPhotoContainer}>
            {coverPhoto ? (
              <div className={styles.coverPhoto}>
                <Image
                  src={coverPhoto}
                  alt=""
                  className={styles.coverPhotoImg}
                  width={15}
                  height={15}
                  layout="responsive"
                ></Image>
              </div>
            ) : null}
          </div>
          <a
            className={styles.choosePicture}
            target="_blank"
            href="https://console.cloudinary.com/console/c-3f1c7b93be3e4e68bbcbfce55b13e0/media_library/search?q="
            // href="https://www.youtube.com/watch?v=_r1yA73i2Zs"
          >
            ☞ 進入雲端尋找「圖片網址」
          </a>
          <div className={styles.editorBox}>
            <Editor
              // apiKey={process.env.TINYMCE_API_KEY}
              apiKey="jtn2c3vz5mx0looowtpb32ow59skg9lak8d0x2nfwamyik10"
              selector="textarea"
              init={{ ...tinyInit }}
              initialValue="撰寫消息區"
              onInit={(evt, editor) => (editorRef.current = editor)} // 在初始化時，創建一個引用，將編輯器實例持續引用到current
            />
          </div>
          <button className={styles.button}>發佈</button>
        </form>
      </div>
    );
  }
};

export default InformationWrite;
