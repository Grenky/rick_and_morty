import React from "react";
 import { Routes, Route, Link} from 'react-router-dom';
 import About from './About';
 import Characters from './Characters';
 import Something from './Something';

function Nav() {
    return(
        <div className="nav_wrapper">
            <nav className='nav-menu'>
                <Link className='logo' alt='logo' to='/'></Link>
                <Link className='nav-link' to='Characters'>characters</Link>
                <Link className='nav-link' to='Something'>something</Link>
                <Link className='nav-link' to='About'>about</Link>
            </nav> 
        <Routes>
            <Route path="characters" element={<Characters />} />
            <Route path="something" element={<Something />} />
            <Route path="about" element={<About />} />
        </Routes> 
        </div>
    )
}

export default Nav;