import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from './routes/routes'

let router = createBrowserRouter(routes);

ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

/*
    <BrowserRouter>
    <App />
  </BrowserRouter>

    <React.StrictMode>
    <App />
  </React.StrictMode>

    <BrowserRouter>
    <RouterProvider router={router} fallbackElement={null} />
  </BrowserRouter>
*/
