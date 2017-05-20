import React, { Component } from 'react';
import './App.css';
import { DogBed, DogHouse, DogShelter, DogYard, DogHotel, DogResort, DogTown, DogCity, DogCounty } from './machines/MachineTypes.js';
import MachineTable from './MachineTable.js'
import { Button, Table } from 'semantic-ui-react'



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
      resorts: new DogResort(),
      towns: new DogTown(),
      cities: new DogCity(),
      counties: new DogCounty()
    };

    this.purchaseMachine = this.purchaseMachine.bind(this);
    this.updatePerSecond = 10;

    this.totalBPS = function() {
      return this.state.beds.totalBPS() + this.state.houses.totalBPS() + this.state.yards.totalBPS() + this.state.shelters.totalBPS() + this.state.hotels.totalBPS() + this.state.resorts.totalBPS() + this.state.towns.totalBPS() + this.state.cities.totalBPS() + this.state.counties.totalBPS();
    }
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
    let bonesForTick = this.totalBPS() / this.updatePerSecond;
    this.setState({
      bones: this.state.bones + bonesForTick,
    });
  }

  render() {
    let button = null;
    if (this.state.canDig) {
      button = <Button onClick={() => this.digUpBone()}>Dig Up Bone</Button>;
    } else {
      button = <Button disabled loading>Dig Up Bone</Button>;
    }

    return (
      <div>
        <h1>Doggo Factory</h1>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Unit</Table.HeaderCell>
              <Table.HeaderCell>Unit Count</Table.HeaderCell>
              <Table.HeaderCell>Durability</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Bones</Table.Cell>
              <Table.Cell>{ Math.round(this.state.bones) }</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Good bois</Table.Cell>
              <Table.Cell>{ this.totalBPS() }</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>
                {button}
              </Table.Cell>
            </Table.Row>
            <MachineTable bones={ this.state.bones } machine={ this.state.beds } purchaseMachine={this.purchaseMachine} />
            <MachineTable bones={ this.state.bones } machine={ this.state.houses } purchaseMachine={this.purchaseMachine} />
            <MachineTable bones={ this.state.bones } machine={ this.state.yards } purchaseMachine={this.purchaseMachine} />
            <MachineTable bones={ this.state.bones } machine={ this.state.shelters } purchaseMachine={this.purchaseMachine} />
            <MachineTable bones={ this.state.bones } machine={ this.state.hotels } purchaseMachine={this.purchaseMachine} />
            <MachineTable bones={ this.state.bones } machine={ this.state.resorts } purchaseMachine={this.purchaseMachine} />
            <MachineTable bones={ this.state.bones } machine={ this.state.towns } purchaseMachine={this.purchaseMachine} />
            <MachineTable bones={ this.state.bones } machine={ this.state.cities } purchaseMachine={this.purchaseMachine} />
            <MachineTable bones={ this.state.bones } machine={ this.state.counties } purchaseMachine={this.purchaseMachine} />

          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default App;
