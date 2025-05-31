import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/button";
import useForm from "../../Hooks/useForm";

function LoginCreate() {
  const username = useForm();
  const email = useForm("email");
  const password = useForm("password");

  async function handleSubmit(event) {
    event.preventDefault();

    const user = {
      username: username.value,
      email: email.value,
      password: password.value,
    };

    try {
      const response = await fetch("https://api.example.com/create-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>

      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Cadastrar</Button>
      </form>
    </section>
  );
}

export default LoginCreate;
