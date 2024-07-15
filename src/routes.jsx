import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../src/pages/Home'
import Orders from './pages/Orders';

function SwitchRoutes() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Router>
    );
}

export default SwitchRoutes;