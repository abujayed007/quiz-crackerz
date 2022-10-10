import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({quiz}) => {
    const {name, id, logo, total} = quiz
    console.log(quiz)
    return (
        <div className='col shadow-lg'>
            <img style={{width:'300px'}} src={logo} alt="" />
           <div className="d-flex justify-content-around mt-5">
           <h2 className='text-success'>{name}</h2>
            <Link to={`practice/${id}`}> <button className='border-0 p-2 bg-info rounded fw-bold'>Start Practice</button> </Link>
           </div>
        </div>
    );
};

export default Quiz;