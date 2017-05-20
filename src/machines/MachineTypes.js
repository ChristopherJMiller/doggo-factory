import Machine from './Machine.js'

export class DogBed extends Machine {
  constructor() {
    super(
      "Dog Bed",
      10,
      1,
      0.25,
      25
    );
  }
}

export class DogHouse extends Machine {
  constructor() {
    super(
      "Doghouse",
      70,
      3,
      0.25,
      20
    );
  }
}

export class DogYard extends Machine {
  constructor() {
    super(
      "Yard",
      300,
      5,
      0.3,
      20
    );
  }
}

export class DogShelter extends Machine {
  constructor() {
    super(
      "Dog Shelter",
      1200,
      10,
      0.35,
      30
    );
  }
}

export class DogHotel extends Machine {
  constructor() {
    super(
      "Dog Hotel",
      3000,
      15,
      0.4,
      25
    );
  }
}

export class DogResort extends Machine {
  constructor() {
    super(
      "Dog Apartment",
      7500,
      20,
      0.45,
      35
    );
  }
}

export class DogTown extends Machine {
  constructor() {
    super(
      "Dog Town",
      11000,
      27,
      0.45,
      40
    );
  }
}

export class DogCity extends Machine {
  constructor() {
    super(
      "Dog City",
      17000,
      35,
      0.5,
      45
    );
  }
}

export class DogCounty extends Machine {
  constructor() {
    super(
      "Dog County",
      25000,
      40,
      0.5,
      45
    );
  }
}
