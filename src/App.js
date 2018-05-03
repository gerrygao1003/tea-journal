import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Journal from "./components/Journal";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Journal/>
      </div>
    );
  }
}

export default App;
