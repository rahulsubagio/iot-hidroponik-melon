import React from "react"
import ReactDOM from "react-dom/client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css"
import Home from "./pages/Home"
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard"
import Protected from "./components/Protected";
import Target from "./pages/dashboard-items/Target";
import Inventory from "./pages/dashboard-items/Inventory";
import History from "./pages/dashboard-items/History";
import Setting from "./pages/dashboard-items/Setting";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Protected/>} >
          <Route path="/dashboard" element={<Dashboard/>} />
        </Route>
        <Route path="/target" element={<Protected/>} >
          <Route path="/target" element={<Target/>} />
        </Route>
        <Route path="/inventory" element={<Protected/>} >
          <Route path="/inventory" element={<Inventory/>} />
        </Route>
        <Route path="/history" element={<Protected/>} >
          <Route path="/history" element={<History/>} />
        </Route>
        <Route path="/setting" element={<Protected/>} >
          <Route path="/setting" element={<Setting/>} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
