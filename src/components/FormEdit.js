import React, { useState } from 'react';
import Header from './Header'
import '../css/form.css'

const FormEdit = (props) => {
    
  const { title, content, id} =  props.location.state;
    const [data, saveData] = useState({
        title: title,
        content: content,
      });
  
   
    
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
  
      fetch('https://jsonplaceholder.typicode.com/posts/'+id,{
        method: 'PUT',
        body: data
      })
  
      
      window.location.reload();
    };
  
    return (
        <div>
        <Header />
        <form onSubmit={onSubmit}>
          <div>
          <label htmlFor="title" className='form-label'>Titulo</label>
          <input
            type="text"
            onChange={onChange}
            name="title"
            defaultValue={title}
            className="form-control"
          ></input>
          </div>
          <div>
          <label htmlFor="content" className='form-label'>Contenido</label>
          <input
            type="text"
            onChange={onChange}
            name="content"
            defaultValue={content}
            className="form-control"
            id="input-content"
          ></input>
          </div>

          <button type='submit' className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  };
  
  export default FormEdit;