import React from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import MinhasFotos from "../../Assets/feed.svg";
import Estatistica from "../../Assets/estatisticas.svg";
import Postar from "../../Assets/adicionar.svg";
import Sair from "../../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";
import { func } from "prop-types";

function UserHeaderNav() {
  const [mobile, setMobile] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout() {
    userLogout();
    navigate("/login");
  }

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end>
        <img src={MinhasFotos} alt="Minhas Fotos" />
        {mobile && "Minhas Fotos"}
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <img src={Estatistica} alt="Estatísticas" />
        {mobile && "Estatísticas"}
      </NavLink>
      <NavLink to="/conta/postar">
        <img src={Postar} alt="Adicionar foto" />
        {mobile && "Adicionar Foto"}
      </NavLink>
      <button onClick={handleLogout}>
        <img src={Sair} alt="Sair" />
        {mobile && "Sair"}
      </button>
    </nav>
  );
}

export default UserHeaderNav;
