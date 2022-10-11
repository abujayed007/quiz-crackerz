import React from 'react';

const QuizFile = ({quiz}) => {
    const {question, options, correctAnswer,id} = quiz
   const handleCorrect =(correctAnswer, option) =>{
       if(correctAnswer === option){
        console.log('okk')
       }
   }
    return (
        <div style={{backgroundColor:'lightskyblue'}}  className='mt-5 shadow-lg p-5 rounded'>
            <h2 dangerouslySetInnerHTML={{__html: question}}></h2>
            <h3>Correct Answer: {correctAnswer}</h3>
            <div className='row row-cols-2 mt-5'>
             {
                options.map(option =>  <div>
                    <input  onClick={handleCorrect} type="radio" id="" name="option" value=""
                           checked/>
                    <label  htmlFor=""> {option}</label>
                  </div> )
             }
             
            </div>
        </div>
    );
};


export default QuizFile;