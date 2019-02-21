import React, { Component } from 'react';
// import logo from './logo.svg';
import {getData} from './Data.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1>Hello</h1>
          <button onClick={getData}>Click</button>
        </header>
      </div>
    );
  }
}

export default App;
