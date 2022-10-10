import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import Error from './Components/Error/Error';

function App() {
 const router = createBrowserRouter([
  {path:'/', element:<Main></Main>, children:[
    {path:'/',
    loader:()=> fetch('https://openapi.programming-hero.com/api/quiz'),
    element:<Home></Home> }
  ]},
  {path:'/error', element:<Error></Error>}
 ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
