import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const QuizFile = ({quiz}) => {
    const {question, options, correctAnswer,id} = quiz

   const handleCorrect =( event) =>{
       if(event === correctAnswer){
        toast('Right Answer', {
            });
       }
        else {
        toast('Wrong Answer')
        // alert('wrong')
       }
   }


    return (
        <div>
        <div style={{backgroundColor:'lightskyblue'}}  className='mt-5 shadow-lg p-5 rounded'>
            <h2 dangerouslySetInnerHTML={{__html: question}}></h2>
            <h3>Correct Answer: {correctAnswer}</h3>
            <div className='row row-cols-2 mt-5'>
             {
                options.map(option =>  <div>                    
                   <input  onClick={()=>handleCorrect(option)} type="radio" id="" name="option" value=""/>  <label htmlFor='option'>{option}</label>
                  </div> )
             }
         
            </div>
        </div>
        </div>
    );
};


export default QuizFile;