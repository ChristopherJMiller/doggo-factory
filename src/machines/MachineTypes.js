import Machine from './Machine.js'

export class DogBed extends Machine {
  constructor() {
    super(
      "Dog Bed",
      10,
      1,
      1.5
    );
  }
}
