import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const quizes = useLoaderData()
    const {status, data} = quizes
    // console.log(data)

    return (
        <div className='row mt-5 gap-4 '>
                {
                    data.map(quiz =><Quiz key={quiz.id} quiz={quiz}></Quiz>)
                }
           
        </div>
    );
};

export default Home;