import React from 'react';

const QuizFile = ({quiz}) => {
    const {question, options, correctAnswer} = quiz
    console.log(options)
    return (
        <div  className='mt-5'>
            <h2 dangerouslySetInnerHTML={{__html: question}}></h2>
            <div className='row row-cols-2 mt-5'>
             {
                options.map(option =><ul><span><input type="radio" name="" id=""></input></span>{option}</ul>  )
             }
             
            </div>
        </div>
    );
};


export default QuizFile;