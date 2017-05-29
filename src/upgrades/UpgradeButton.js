import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react'

class UpgradeButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let button = null;
    if (this.props.bones >= this.props.upgrade.upgradeCost()) {
      button = <Button onClick={() => this.props.purchaseUpgrade(this.props.upgrade)}>{ this.props.upgrade.name }: B$ { this.props.upgrade.upgradeCost() }</Button>;
    } else {
      button = <Button disabled>{ this.props.upgrade.name }: B$ { this.props.upgrade.upgradeCost() }</Button>;
    }

    return (
      <Table.Cell>
        { button }
      </Table.Cell>
    );
  }
}

export default UpgradeButton;
