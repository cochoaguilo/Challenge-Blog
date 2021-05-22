import React, { useEffect,useState } from 'react';
import Header from './Header'
import ListadoBlogs from './ListadoBlogs'

const Home = ()=>{
    
    const [blogs, saveBlogs] = useState([])

     useEffect (()=>{
        const apiGET = async ()=>{
            let res = await fetch('https://jsonplaceholder.typicode.com/posts')
            let json = await res.json()
            
                console.log(json);
                saveBlogs(json)
        
        }
        
        apiGET()
    }, [])

    

        return(
            <div>
            <Header />
            <ListadoBlogs blogs = {blogs}/>
            
            </div>
        )
    
}

export default Home;