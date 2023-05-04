import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './App'
import { StaticRouter } from "react-router-dom/server";

export function render() {
  const html = ReactDOMServer.renderToString(
    <StaticRouter>
      <App />
    </StaticRouter>
  )
  return { html }
}

/*
    <React.StrictMode>
      <App />
    </React.StrictMode>
*/
