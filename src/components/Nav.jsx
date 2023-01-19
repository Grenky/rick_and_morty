 import React from "react";
 import {Link} from 'react-router-dom';
 import '../styles/Nav.css';

function Nav() {
    return(
        <div className="nav_wrapper">
            <nav className='nav-menu'>
                <Link className='logo' alt='logo' to='Home'></Link>
                <Link className='nav-link' to='Characters'>characters</Link>
                <Link className='nav-link' to='Something'>something</Link>
                <Link className='nav-link' to='About'>about</Link>
            </nav>   
        </div>
    )
}

export default Nav;