import React, { useState } from 'react';
import Header from './Header'


const ModalEdit = (props) => {
    
  
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
            value={content}
          ></input>
          <label htmlFor="title">Contenido</label>
          <input
            type="text"
            onChange={onChange}
            name="content"
            value={title}
          ></input>
        </form>
      </div>
    );
  };
  
  export default ModalEdit;