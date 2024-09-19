const Player = require("./player.js");
const Gameboard = require("./gameboard.js");
const Ship = require("./ship.js");

class GameController {
  #activePlayer;
  #waitingPlayer;
  static get DEFAULT_GAME_SIZE() {
    return 10;
  }

  static get DEFAULT_SHIP_SIZES() {
    return [
      ...Array(1).fill(5),
      ...Array(1).fill(4),
      ...Array(2).fill(3),
      ...Array(1).fill(2),
      // ...Array(5).fill(2),
    ];
  }

  constructor({
    gridSize = 10,
    player1Name = "You",
    player2Name = "Computer",
  } = {}) {
    this.gridSize = gridSize;
    this.player1 = new Player(new Gameboard(gridSize), player1Name);
    this.player2 = new Player(new Gameboard(gridSize), player2Name);
    this.#activePlayer = this.player1;
    this.#waitingPlayer = this.player2;
  }

  playTurn(coord) {
    this.#waitingPlayer.gameboard.receiveAttack(coord);
    this.#switchPlayerTurn();
  }

  playRandomTurn() {
    while (true) {
      try {
        let rc = this.getRandomCoord();
        console.log(this.player1.gameboard.board);
        console.log(rc);
        this.#waitingPlayer.gameboard.receiveAttack(rc);
      } catch (error) {
        console.log(error);
        continue;
      }
      break;
    }
    this.#switchPlayerTurn();
  }

  get activePlayer() {
    return this.#activePlayer;
  }

  get waitingPlayer() {
    return this.#waitingPlayer;
  }

  get player1Board() {
    return this.player1.gameboard.board;
  }

  get player2Board() {
    return this.player2.gameboard.board;
  }

  #switchPlayerTurn() {
    [this.#activePlayer, this.#waitingPlayer] = [
      this.#waitingPlayer,
      this.#activePlayer,
    ];
  }

  initDefaults() {
    this.gridSize = GameController.DEFAULT_GAME_SIZE;
    this.#initRandomDefaultSizedBoard(this.player1);
    this.#initRandomDefaultSizedBoard(this.player2);
  }

  #initRandomDefaultSizedBoard(player) {
    player.gameboard = new Gameboard(this.gridSize);
    GameController.DEFAULT_SHIP_SIZES.forEach((size) => {
      const ship = new Ship(size);
      while (true) {
        try {
          player.placeShip({
            ship: ship,
            coord: this.getRandomCoord(),
            dir: GameController.getRandomDirection(),
          });
        } catch (error) {
          console.log(error);
          continue; // keep trying to place ship if fails
        }
        break;
      }
    });
    console.log(player.gameboard.board);
  }

  getRandomCoord() {
    return {
      x: Random.getRandomInt(this.gridSize - 1),
      y: Random.getRandomInt(this.gridSize - 1),
    };
  }

  static getRandomDirection() {
    return Random.getRandomInt(1) === 1 ? "v" : "h";
  }
}

class Random {
  static getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }
}

module.exports = GameController;
