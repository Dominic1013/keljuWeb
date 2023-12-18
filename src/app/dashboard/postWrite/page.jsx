"use client";

import React, { useRef } from "react";
import { useState } from "react";
import styles from "./page.module.scss";
import useSWR from "swr";
import { useSession } from "next-auth/react"; // check the state of session
import { useRouter } from "next/navigation";
import Image from "next/image";
import UploadButton from "@/components/uploadButton/UploadButton";
import UserPhotoUploadButton from "@/components/userPhotoUploadButton/UserPhotoUploadButton";

import { Editor } from "@tinymce/tinymce-react";

const PostWrite = () => {
  const session = useSession(); // check the state of session
  // console.log(session); // check the state of session

  const router = useRouter();

  // use SWR to get our posts in left part of dashboard page
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading, mutate } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );
  // console.log(data);

  let [coverPhoto, setCoverPhoto] = useState(null);
  let [userPhoto, setUserPhoto] = useState(null);
  let [submitSuccess, setSubmitSuccess] = useState(null);
  const editorRef = useRef(null);
  //test

  const handleSubmit = async (e) => {
    e.preventDefault();
    const author = e.target[0].value;
    const title = e.target[1].value;
    const desc = e.target[2].value;

    const img = coverPhoto;

    const userImg = userPhoto;

    const content = editorRef.current ? editorRef.current.getContent() : "";

    try {
      let postThing = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          author,
          title,
          desc,
          img,
          userImg,
          content,
          username: session.data.user.name,
        }),
      });
      if (postThing.ok) {
        mutate();
        e.target.reset(); // reset my form
        setCoverPhoto(null);
        setUserPhoto(null);
        window.alert("已經成功發佈文章！");
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
      await fetch(`/api/posts/${id}`, {
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

  const handlePasteUserPhoto = (e) => {
    e.preventDefault();
    let data = document.getElementById("pasteUserPhoto");
    // console.log(data.value);
    setUserPhoto(data.value);
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
        <div className={styles.posts}>
          {isLoading
            ? "loading"
            : data?.map((post) => (
                <div className={styles.post} key={post._id}>
                  <div className={styles.imgContainer}>
                    <Image
                      src={post.img}
                      alt=""
                      layout="responsive"
                      width={200}
                      height={100}
                    />
                  </div>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <span
                    className={styles.delete}
                    onClick={() => {
                      handleDelete(post._id);
                    }}
                  >
                    X
                  </span>
                </div>
              ))}
        </div>
        <form id="form" className={styles.new} onSubmit={handleSubmit}>
          <h2>新增文章</h2>
          <input type="text" placeholder="author" className={styles.input} />
          <input type="text" placeholder="title" className={styles.input} />
          <input type="text" placeholder="desc" className={styles.input} />
          {/* <input type="text" placeholder="image" className={styles.input} /> */}
          <div className={styles.photoInputContainer}>
            <input
              type="text"
              placeholder="貼上作者頭像的雲端網址"
              className={styles.input}
              id="pasteUserPhoto"
            />
            <button onClick={handlePasteUserPhoto}>提交作者頭像</button>
            <span>or</span>
            <UserPhotoUploadButton setUserPhoto={setUserPhoto} />
          </div>

          <div className={styles.photoInputContainer}>
            <input
              type="text"
              placeholder="貼上封面圖片的雲端網址"
              className={styles.input}
              id="pasteCoverPhoto"
            />
            <button onClick={handlePasteCoverPhoto}>提交圖片</button>
            <span>or</span>
            <UploadButton setCoverPhoto={setCoverPhoto} />
          </div>

          <div className={styles.previewPhotoContainer}>
            {userPhoto ? (
              <div className={styles.userPhoto}>
                <Image
                  src={userPhoto}
                  alt=""
                  className={styles.userPhotoImg}
                  width={15}
                  height={15}
                  layout="responsive"
                ></Image>
              </div>
            ) : null}

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
          <Editor
            // apiKey={process.env.TINYMCE_API_KEY}
            apiKey="jtn2c3vz5mx0looowtpb32ow59skg9lak8d0x2nfwamyik10"
            selector="textarea"
            init={{ ...tinyInit }}
            initialValue="撰寫文章區"
            onInit={(evt, editor) => (editorRef.current = editor)} // 在初始化時，創建一個引用，將編輯器實例持續引用到current
          />
          <button className={styles.button}>發佈</button>
        </form>
      </div>
    );
  }
};

export default PostWrite;
