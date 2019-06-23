import React from 'react';
import './App.css';
import Questionnaire from './components/Questionnaire/Questionnaire';
import TimerPanel from './components/Timer/TimerPanel';

function App() {
  return (
    <div className="App">
      <TimerPanel />
      <Questionnaire />
    </div>
  );
}

export default App;
