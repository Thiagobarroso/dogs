import React from "react";
import styles from "./Input.module.css";

function Input({ label, type, name }) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input id={name} name={name} className={styles.input} type={type} />
      <p className={styles.error}>error</p>
    </div>
  );
}

export default Input;
