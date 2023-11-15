"use client";

import { signIn } from "next-auth/react";
import React from "react";
import styles from "./page.module.css";
import { useState } from "react";
import { useSession } from "next-auth/react"; // check the state of session
import { useRouter } from "next/navigation";

const Login = () => {
  const [error, setError] = useState("");
  const session = useSession();
  console.log(session);

  const router = useRouter();

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  // handle our local login data to our [...nextauth].js
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn("credentials", {
      email,
      password,
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>建立帳號</h1>
      <h2 className={styles.subtitle}>請進行登入才能進入管理頁面</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button className={styles.button}>登入</button>
        {error && "Something went wrong!"}
      </form>

      <button
        onClick={() => {
          signIn("google");
        }}
      >
        Login with Google
      </button>
    </div>
  );
};

export default Login;

// 老師的
// "use client";
// import React, { useEffect, useState } from "react";
// import styles from "./page.module.css";
// import { getProviders, signIn, useSession } from "next-auth/react";
// import { useRouter, useSearchParams } from "next/navigation";
// import Link from "next/link";

// const Login = ({ url }) => {
//   const session = useSession();
//   const router = useRouter();
//   const params = useSearchParams();
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   useEffect(() => {
//     setError(params.get("error"));
//     setSuccess(params.get("success"));
//   }, [params]);

//   if (session.status === "loading") {
//     return <p>Loading...</p>;
//   }

//   if (session.status === "authenticated") {
//     router?.push("/dashboard");
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const email = e.target[0].value;
//     const password = e.target[1].value;

//     signIn("credentials", {
//       email,
//       password,
//     });
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>{success ? success : "Welcome Back"}</h1>
//       <h2 className={styles.subtitle}>Please sign in to see the dashboard.</h2>

//       <form onSubmit={handleSubmit} className={styles.form}>
//         <input
//           type="text"
//           placeholder="Email"
//           required
//           className={styles.input}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           required
//           className={styles.input}
//         />
//         <button className={styles.button}>Login</button>
//         {error && error}
//       </form>
//       <button
//         onClick={() => {
//           signIn("google");
//         }}
//         className={styles.button + " " + styles.google}
//       >
//         Login with Google
//       </button>
//       <span className={styles.or}>- OR -</span>
//       <Link className={styles.link} href="/dashboard/register">
//         Create new account
//       </Link>
//       {/* <button
//         onClick={() => {
//           signIn("github");
//         }}
//         className={styles.button + " " + styles.github}
//       >
//         Login with Github
//       </button> */}
//     </div>
//   );
// };

// export default Login;
