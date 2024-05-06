import React from "react"
import ReactDOM from "react-dom/client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css"
import Home from "./pages/Home"
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard"
import Protected from "./components/Protected";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Protected/>} >
          <Route path="/dashboard" index element={<Dashboard/>} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
