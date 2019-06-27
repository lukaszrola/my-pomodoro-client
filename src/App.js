import React from 'react';
import './App.css';
import PomodoroPanel from './components/PomodoroPanel/PomodoroPanel';
import Toolbar from './components/Toolbar/Toolbar';

function App() {
  return (
    <div className="App">
      <Toolbar />
      <PomodoroPanel />
    </div>
  );
}

export default App;
