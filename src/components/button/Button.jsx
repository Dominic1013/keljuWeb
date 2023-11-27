import React from "react";
import styles from "./button.module.css";
import Link from "next/link";

// fontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
// import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas);
import "@fortawesome/fontawesome-svg-core/styles.css"; // 导入FontAwesome的CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ url, text }) => {
  return (
    <div className={styles.container}>
      <Link href={url} className={styles.link}>
        {text}
        <div>
          <FontAwesomeIcon icon="fa-solid fa-arrow-pointer" />
        </div>
      </Link>
    </div>
  );
};

export default Button;
