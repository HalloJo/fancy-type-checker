import React from 'react';
import FTCLogo from './assets/fancy-type-checker-logo.svg'
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <section className="wrapper">
        <img className='logo' src={FTCLogo} alt="Fancy Type Checker logo" />
      </section>
    </div>
  );
}

export default App;
