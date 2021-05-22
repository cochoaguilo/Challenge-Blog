import React from 'react';
import {Link} from 'react-router-dom'

const Header =()=>{
    
    
        return(
            <nav className="navbar sticky-top navbar-expand-lg justify-content-end" 
            style={{backgroundColor: "#e3f2fd"}}>
                <ul className="navbar-nav navbar-expand-sm">
                    <Link to={'/new-blog'} className="nav-link"><li className="nav-item">Nuevo</li></Link>
                    <Link to={'/'} className="nav-link"><li className="nav-item">Home</li></Link>
                    
                </ul>
            </nav>
        )
    
}

export default Header