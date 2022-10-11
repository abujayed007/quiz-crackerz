import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizFile from '../QuizFile/QuizFile';

const Quiz = () => {
    const quizes = useLoaderData()
    const {data} = quizes
    const {questions} = data
  console.log(questions)
    
    return (
        <div className='p-5'>
            {
                questions.map(quiz => <QuizFile key={quiz.id} quiz={quiz}></QuizFile>)
            }
        </div>
    );
};

export default Quiz;