import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div>
        <CurrentLocation />
      </div>
      <div className="footer-info">
        Developed by{" "}
        <a>
          Team "Air Conditionals"
        </a>{" "}
      </div>
    </React.Fragment>
  );
}

export default App;
