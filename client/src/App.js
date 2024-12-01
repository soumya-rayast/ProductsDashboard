import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Products from "./Pages/Products";
import './App.css';
import Dashboard from "./Pages/Dashboard";

const App = () => {
  return (
    <Router>
      <div className="dashboard">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/productTable" element={<Products />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;