import React, { Component } from 'react';
import { Button, Table, Progress, Popup, Icon } from 'semantic-ui-react'

class MachineTable extends Component {
  constructor(props) {
    super(props);
    let boneWord = 'bone';
    if (this.props.machine.bps !== 1) {
      boneWord = 'bones';
    }
    this.message = 'Produces ' + this.props.machine.bps + ' ' + boneWord + ' per second.\nSurvives for ' + this.props.machine.totalLifetime + ' seconds.';
  }

  render() {
    let button = null;
    if (this.props.bones >= this.props.machine.unitCost()) {
      button = <Button onClick={() => this.props.purchaseMachine(this.props.machine)}>Purchase: B$ { this.props.machine.unitCost() }</Button>;
    } else {
      button = <Button disabled>Purchase: B$ { this.props.machine.unitCost() }</Button>;
    }

    let show = this.props.totalBones >= this.props.machine.price;
    if (show) {
      return (
        <Table.Row>
          <Table.Cell>
            { this.props.machine.name }
            <Popup
            trigger={<Icon name='question circle outline' />}
            header={this.props.machine.name}
            content={ this.message }
            on='hover'
            />
          </Table.Cell>
          <Table.Cell>{ this.props.machine.count }</Table.Cell>
          <Table.Cell>
            { button }
          </Table.Cell>
        </Table.Row>
      );
    } else {
      return null;
    }
  }
}

export default MachineTable;
