class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    return (this.mid = Math.round((this.min + this.max) / 2));
  }

  lower() {
    this.max = this.mid;
    this.guess();
  }

  greater() {
    this.min = this.mid;
    this.guess();
  }
}

module.exports = GuessingGame;
