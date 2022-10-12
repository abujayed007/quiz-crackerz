import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import Error from './Components/Error/Error';
import Topics from './Components/Topics/Topics';
import Quiz from './Components/Quiz/Quiz';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Answers from './Components/Answers/Answers';
import Statics from './Components/Statics/Statics';



function App() {
 const router = createBrowserRouter([
  {path:'/', element:<Main></Main>, children:[
  {path:'/',
  loader:()=> fetch('https://openapi.programming-hero.com/api/quiz'),
  element:<Home></Home> },
  {path:'/practice/:id',
  loader: async ({params}) =>{
  return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
  },
  element:<Quiz></Quiz>},
  {path:'blogs', element:<Answers></Answers>},
  {path:'/statics',
  loader:async()=> 
  { return fetch('https://openapi.programming-hero.com/api/quiz')},
  element:<Statics></Statics>}
  ]},
  {path:'/*', element:<Error></Error>},
  ])
  return (
    <div className="App">
      <ToastContainer/>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;