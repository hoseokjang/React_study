import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="gray-background">
        <img src={logo} lat="logo" />
        <h2>Hello. World!</h2>
      </div>
    );
  }
}
  

export default App;
