const GameController = require("./gameController.js");

describe("Constructor", function () {
  it("should work", function () {
    const SIZE = 4;
    const PLAYER_1 = "Mary";
    const PLAYER_2 = "Joe";
    let gc = new GameController(SIZE, PLAYER_1, PLAYER_2);

    let p = gc.player1;
    expect(gc.player1.name).toBe(PLAYER_1);
    expect(gc.player2.name).toBe(PLAYER_2);
    expect(gc.player1.gameboard.size).toBe(SIZE);
    expect(gc.player2.gameboard.size).toBe(SIZE);
  });

  it("defaults player2 to Computer", function () {
    const SIZE = 4;
    const PLAYER_1 = "Mary";
    const COMPUTER = "Computer";
    let gc = new GameController(SIZE, PLAYER_1);

    expect(gc.player1.name).toBe(PLAYER_1);
    expect(gc.player2.name).toBe(COMPUTER);
  });

  it("defaults player1 to Player 1", function () {
    const PLAYER_1 = "Player 1";
    let gc = new GameController();

    expect(gc.player1.name).toBe(PLAYER_1);
  });
});

describe("switchPlayerTurn", function () {
  it("should change player turn", function () {
    const SIZE = 10;
    const PLAYER_1 = "Player 1";
    const PLAYER_2 = "Player 2";
    let gc = new GameController(SIZE, PLAYER_1, PLAYER_2);
    let p = gc.player1;

    expect(gc.activePlayer.name).toBe(PLAYER_1);
    expect(gc.waitingPlayer.name).toBe(PLAYER_2);

    gc.switchPlayerTurn();
    expect(gc.activePlayer.name).toBe(PLAYER_2);
    expect(gc.waitingPlayer.name).toBe(PLAYER_1);

    gc.switchPlayerTurn();
    expect(gc.activePlayer.name).toBe(PLAYER_1);
    expect(gc.waitingPlayer.name).toBe(PLAYER_2);
  });
});

describe("playTurn", function () {
  it("should mark miss on opposing board", function () {
    const PLAYER_1 = "Player 1";
    const PLAYER_2 = "Player 2";
    let gc = new GameController(4, PLAYER_1, PLAYER_2);
    let expected = [
      ["M", "E", "E", "E"],
      ["E", "E", "E", "E"],
      ["E", "E", "E", "E"],
      ["E", "E", "E", "E"],
    ];
    expect(gc.activePlayer.name).toBe(PLAYER_1);
    expect(gc.waitingPlayer.name).toBe(PLAYER_2);

    gc.playTurn({ x: 0, y: 0 });

    expect(gc.activePlayer.name).toBe(PLAYER_2);
    expect(gc.waitingPlayer.name).toBe(PLAYER_1);
    expect(gc.activePlayer.gameboard.board).toEqual(expected);

    let expected2 = [
      ["E", "E", "E", "E"],
      ["E", "E", "E", "E"],
      ["E", "E", "M", "E"],
      ["E", "E", "E", "E"],
    ];
    gc.playTurn({ x: 2, y: 2 });
    expect(gc.activePlayer.name).toBe(PLAYER_1);
    expect(gc.waitingPlayer.name).toBe(PLAYER_2);
    expect(gc.activePlayer.gameboard.board).toEqual(expected2);
  });
});
