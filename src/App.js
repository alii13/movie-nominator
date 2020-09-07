import React from 'react';
import './App.css';
import Search from './components/Search';
import Result from './components/Result';

function App(props) {
  
  return (
    <div className="app">
      <h2 className="title"> Nominate Your Movie</h2>
    <Search/>
    <Result/>
    </div>
  );
}

export default App;
