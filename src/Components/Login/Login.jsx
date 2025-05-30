import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";
import { UserContext } from "../../userContext";
import styles from "./Login.module.css";

function Login() {
  const { Login } = React.useContext(UserContext);

  if (Login === true) return <Navigate to="/conta" replace />;

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/criar" element={<LoginCreate />} />
          <Route path="/perdeu" element={<LoginPasswordLost />} />
          <Route path="/senha" element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  );
}

export default Login;
