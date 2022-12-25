import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Manage from "./components/manageplatform/manage";
import Services from "./components/services/services";
import Testimonial from "./components/testimonials/testimonial";
import Price from "./components/price/price";
import Business from "./components/business/business";
import Foter from "./components/footer/foter";
import Allcomponents from "./components/allcomponents/allcomponents";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Allcomponents />} />
          <Route exact path="/About" element={<Business />} />
          <Route exact path="/Services" element={<Services />} />
          <Route exact path="/Pricing" element={<Price />} />
          <Route exact path="/FAQ" element={<Testimonial />} />
          <Route exact path="/Contact" element={<Manage />} />
        </Routes>
      </Router>
      <Foter />
    </div>
  );
}

export default App; App;
