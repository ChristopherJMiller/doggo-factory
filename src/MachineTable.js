import React, { Component } from 'react';

class MachineTable extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    let button = null;
    if (this.props.bones >= this.props.machine.unitCost()) {
      button = <button onClick={() => this.props.purchaseMachine(this.props.machine)}>Purchase: B$ { this.props.machine.unitCost() }</button>;
    } else {
      button = <button disabled>Purchase: B$ { this.props.machine.unitCost() }</button>;
    }

    return (
      <tr>
        <td>{ this.props.machine.name }</td>
        <td>{ this.props.machine.count }</td>
        <td>
          { button }
        </td>
      </tr>
    );
  }
}

export default MachineTable;
