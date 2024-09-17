class Ship {
  #hits = 0;

  constructor(length = 1) {
    if (typeof length !== "number" || length < 1)
      throw new Error("Invalid length argument");
    this.length = length;
  }

  hit() {
    this.#hits++;
  }

  isSunk() {
    return this.#hits >= this.length;
  }
}

module.exports = Ship;
