import React from 'react';
import './App.css';
import Timer from './components/Timer/Timer';
import Questionnaire from './components/Questionnaire/Questionnaire';
function App() {
  return (
    <div className="App">
      <Timer hours='0' minutes='5' seconds='0'/>
      <Questionnaire />
    </div>
  );
}

export default App;
