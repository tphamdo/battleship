class Gameboard {
  #board;
  #curShipId = 0;
  #ships = [];

  constructor(size = 10) {
    this.size = size;
    this.#board = Array(size)
      .fill()
      .map((_) => new Array(size).fill("E"));
  }

  placeShip(ship, startCoord, dir) {
    if (
      !this.isPlacementValid(startCoord, ship.length, dir) ||
      !this.isPlacementEmpty(startCoord, ship.length, dir)
    ) {
      throw new Error("Invalid placement");
    }

    for (let i = 0; i < ship.length; ++i) {
      this.#board[startCoord.y][startCoord.x] = this.#ships.length + 1;
      if (dir === "v") {
        startCoord.y++;
      } else {
        startCoord.x++;
      }
    }

    this.#ships.push(ship);
  }

  receiveAttack({ x, y }) {
    if (!this.isCoordValid({ x, y })) throw new Error("Invalid Coordinate");
    let value = this.#board[y][x];
    if (typeof value === "number") {
      this.#ships[value - 1].hit();
      this.#board[y][x] = -value;
    } else if (value === "E") {
      this.#board[y][x] = "M";
    } else {
      throw new Error("Attacking grid position that has already been tried");
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

  isHitOrMiss({ x, y }) {
    let value = this.#board[y][x];
    return (typeof value === "number" && value < 0) || value === "M";
  }

  get board() {
    return this.#board;
  }
}

module.exports = Gameboard;
