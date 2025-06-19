import React from "react";
import UserHeaderNav from "./UserHeaderNav";
import styles from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";

function UserHeader() {
  const [title, setTitle] = React.useState("");
  const location = useLocation();

  React.useEffect(() => {
    setTitle(location.pathname);
    if (location.pathname === "/conta") {
      setTitle("Conta");
    } else if (location.pathname === "/conta/estatisticas") {
      setTitle("Estatistica");
    } else if (location.pathname === "/conta/postar") {
      setTitle("Postar Foto");
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
}

export default UserHeader;
