import React, { Component } from 'react';
import './App.css';
import { DogBed, DogHouse } from './machines/MachineTypes.js'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bones: 0,
      canDig: true,
      beds: new DogBed(),
      houses: new DogHouse()
    };

    this.purchaseMachine = this.purchaseMachine.bind(this);
  }

  purchaseMachine(machine) {
    if (this.state.bones >= machine.unitCost()) {
      this.setState({
        bones: this.state.bones - machine.unitCost()
      });
      machine.purchaseMachine();
    }
  }

  digUpBone() {
    if (this.state.canDig) {
      this.setState({
        bones: this.state.bones + 1,
        canDig: false
      });
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    let bonesForTick = this.state.beds.totalBPS();
    this.setState({
      bones: this.state.bones + bonesForTick,
      canDig: true
    });
  }

  render() {
    let button = null;
    if (this.state.canDig) {
      button = <button onClick={() => this.digUpBone()}>Dig Up Bone</button>;
    } else {
      button = <button disabled>Dig Up Bone</button>;
    }

    return (
      <div>
        <h1>Doggo Factory</h1>
        <table>
          <tbody>
            <tr>
              <td>Bones</td>
              <td>{ this.state.bones }</td>
            </tr>
            <tr>
              <td>Good bois</td>
              <td>{ this.state.beds.totalBPS() + this.state.houses.totalBPS() }</td>
              <td>
                {button}
              </td>
            </tr>
            <tr>
              <td>{ this.state.beds.name }</td>
              <td>{ this.state.beds.count }</td>
              <td>
                <button onClick={() => this.purchaseMachine(this.state.beds)}>
                  Purchase: B$ { this.state.beds.unitCost() }
                </button>
              </td>
            </tr>
            <tr>
              <td>{ this.state.houses.name }</td>
              <td>{ this.state.houses.count }</td>
              <td>
                <button onClick={() => this.purchaseMachine(this.state.houses)}>
                  Purchase: B$ { this.state.houses.unitCost() }
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
