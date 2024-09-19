class Player {
  constructor(gameboard, name) {
    this.gameboard = gameboard;
    this.name = name;
  }

  placeShip({ ship, coord, dir }) {
    this.gameboard.placeShip(ship, coord, dir);
  }
}

module.exports = Player;
