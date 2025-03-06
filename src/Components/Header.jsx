import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../Assets/dogs.svg";

function Header() {
  return (
    <nav className={styles.Header}>
      <Link to="/">
        <img src={Logo} alt="Dogs - Home" aria-label="Dogs - Home" />
      </Link>
      <Link to="/login">Login / Criar </Link>
    </nav>
  );
}

export default Header;
