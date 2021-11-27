import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    
    return (
        <div className='navbar'>
            <Link to="/" className='headerlist'>Home </Link>
            <Link to="/studentlist" className='headerlist'>Students List </Link>
            <Link to="/contact" className='headerlist'>Contact</Link>
        </div>
    );
};

export default Header;