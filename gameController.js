const Player = require("./player.js");
const Gameboard = require("./gameboard.js");

class GameController {
  #activePlayer;
  #waitingPlayer;

  constructor(size = 10, player1Name = "Player 1", player2Name = "Computer") {
    let gb = new Gameboard(size);
    this.player1 = new Player(gb, player1Name);
    this.player2 = new Player(new Gameboard(size), player2Name);
    this.#activePlayer = this.player1;
    this.#waitingPlayer = this.player2;
  }

  playTurn(coord) {
    this.#waitingPlayer.gameboard.receiveAttack(coord);
    this.switchPlayerTurn();
  }

  get activePlayer() {
    return this.#activePlayer;
  }

  get waitingPlayer() {
    return this.#waitingPlayer;
  }

  switchPlayerTurn() {
    [this.#activePlayer, this.#waitingPlayer] = [
      this.#waitingPlayer,
      this.#activePlayer,
    ];
  }
}

module.exports = GameController;
