import React from "react";
import Navbar from "./components/navbar/navbar";
import Foter from "./components/footer/foter";
import Allcomponents from "./components/allcomponents/allcomponents";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Allcomponents  /> 
      <Foter />
    </div>
  );
}

export default App;