import PropTypes from "prop-types";
import React, { useState } from "react";

const validacao = {
  email: {
    regex: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
    message: "Preencha um email válido",
  },
  password: {
    regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    message: "A senha deve ter pelo menos 8 caracteres, uma letra e um número",
  },
  number: {
    regex: /^\d+$/,
    message: "Utilize apenas números",
  },
};

const useForm = (type) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError("Campo obrigatório");
      return false;
    } else if (validacao[type] && !validacao[type].regex.test(value)) {
      setError(validacao[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  const onChange = ({ target }) => {
    if (error) validate(target.value);
    setValue(target.value);
  };

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
