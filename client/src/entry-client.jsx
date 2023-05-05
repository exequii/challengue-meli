import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
<<<<<<< Updated upstream
=======
import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from './routes/routes'

let router = createBrowserRouter(routes);
>>>>>>> Stashed changes

ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <React.StrictMode>
    <App />
  </React.StrictMode>
<<<<<<< Updated upstream
)
=======

    <BrowserRouter>
    <App />
  </BrowserRouter>

    <BrowserRouter>
    <RouterProvider router={router} fallbackElement={null} />
  </BrowserRouter>
*/
>>>>>>> Stashed changes
