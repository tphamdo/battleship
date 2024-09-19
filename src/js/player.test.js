const Player = require("./player.js");
const Gameboard = require("./gameboard.js");

describe("Constructor", function () {
  it("should work", function () {
    const NAME = "Joe";
    let gb = new Gameboard(4);
    let player = new Player(gb, NAME);

    expect(player.gameboard).toBe(gb);
    expect(player.name).toEqual(NAME);
  });
});
