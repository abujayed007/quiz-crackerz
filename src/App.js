import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';

function App() {
 const router = createBrowserRouter([
  {path:'/', element:<Main></Main>, children:[
    {path:'/home',
    loader:async()=>{
      return fetch('https://openapi.programming-hero.com/api/quiz')
    },
    element:<Home></Home> }
  ]}
 ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
