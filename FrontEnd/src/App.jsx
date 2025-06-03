import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bienvenida from "./pages/Bienvenida";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Bienvenida />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
