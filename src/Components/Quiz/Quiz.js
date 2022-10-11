import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizFile from '../QuizFile/QuizFile';

const Quiz = () => {
    const quizes = useLoaderData()
    const {data} = quizes
    const {questions} = data
    const {question} = questions[0]
    console.log(data)
    
    return (
        <div>
            {
                questions.map(quiz => <QuizFile quiz={quiz}></QuizFile>)
            }
        </div>
    );
};

export default Quiz;