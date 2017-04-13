import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { DogBed } from './machines/MachineTypes.js'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bones: 0,
      beds: new DogBed()
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>{ this.state.beds.name }</h2>
        </div>
      </div>
    );
  }
}

export default App;
