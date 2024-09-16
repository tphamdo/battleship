class Gameboard {
  #board;
  #curShipId = 0;
  #ships = [];

  constructor(size = 10) {
    this.#board = new Array(size);
    this.size = size;
    for (let i = 0; i < size; ++i) {
      this.#board[i] = new Array(size);
      for (let j = 0; j < size; ++j) {
        this.#board[i][j] = "E";
      }
    }
  }

  placeShip(ship, startCoord, dir) {
    if (
      !this.isPlacementValid(startCoord, ship.length, dir) ||
      !this.isPlacementEmpty(startCoord, ship.length, dir)
    ) {
      throw new Error("Invalid placement");
    }

    for (let i = 0; i < ship.length; ++i) {
      this.#board[startCoord.y][startCoord.x] = this.#ships.length;
      if (dir === "v") {
        startCoord.y++;
      } else {
        startCoord.x++;
      }
    }

    this.#ships.push(ship);
  }

  receiveAttack(coord) {
    if (!this.isCoordValid(coord)) return;
    let idx = this.#board[coord.y][coord.x];
    if (typeof idx === "number") {
      this.#ships[idx].hit();
      this.#board[coord.y][coord.x] = "H";
    } else {
      this.#board[coord.y][coord.x] = "M";
    }
  }

  isPlacementValid(startCoord, length, dir) {
    return (
      this.isPlacementOnBoard(startCoord, length, dir) &&
      this.isPlacementEmpty(startCoord, length, dir)
    );
  }

  isPlacementOnBoard(startCoord, length, dir) {
    let destCoord = { x: startCoord.x, y: startCoord.y };
    if (dir === "v") {
      destCoord.y += length - 1;
    } else {
      destCoord.x += length - 1;
    }
    return this.isCoordValid(startCoord) && this.isCoordValid(destCoord);
  }

  isPlacementEmpty(startCoord, length, dir) {
    if (!this.isPlacementOnBoard(startCoord, length, dir)) return false;

    let valid = true;
    let curCoord = { x: startCoord.x, y: startCoord.y };
    for (let i = 0; i < length; ++i) {
      valid &= this.#board[curCoord.y][curCoord.x] === "E";
      if (dir === "v") {
        curCoord.y++;
      } else {
        curCoord.x++;
      }
    }
    return valid;
  }

  isCoordValid(coord) {
    return (
      coord.x >= 0 && coord.y >= 0 && coord.x < this.size && coord.y < this.size
    );
  }
  get board() {
    return this.#board;
  }
}

module.exports = Gameboard;
