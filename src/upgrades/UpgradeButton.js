import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react'

class UpgradeButton extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    let button = null;
    if (this.props.bones >= this.props.upgrade.upgradeCost()) {
      button =
      <Button animated='vertical' onClick={() => this.props.purchaseUpgrade(this.props.upgrade)}>
        <Button.Content visible>{ this.props.upgrade.name }</Button.Content>
        <Button.Content hidden>
          B$ { this.props.upgrade.upgradeCost() }
        </Button.Content>
      </Button>;
    } else {
      button =
      <Button disabled>
        <Button.Content visible>{ this.props.upgrade.name }</Button.Content>
        <Button.Content hidden>
          B$ { this.props.upgrade.upgradeCost() }
        </Button.Content>
      </Button>;
    }

    return (
      <Table.Cell>
        { button }
      </Table.Cell>
    );
  }
}

export default UpgradeButton;
