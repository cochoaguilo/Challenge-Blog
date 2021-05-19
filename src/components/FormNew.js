import React, { useState } from "react";
import Header from "./Header";

const FormNew = () => {
  const [data, saveData] = useState({
    title: "",
    content: "",
  });

  const { title, content} = data;

  const onChange = (e) => {
    saveData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (title === "" || content === "") {
      alert("Todos los campos son obligatorios");
      return;
    }

    fetch('https://jsonplaceholder.typicode.com/posts')
    window.location.reload();
  };

  return (
    <div>
      <Header />
      <form onSubmit={onSubmit}>
        <label htmlFor="content">Titulo</label>
        <input
          type="text"
          onChange={onChange}
          name="title"
          value={title}
        ></input>
        <label htmlFor="title">Contenido</label>
        <input
          type="text"
          onChange={onChange}
          name="content"
          value={content}
        ></input>
      </form>
    </div>
  );
};

export default FormNew;
