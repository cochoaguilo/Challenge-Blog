import React, { useState } from "react";
import Header from "./Header";
import '../css/form.css'

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

    fetch('https://jsonplaceholder.typicode.com/posts',{
      method: 'POST',
      body: data
    })
    window.location.reload();
  };

  return (
    <div>
      <Header />
      <form onSubmit={onSubmit}>
        <div className="mb-3">
        <label htmlFor="content" className='form-label'>Titulo</label>
        <input
          type="text"
          onChange={onChange}
          name="title"
          value={title}
          className="form-control"
        ></input>
        </div>
        <div >
        <label htmlFor="title" className='form-label'>Contenido</label>
        <input
          type="text"
          onChange={onChange}
          name="content"
          value={content}
          className="form-control"
          id="input-content"
        ></input>
        </div>
        <button type='submit' className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default FormNew;
