import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Topics from '../Topics/Topics';

const Home = () => {
    const quizes = useLoaderData()
    const {data} = quizes
    // console.log(data)

    return (
        <div>
            <Header></Header>
              <div className='row mt-5 gap-4 '>
              {
                    data.map(quiz =><Topics key={quiz.id} quiz={quiz}></Topics>)
                }
              </div>
        </div>
    );
};

export default Home;