import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
             <div className='header d-lg-flex justify-content-lg-between mt-4 me-5'>
            <Link className='fs-2'> <img  src="../../icon.png" alt="" /> Programming Crackers</Link>
           <div className=' flex-sm-col mt-3'>
            <Link to='/'>Home</Link>
            <Link to='/topics'>Topics</Link>
            <Link to='blog'>Blog</Link>
            <Link to='about'>About</Link>
           </div>
        </div>
        </div>
    );
};

export default Navbar;