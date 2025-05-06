import { useState } from 'react'
import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import First from './First';
import Home from './Pages/Home';
import Quote from './Pages/Quote';
import Resturant from './Pages/Resturant';
import Food from './Pages/Food';
import Contact from './Pages/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <First/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "/Quote",
        element: <Quote/>
      },
      {
        path: "/Resturant",
        element: <Resturant/>
      },
      {
        path: "/Food",
        element: <Food/>
      },
      {
        path: "/Contact",
        element: <Contact/>
      }
    ],
  }
]);

function App() {
    return <RouterProvider router={router}/>;
}

export default App;