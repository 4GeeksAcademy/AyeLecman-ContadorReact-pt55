import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import SecondsCounter from "./components/SecondsCounter.jsx";

let start = 0

const interval = setInterval(() => {
  start++;

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <SecondsCounter seconds={start} />
    </React.StrictMode>,
  )
}, 1000)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SecondsCounter seconds={start} />
  </React.StrictMode>)
