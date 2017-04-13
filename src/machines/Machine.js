export default class Machine {

  constructor(name, price, bonesPerSecond, unitPriceMultiplier) {
    this.name = name;
    this.price = price;
    this.bps = bonesPerSecond;
    this.upm = bonesPerSecond;
    this.count = 0;
  }

  purchaseMachine() {
    this.count++;
  }
}
