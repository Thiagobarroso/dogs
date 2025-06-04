import React from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../UserContext";

function UserHeaderNav() {
  const { userLogout } = React.useContext(UserContext);

  return (
    <nav>
      <NavLink to="/conta">Logo</NavLink>
      <NavLink to="/conta/estatisticas">Estatísticas</NavLink>
      <NavLink to="/conta/postar">Postar Foto</NavLink>
      <button onClick={userLogout}>Sair</button>
    </nav>
  );
}

export default UserHeaderNav;
