export default class Machine {

  constructor(name, price, bonesPerSecond, unitPriceMultiplier, perLife) {
    this.name = name;
    this.price = price;
    this.bps = bonesPerSecond;
    this.upm = unitPriceMultiplier;
    this.count = 0;
    this.totalLifetime = perLife;
    this.startingLifeTime = this.totalLifetime;
    this.currentLifetime = 0;

    this.unitCost = function() {
      return Math.ceil(this.price * Math.pow(1 + this.upm, this.count));
    }

    this.totalBPS = function() {
      return this.bps * this.count;
    }

    this.tickLifetime = function() {
      if (this.count > 0) {
        this.currentLifetime -= 0.1;
        if (this.currentLifetime <= 0) {
          this.count--;
          if (this.count !== 0) {
            this.currentLifetime = this.totalLifetime;
          }
        }
      }
    }
  }

  purchaseMachine() {
    this.count++;
    this.currentLifetime = this.totalLifetime;
  }
}
