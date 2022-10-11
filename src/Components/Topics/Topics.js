import React from 'react';
import { Link } from 'react-router-dom';

const Topics = ({quiz}) => {
    const {name, id, logo} = quiz
    // console.log(id)
    return (
        <div style={{backgroundColor:'lightsteelblue'}} className='col shadow-lg rounded'>
            <img className='pt-2' style={{width:'300px'}} src={logo} alt="" />
           <div className="d-flex justify-content-around mt-5 mb-3">
           <h2 className='text-success'>{name}</h2>
            <Link to={`practice/${id}`}> <button className='border-0 p-2 bg-info rounded fw-bold'>Start Practice</button> </Link>
           </div>
        </div>
    );
};

export default Topics;