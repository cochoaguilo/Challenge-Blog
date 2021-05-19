import React, { Component } from 'react';
import Header from './Header'

class Home extends Component (){
    constructor(props){
        super(props)

        this.state ={
            blogs: []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(json =>{
            console.log(json);
            this.setState({
                blogs: json
            })
        })
    }

    render(){

        return(
            <body>
            <Header />
            <ul>
                {this.state.blogs.map(blog=>{
                    <li>{blog}</li>
                })}
            </ul>
            </body>
        )
    }
}

export default Home;