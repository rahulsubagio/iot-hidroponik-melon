import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './index.css'
import Home from './pages/Home'
import Login from "./pages/Login";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
