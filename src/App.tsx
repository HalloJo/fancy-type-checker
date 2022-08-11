import React from 'react';
import FTCLogo from './assets/fancy-type-checker-logo.svg'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={FTCLogo} alt="Fancy Type Checker logo" />
        <p>
          Fancy Type Checker!
        </p>
      </header>
    </div>
  );
}

export default App;
