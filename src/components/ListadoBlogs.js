import React from 'react';
import PropTypes from 'prop-types';
import Blog from './Blog'
import '../css/home.css'

const ListadoBlogs = ({blogs}) =>{
    
    return(
        <div id='body'>
            <h1>Blogs</h1>
        <ul className = 'list-group list-group-flush'>
            
            {blogs.map(blog=>{
                return(<Blog
                    key={blog.id}
                    blog={blog}
                />
                )
            })}
        </ul>
        </div>
    )
}

ListadoBlogs.propTypes = {
    blogs: PropTypes.array.isRequired
}

export default ListadoBlogs