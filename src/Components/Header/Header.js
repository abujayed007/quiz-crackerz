import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Header = () => {
   
    return (
        <div className='header'>
            <Link to='/home'>Home</Link>
            <Link to='packages'>Packages</Link>
            <Link to='blog'>Blog</Link>
            <Link to='about'>About</Link>
        </div>
    );
};

export default Header;