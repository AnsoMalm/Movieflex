import React from 'react'
import ReactDOM from 'react-dom/client'
import './components/header.css'
import '../src/index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routeConfig.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
