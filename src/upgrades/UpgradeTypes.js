import Upgrade from './Upgrade.js'

export class DigBonesUp extends Upgrade {
  constructor() {
    super(
      "Dig Up Bones +1",
      20,
      0.25
    );
  }
}

export class BedDurabilityUp extends Upgrade {
  constructor() {
    super(
      "Durability Increase +10%",
      30,
      0.25
    );
  }
}

export class HouseDurabilityUp extends Upgrade {
  constructor() {
    super(
      "Durability Increase +10%",
      120,
      0.25
    );
  }
}
