import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs.tsx";

function App() {
  return (
    <div className="bg-woodsmoke text-white min-h-screen">
      <AboutUs />
    </div>
  );
}

export default App;