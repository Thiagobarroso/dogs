import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import Dogs from "../Assets/dogs.svg";
import { UserContext } from "../UserContext";

function Header() {
  const { data, userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout() {
    userLogout();
    navigate("/login");
  }

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <img src={Dogs} alt="Logo Dogs" />
        </Link>

        {data ? (
          <div className={styles.login}>
            <Link to="/conta">{data.nome}</Link>
            <button onClick={handleLogout}>Sair</button>
          </div>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
