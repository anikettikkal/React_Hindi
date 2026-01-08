import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Login from './components/Login.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'

const router = createBrowserRouter([
  {
    path:"",
    element:<Layout />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/login",
        element:<Login />
      },
      {
        path:"/about",
        element:<About />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
