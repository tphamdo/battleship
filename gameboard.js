class Gameboard {
  #board;

  constructor(size = 10) {
    this.#board = new Array(size);
    this.size = size;
    for (let i = 0; i < size; ++i) {
      this.#board[i] = new Array(size);
      for (let j = 0; j < size; ++j) {
        this.#board[i][j] = -1;
      }
    }
  }

  placeShip(startCoord, length, dir, id) {
    if (
      !this.isPlacementValid(startCoord, length, dir) ||
      !this.isPlacementEmpty(startCoord, length, dir)
    ) {
      throw new Error("Invalid placement");
    }

    for (let i = 0; i < length; ++i) {
      this.#board[startCoord.y][startCoord.x] = id;
      if (dir === "v") {
        startCoord.y++;
      } else {
        startCoord.x++;
      }
    }
  }

  isPlacementValid(startCoord, length, dir) {
    let destCoord = { x: startCoord.x, y: startCoord.y };
    if (dir === "v") {
      destCoord.y += length - 1;
    } else {
      destCoord.x += length - 1;
    }
    return this.isCoordValid(startCoord) && this.isCoordValid(destCoord);
  }

  isPlacementEmpty(startCoord, length, dir) {
    if (!this.isPlacementValid(startCoord, length, dir)) return false;

    let valid = true;
    let curCoord = { x: startCoord.x, y: startCoord.y };
    for (let i = 0; i < length; ++i) {
      valid &= this.#board[curCoord.y][curCoord.x] === -1;
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
