"use client";

import React from "react";
import { useState } from "react";
import styles from "./page.module.scss";
import useSWR from "swr";
import { useSession } from "next-auth/react"; // check the state of session
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const session = useSession(); // check the state of session
  console.log(session); // check the state of session

  const router = useRouter();

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }
  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }
  if (session.status === "authenticated") {
    return <div className={styles.container}>dashboard</div>;
  }
};

export default Dashboard;
