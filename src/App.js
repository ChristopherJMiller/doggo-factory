import React, { Component } from 'react';
import './App.css';
import { Button, Table, Header, Grid } from 'semantic-ui-react'

import Machine from './machines/Machine.js'
import { DogBed, DogHouse, DogShelter, DogYard, DogHotel, DogResort, DogTown, DogCity, DogCounty } from './machines/MachineTypes.js';
import MachineTable from './MachineTable.js'

import { DigBonesUp } from './upgrades/UpgradeTypes.js'
import UpgradeTable from './UpgradeTable.js'




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bones: 0,
      totalBones: 0,

      canDig: true,

      beds: new DogBed(),
      houses: new DogHouse(),
      yards: new DogYard(),
      shelters: new DogShelter(),
      hotels: new DogHotel(),
      resorts: new DogResort(),
      towns: new DogTown(),
      cities: new DogCity(),
      counties: new DogCounty(),


      digBonesUp: new DigBonesUp()
    };

    this.purchaseMachine = this.purchaseMachine.bind(this);
    this.purchaseUpgrade = this.purchaseUpgrade.bind(this);

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

  purchaseUpgrade(upgrade) {
    if (this.state.bones >= upgrade.upgradeCost()) {
      this.setState({
        bones: this.state.bones - upgrade.upgradeCost()
      });
      upgrade.purchaseUpgrade();
      this.updateUpgradeCorrelations();
    }
  }

  digUpBone() {
    this.setState({
      bones: this.state.bones + 1 + this.state.digBonesUp.count,
      totalBones: this.state.totalBones + 1 + this.state.digBonesUp.count
    });
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000 / this.updatePerSecond
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    clearInterval(this.timerDigID);
  }


  tick() {
    let bonesForTick = this.totalBPS() / this.updatePerSecond;
    this.setState({
      bones: this.state.bones + bonesForTick,
      totalBones: this.state.totalBones + bonesForTick,
    });
  }

  render() {
    let button = null;
    let boneWord = 'bone';
    if (this.totalBPS() !== 1) {
      boneWord = 'bones';
    }

    button = <Button onClick={() => this.digUpBone()} >Dig Up { 1 + this.state.digBonesUp.count } { boneWord }</Button>;
    return (
      <div>
        <Header as='h1' block>Doggo Factory</Header>
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column width={10}>
              <Table>
                <Table.Header>
                  <Table.HeaderCell>Bones</Table.HeaderCell>
                  <Table.HeaderCell></Table.HeaderCell>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>{ Math.round(this.state.bones) } ({ this.totalBPS() } { boneWord } per second)</Table.Cell>
                    <Table.Cell>{button}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
              <Header as='h1' block>Units</Header>
              <Table>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Unit</Table.HeaderCell>
                    <Table.HeaderCell>Unit Count</Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <MachineTable bones={ this.state.bones } totalBones={ this.state.totalBones } machine={ this.state.beds } purchaseMachine={this.purchaseMachine} />
                  <MachineTable bones={ this.state.bones } totalBones={ this.state.totalBones } machine={ this.state.houses } purchaseMachine={this.purchaseMachine} />
                  <MachineTable bones={ this.state.bones } totalBones={ this.state.totalBones } machine={ this.state.yards } purchaseMachine={this.purchaseMachine} />
                  <MachineTable bones={ this.state.bones } totalBones={ this.state.totalBones } machine={ this.state.shelters } purchaseMachine={this.purchaseMachine} />
                  <MachineTable bones={ this.state.bones } totalBones={ this.state.totalBones } machine={ this.state.hotels } purchaseMachine={this.purchaseMachine} />
                  <MachineTable bones={ this.state.bones } totalBones={ this.state.totalBones } machine={ this.state.resorts } purchaseMachine={this.purchaseMachine} />
                  <MachineTable bones={ this.state.bones } totalBones={ this.state.totalBones } machine={ this.state.towns } purchaseMachine={this.purchaseMachine} />
                  <MachineTable bones={ this.state.bones } totalBones={ this.state.totalBones } machine={ this.state.cities } purchaseMachine={this.purchaseMachine} />
                  <MachineTable bones={ this.state.bones } totalBones={ this.state.totalBones } machine={ this.state.counties } purchaseMachine={this.purchaseMachine} />
                </Table.Body>
              </Table>
            </Grid.Column>

            <Grid.Column width={6}>
              <Header as='h1' block>Upgrades</Header>
              <Table>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Unit</Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <UpgradeTable bones={ this.state.bones } totalBones={ this.state.totalBones } machine={ new Machine("Bone Dig") } upgrade={ this.state.digBonesUp } purchaseUpgrade={this.purchaseUpgrade} />
                </Table.Body>
              </Table>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
