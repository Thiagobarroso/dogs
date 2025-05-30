import React from "react";
import { USER_GET, TOKEN_POST, TOKEN_VALIDATE_POST } from "./api"; // ajuste o caminho conforme sua pasta
import { useNavigate } from "react-router-dom";
export const UserContext = React.createContext();

export function UserStorage({ children }) {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options); // Verifica se o token é válido
          if (!response.ok) throw new Error("Token inválido");
          getUser(token); // Se for válido, busca os dados do usuário
        } catch (err) {
          setError(err.message);
          setLogin(false);
          setData(null);
          window.localStorage.removeItem("token");
        } finally {
          setLoading(false);
        }
      }
    }
    autoLogin();
  }, []); // Executa apenas uma vez ao montar o componente

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);

      const { url, options } = TOKEN_POST({ username, password });
      const response = await fetch(url, options);
      const json = await response.json();

      if (!response.ok) throw new Error("Usuário inválido");

      window.localStorage.setItem("token", json.token);
      await getUser(json.token);
      navigate("/conta");
    } catch (err) {
      setError(err.message);
      setLogin(false);
      // userLogout(); <- só chame se realmente necessário
    } finally {
      setLoading(false);
    }
  }

  async function userLogout() {
    setData(null);
    setLogin(false);
    setError(null);
    window.localStorage.removeItem("token");
    navigate("/Login");
  }

  return (
    <UserContext.Provider
      value={{ userLogin, data, error, loading, login, userLogin, userLogout }}
    >
      {children}
    </UserContext.Provider>
  );
}
