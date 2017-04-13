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
      70,
      3,
      0.25
    );
  }
}

export class DogYard extends Machine {
  constructor() {
    super(
      "Yard",
      300,
      5,
      0.3
    );
  }
}

export class DogShelter extends Machine {
  constructor() {
    super(
      "Dog Shelter",
      1200,
      10,
      0.35
    );
  }
}

export class DogHotel extends Machine {
  constructor() {
    super(
      "Dog Hotel",
      3000,
      15,
      0.4
    );
  }
}

export class DogResort extends Machine {
  constructor() {
    super(
      "Dog Apartment",
      7500,
      20,
      0.45
    );
  }
}
