const Gameboard = require("./gameboard");

describe("board", function () {
  it("should be empty and default to size of 10", function () {
    const defaultLen = 10;
    let gb = new Gameboard();
    for (let i = 0; i < defaultLen; ++i) {
      for (let j = 0; j < defaultLen; ++j) {
        expect(gb.board[i][j]).toBe(-1);
      }
    }
  });

  it("should be empty with custom size", function () {
    const len = 4;
    let gb = new Gameboard(len);
    for (let i = 0; i < len; ++i) {
      for (let j = 0; j < len; ++j) {
        expect(gb.board[i][j]).toBe(-1);
      }
    }
  });
});

describe("placeShip", function () {
  it("should update board with ship's id at ship location", function () {
    var testCases = [
      {
        coord: { x: 0, y: 0 },
        length: 3,
        dir: "h",
        id: 0,
        size: 4,
        expected: [
          [0, 0, 0, -1],
          [-1, -1, -1, -1],
          [-1, -1, -1, -1],
          [-1, -1, -1, -1],
        ],
      },
      {
        coord: { x: 1, y: 1 },
        length: 3,
        dir: "v",
        id: 0,
        size: 4,
        expected: [
          [-1, -1, -1, -1],
          [-1, 0, -1, -1],
          [-1, 0, -1, -1],
          [-1, 0, -1, -1],
        ],
      },
      {
        coord: { x: 0, y: 0 },
        length: 4,
        dir: "h",
        id: 2,
        size: 4,
        expected: [
          [2, 2, 2, 2],
          [-1, -1, -1, -1],
          [-1, -1, -1, -1],
          [-1, -1, -1, -1],
        ],
      },
      {
        coord: { x: 0, y: 0 },
        length: 4,
        dir: "v",
        id: 2,
        size: 4,
        expected: [
          [2, -1, -1, -1],
          [2, -1, -1, -1],
          [2, -1, -1, -1],
          [2, -1, -1, -1],
        ],
      },
    ];
    testCases.forEach((tc) => {
      let gb = new Gameboard(tc.size);
      gb.placeShip(tc.coord, tc.length, tc.dir, tc.id);

      expect(gb.board).toEqual(tc.expected);
    });
  });

  it("should throw error if invalid placement", function () {
    var testCases = [
      {
        coord: { x: -1, y: 0 },
        length: 4,
        dir: "v",
        id: 0,
        size: 4,
        expected: [
          [-1, -1, -1, -1],
          [-1, -1, -1, -1],
          [-1, -1, -1, -1],
          [-1, -1, -1, -1],
        ],
      },
      {
        coord: { x: 0, y: 1 },
        length: 4,
        dir: "v",
        id: 0,
        size: 4,
        expected: [
          [-1, -1, -1, -1],
          [-1, -1, -1, -1],
          [-1, -1, -1, -1],
          [-1, -1, -1, -1],
        ],
      },
      ,
    ];
    testCases.forEach((tc) => {
      let gb = new Gameboard(tc.size);
      expect(() => gb.placeShip(tc.coord, tc.length, tc.dir, tc.id)).toThrow(
        "Invalid placement",
      );

      expect(gb.board).toEqual(tc.expected);
    });
  });

  it("Multiple ships: should update board with ships' id", function () {
    var testCases = [
      {
        ships: [
          { coord: { x: 0, y: 0 }, length: 3, dir: "h", id: 0 },
          { coord: { x: 1, y: 1 }, length: 3, dir: "v", id: 1 },
        ],
        size: 4,
        expected: [
          [0, 0, 0, -1],
          [-1, 1, -1, -1],
          [-1, 1, -1, -1],
          [-1, 1, -1, -1],
        ],
      },
      {
        ships: [
          { coord: { x: 0, y: 0 }, length: 3, dir: "h", id: 0 },
          { coord: { x: 0, y: 1 }, length: 3, dir: "h", id: 1 },
        ],
        size: 4,
        expected: [
          [0, 0, 0, -1],
          [1, 1, 1, -1],
          [-1, -1, -1, -1],
          [-1, -1, -1, -1],
        ],
      },
    ];

    testCases.forEach((tc) => {
      let gb = new Gameboard(tc.size);
      tc.ships.forEach((ship) => {
        gb.placeShip(ship.coord, ship.length, ship.dir, ship.id);
      });
      expect(gb.board).toEqual(tc.expected);
    });
  });

  it("Multiple ships: should throw error if invalid placement", function () {
    var testCases = [
      {
        ships: [
          { coord: { x: 0, y: 0 }, length: 3, dir: "h", id: 0 },
          { coord: { x: 1, y: 1 }, length: 4, dir: "v", id: 1 },
        ],
        size: 4,
        expected: [
          [0, 0, 0, -1],
          [-1, -1, -1, -1],
          [-1, -1, -1, -1],
          [-1, -1, -1, -1],
        ],
      },
      {
        ships: [
          { coord: { x: 0, y: 3 }, length: 4, dir: "h", id: 0 },
          { coord: { x: 0, y: 0 }, length: 4, dir: "v", id: 1 },
        ],
        size: 4,
        expected: [
          [-1, -1, -1, -1],
          [-1, -1, -1, -1],
          [-1, -1, -1, -1],
          [0, 0, 0, 0],
        ],
      },
    ];

    testCases.forEach((tc) => {
      let gb = new Gameboard(tc.size);
      expect(() => {
        tc.ships.forEach((ship) => {
          gb.placeShip(ship.coord, ship.length, ship.dir, ship.id);
        });
      }).toThrow("Invalid placement");
      expect(gb.board).toEqual(tc.expected);
    });
  });
});
