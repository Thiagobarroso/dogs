import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../Assets/dogs.svg";

function Header() {
  return (
    <header className={`${styles.header}`}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" className={styles.logo}>
          <img src={Logo} alt="Dogs - Home" aria-label="Dogs - Home" />
        </Link>
        <Link to="/Login" className={styles.login}>
          Login / Criar{" "}
        </Link>
      </nav>
    </header>
  );
}

export default Header;
