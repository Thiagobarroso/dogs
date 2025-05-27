import React from "react";
import { USER_GET, TOKEN_POST } from "./api"; // ajuste o caminho conforme sua pasta

export const UserContext = React.createContext();

export function UserStorage({ children }) {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          setError(null);
          setLoading(true);
          await getUser(token);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }
    autoLogin();
  }, []);

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
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <UserContext.Provider value={{ userLogin, data, error, loading, login }}>
      {children}
    </UserContext.Provider>
  );
}
