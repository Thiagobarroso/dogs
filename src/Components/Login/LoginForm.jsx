import React from "react";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../userContext";
import Input from "../Forms/Input"; // Certifique-se de importar o Input
import Button from "../Forms/button"; // Certifique-se de importar o Button
import { Link } from "react-router-dom"; // Certifique-se de importar o Link

function LoginForm() {
  const username = useForm();
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />

        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </div>
  );
}

export default LoginForm;
