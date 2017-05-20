import React, { Component } from 'react';
import { Button, Table, Progress } from 'semantic-ui-react'

class MachineTable extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    let button = null;
    if (this.props.bones >= this.props.machine.unitCost()) {
      button = <Button onClick={() => this.props.purchaseMachine(this.props.machine)}>Purchase: B$ { this.props.machine.unitCost() }</Button>;
    } else {
      button = <Button disabled>Purchase: B$ { this.props.machine.unitCost() }</Button>;
    }

    return (
      <Table.Row>
        <Table.Cell>{ this.props.machine.name }</Table.Cell>
        <Table.Cell>{ this.props.machine.count }</Table.Cell>
        <Table.Cell><Progress progress percent={Math.round((this.props.machine.currentLifetime / this.props.machine.totalLifetime) * 100)} /></Table.Cell>
        <Table.Cell>
          { button }
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default MachineTable;
