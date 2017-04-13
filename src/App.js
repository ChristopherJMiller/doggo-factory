import React, { Component } from 'react';
import './App.css';
import { DogBed, DogHouse, DogShelter, DogYard, DogHotel, DogResort } from './machines/MachineTypes.js';
import MachineTable from './MachineTable.js'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bones: 0,
      canDig: true,
      beds: new DogBed(),
      houses: new DogHouse(),
      yards: new DogYard(),
      shelters: new DogShelter(),
      hotels: new DogHotel(),
      resorts: new DogResort()
    };

    this.purchaseMachine = this.purchaseMachine.bind(this);
    this.updatePerSecond = 10;
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
      1000 / this.updatePerSecond
    );
    this.timerDigID = setInterval(
      () => this.digTick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    clearInterval(this.timerDigID);
  }

  digTick() {
    this.setState({
      canDig: true
    });
  }

  tick() {
    let bonesForTick = (this.state.beds.totalBPS() + this.state.houses.totalBPS() + this.state.yards.totalBPS() + this.state.shelters.totalBPS() + this.state.hotels.totalBPS() + this.state.resorts.totalBPS()) / this.updatePerSecond;
    this.setState({
      bones: this.state.bones + bonesForTick,
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
              <td>{ Math.round(this.state.bones) }</td>
            </tr>
            <tr>
              <td>Good bois</td>
              <td>{ this.state.beds.totalBPS() + this.state.houses.totalBPS() + this.state.yards.totalBPS() + this.state.shelters.totalBPS() + this.state.hotels.totalBPS() + this.state.resorts.totalBPS() }</td>
              <td>
                {button}
              </td>
            </tr>
            <MachineTable bones={ this.state.bones } machine={ this.state.beds } purchaseMachine={this.purchaseMachine} />
            <MachineTable bones={ this.state.bones } machine={ this.state.houses } purchaseMachine={this.purchaseMachine} />
            <MachineTable bones={ this.state.bones } machine={ this.state.yards } purchaseMachine={this.purchaseMachine} />
            <MachineTable bones={ this.state.bones } machine={ this.state.shelters } purchaseMachine={this.purchaseMachine} />
            <MachineTable bones={ this.state.bones } machine={ this.state.hotels } purchaseMachine={this.purchaseMachine} />
            <MachineTable bones={ this.state.bones } machine={ this.state.resorts } purchaseMachine={this.purchaseMachine} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
