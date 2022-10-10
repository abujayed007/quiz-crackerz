import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Home from '../Home/Home';
import './Header.css'

const Header = () => {
    
    return (
        <div>
            <div className='header d-flex justify-content-lg-around mt-4 me-5'>
            <Link className='fs-2'> <img  src="../../icon.png" alt="" /> Programming Crackers</Link>
           <div className=' flex-sm-col mt-3'>
            <Link to='/'>Home</Link>
            <Link to='packages'>Packages</Link>
            <Link to='blog'>Blog</Link>
            <Link to='about'>About</Link>
           </div>
        </div>
        <div style={{height:'500px', width:'100%'}} className='header-img mt-5 img-fluid'>
        </div>
        <div>
        </div>
        </div>
    );
};

export default Header;