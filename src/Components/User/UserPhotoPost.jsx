import React from "react";
import styles from "./userPhotoPost.module.css";
import Input from "../Forms/Input";
import Button from "../Forms/button";
import useForm from "../../Hooks/useForm";
import useFatch from "../../Hooks/useFetch";
import { PHOTO_POST } from "../../api";
import { useNavigate } from "react-router-dom";

function UserPhotoPost() {
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = React.useState({});
  const { data, error, loading, request } = useFatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate("/conta");
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);

    request(url, options).then((response) => {
      if (response && response.ok) {
        // Limpa os campos apenas se o upload foi bem-sucedido
        nome.setValue("");
        peso.setValue("");
        idade.setValue("");
        setImg({});
      }
    });
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <Input
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />
        <Button disabled={loading}>{loading ? "Enviando..." : "Enviar"}</Button>
      </form>

      {error && <p className="error">{error}</p>}

      {img.preview && (
        <div
          className={styles.preview}
          style={{ backgroundImage: `url('${img.preview}')` }}
        ></div>
      )}
    </section>
  );
}

export default UserPhotoPost;
