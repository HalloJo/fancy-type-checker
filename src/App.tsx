import React from 'react';
import './App.scss';
import Output from './components/Output/Output';
import TypeOptionsMenu from './components/TypeOptionsMenu/TypeOptionsMenu';

const App = () => {
  return (
    <div className="App">
        <TypeOptionsMenu />
        <Output output='The quick brown fox jumps over the lazy dog' />
    </div>
  );
}

export default App;
