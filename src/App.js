import React, { Component } from 'react';
import MenuBar from './MenuBar';
import EventCards from './EventCards'
import '../semantic/dist/semantic.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuBar/>
        <EventCards/>
      </div>
    );
  }
}

export default App;
