import React, { Component } from 'react';
import logo from './logo.svg';
import MenuBar from './MenuBar';
import '../semantic/dist/semantic.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuBar/>
      </div>
    );
  }
}

export default App;
