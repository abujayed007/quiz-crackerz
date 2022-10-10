import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const quiz = useLoaderData()
    console.log(quiz)
    return (
        <div>
            <h2>Coming Home</h2>
        </div>
    );
};

export default Home;