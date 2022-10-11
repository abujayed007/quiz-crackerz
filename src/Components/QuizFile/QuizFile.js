import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const QuizFile = ({quiz}) => {
    const {question, options, correctAnswer,id} = quiz

   const handleCorrect =( event) =>{
       if(event === correctAnswer){
        toast.success('🦄 Wow Right Answer', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
       }
        else {
            toast.error('Wrong Answer!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
       }
   }


    return (
        <div>
        <div style={{backgroundColor:'lightskyblue'}}  className='mt-5 shadow-lg p-5 rounded'>
            <div className='d-flex justify-content-between'>
            <h2 dangerouslySetInnerHTML={{__html: question}}></h2>
          <Link><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></Link>
            </div>
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