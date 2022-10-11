import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import Error from './Components/Error/Error';
import Topics from './Components/Topics/Topics';
import Quiz from './Components/Quiz/Quiz';

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
     element:<Quiz></Quiz>}
  ]},
  {path:'/*', element:<Error></Error>}
 ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;