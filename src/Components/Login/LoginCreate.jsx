import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/button";

function LoginCreate() {
  const username = useForm();
  const email = useForm("email");
  const password = useForm("password");

  function handleSumit(event) {
    event.preventDefault();
    console.log("Formulário enviado");
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>

      <form onSubmit={handleSumit}>
        <Input label="Usuario" type="text" name="username" />
        <Button>Cadastrar</Button>
      </form>
    </section>
  );
}

export default LoginCreate;
