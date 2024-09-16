class Player {
  #gameboard;

  constructor(gameboard, name) {
    this.#gameboard = gameboard;
    this.name = name;
  }

  get gameboard() {
    return this.#gameboard;
  }
}

module.exports = Player;
