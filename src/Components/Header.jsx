import React from "react";
import styles from "./Header.module.css";
import logo from "../Assets/logo.svg";

function Header() {
  return (
    <div className={styles.header}>
      <nav>
        <Link to="/">{{ logo }}</Link>
        <Link to="/login">Login / Criar </Link>
      </nav>
    </div>
  );
}

export default Header;
