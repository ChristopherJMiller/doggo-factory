import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'

import UpgradeButton from './upgrades/UpgradeButton.js'

class UpgradeTable extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Table.Row>
        <Table.Cell>{ this.props.machine.name }</Table.Cell>
        <Table.Cell>{ this.props.upgrade.count }</Table.Cell>
        <UpgradeButton bones={ this.props.bones } upgrade={ this.props.upgrade } purchaseUpgrade={this.props.purchaseUpgrade} />
      </Table.Row>
    );
  }
}

export default UpgradeTable;
