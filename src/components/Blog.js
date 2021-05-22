import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  const [modalIsOpen, setModalOpen] = useState(false);

  const [info, saveInfo] = useState({});

  useEffect(() => {
    const apiByID = async () => {
      let apiGET = await fetch(
        "https://jsonplaceholder.typicode.com/posts/" + blog.id
      );
      let response = await apiGET.json();
      saveInfo(response);
    };
    apiByID();
  });

  const onDelete = (id, concept) => {
    console.log(id);
    if (window.confirm(`Estas seguro de eliminar a ${concept}?`)) {
      fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
        method: "DELETE",
      });
      window.location.reload();
    }
  };

  

  return (
    <li className="list-group-item">
      <div>
        <h2>{blog.title}</h2>
        <div
          className="btn-group"
          role="group"
          aria-label="Basic outlined example"
        >
          <button
            onClick={() => setModalOpen(true)}
            className="btn btn-outline-info"
          >
            <em className="fa fa-info"></em>
          </button>

          <Link
            to={{
              pathname: "/edit-blog",
              state: {
                content: blog.body,
                title: blog.title,
                id: blog.id,
              },
            }}
          >
            <button className="btn btn-outline-success">
              <em className="fa fa-edit"></em>
            </button>
          </Link>

          <button 
            onClick={() => onDelete(blog.id, blog.title)} 
            className="btn btn-outline-danger"
          >
            <em className="fa fa-trash"></em>
          </button>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalOpen(false)}
        style={{
          overlay: {
            backgroundColor: "grey",
          },
          content: {
            color: "blue",
            padding: '10%',
          },
        }}
      >
        <div className="Modal">
          <div className="content">
            <div className="header">
              <h1>Info</h1>
            </div>
            <div className="body">
              <p>Titulo: {info.title}</p>
              <p>Numero de Blog: {info.id}</p>
              <p>Usuario: {info.userId}</p>
              <p>Texto: {info.body}</p>
            </div>
            <button
              onClick={() => setModalOpen(false)}
              className="btn btn-secondary"
              style={{position:'relative', left: '70%'}}
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </li>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
