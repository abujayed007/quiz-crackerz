import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Home from '../Home/Home';
import './Header.css'

const Header = () => {
    
    return (
        <div>
        <div className='px-5 title'>
         <h2 className=' mt-2'>Work hard for your dreams..</h2>
         <h5 className='text-success'>Are You Ready....</h5>
         <p className='text-black'>If you drimming to be a Web Developer, Our expert team are standing for helping you..</p>
         </div>
        <div className='header-img mt-5 container rounded'>
        
          
        </div>
        
        </div>
    );
};

export default Header;