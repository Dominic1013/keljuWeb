import React from "react";
import Link from "next/link";
import styles from "./BreadCrumbs.module.scss";

const BreadCrumbs = ({ breadCrumbs }) => {
  return (
    <div className={styles.container}>
      <ol className={styles.ol}>
        {breadCrumbs?.map((breadCrumb, index) => (
          <li className={styles.li}>
            <Link href={breadCrumb.url} className={styles.link}>
              {breadCrumb.name}
            </Link>
            {breadCrumbs?.length - 1 !== index && (
              <p className={styles.seperate}>/</p>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default BreadCrumbs;
