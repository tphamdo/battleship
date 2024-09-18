const GameController = require("./gameController.js");

describe("playTurn", function () {
  it("should switch player turn", function () {
    const PLAYER_1 = "Player 1";
    const PLAYER_2 = "Player 2";
    let gc = new GameController({
      player1Name: PLAYER_1,
      player2Name: PLAYER_2,
    });
    expect(gc.activePlayer.name).toBe(PLAYER_1);
    expect(gc.waitingPlayer.name).toBe(PLAYER_2);

    gc.playTurn({ x: 0, y: 0 });

    expect(gc.activePlayer.name).toBe(PLAYER_2);
    expect(gc.waitingPlayer.name).toBe(PLAYER_1);

    gc.playTurn({ x: 0, y: 0 });

    expect(gc.activePlayer.name).toBe(PLAYER_1);
    expect(gc.waitingPlayer.name).toBe(PLAYER_2);
  });
});
