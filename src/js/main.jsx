import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Countdown from "./components/Countdown";
import Counter from "./components/Counter"
import Controller from "./components/Controller"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Counter/>
    <Countdown/>
    <Controller/>
  </React.StrictMode>,
)
