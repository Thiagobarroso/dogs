import React from "react";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../userContext";
import Input from "../Forms/Input";
import Button from "../Forms/button";
import { Link } from "react-router-dom";
import Error from "../Helper/Error";
import styles from "./LoginForm.module.css";
import stylesBtn from "../Forms/Button.module.css";

function LoginForm() {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">
        Perdeu a senha?{" "}
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastra-se</h2>
        <p>ainda não possui conta? Cadastra-se no site</p>
      </div>
      <Link
        style={{ display: "inline-block" }}
        className={stylesBtn.button}
        to="/login/criar"
      >
        Cadastro
      </Link>
    </section>
  );
}
export default LoginForm;
