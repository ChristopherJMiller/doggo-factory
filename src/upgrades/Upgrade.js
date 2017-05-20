export default class Upgrade {

  constructor(name, price, upgradePriceMultiplier) {
    this.name = name;
    this.price = price;
    this.upm = upgradePriceMultiplier;
    this.count = 0;

    this.upgradeCost = function() {
      return Math.ceil(this.price * Math.pow(1 + this.upm, this.count));
    }
  }

  purchaseUpgrade() {
    this.count++;
  }
}
