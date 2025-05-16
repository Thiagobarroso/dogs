import React from "react";
import styles from "./button.module.css";

function button({ children, ...props }) {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
}

export default button;
