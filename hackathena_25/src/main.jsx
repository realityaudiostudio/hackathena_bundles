import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Events from './routes/Events.jsx'
import Launch from './routes/Launch.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        
    },
    {
        path:'/events',
        element:<Events />
    },
    {
        path:'/launch',
        element:<Launch />
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
