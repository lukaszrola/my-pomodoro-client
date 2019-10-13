import React from "react";
import "./App.css";
import PomodoroPanel from "./components/PomodoroPanel/PomodoroPanel";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <PomodoroPanel />
    </div>
  );
}

export default App;
