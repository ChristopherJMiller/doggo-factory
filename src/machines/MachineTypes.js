import Machine from './Machine.js'

export class DogBed extends Machine {
  constructor() {
    super(
      "Dog Bed",
      10,
      1,
      0.25
    );
  }
}

export class DogHouse extends Machine {
  constructor() {
    super(
      "Doghouse",
      50,
      3,
      0.2
    );
  }
}
