import React from "react";
import "./App.css";
import PomodoroPanel from "./components/PomodoroPanel/PomodoroPanel";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <PomodoroPanel />
      </div>
    </div>
  );
}

export default App;
