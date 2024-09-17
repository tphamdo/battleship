const Gameboard = require("./gameboard");
const Ship = require("./ship");

describe("board", function () {
  it("should be empty and default to size of 10", function () {
    const defaultLen = 10;
    let gb = new Gameboard();
    expect(gb.size).toBe(defaultLen);
    for (let i = 0; i < defaultLen; ++i) {
      for (let j = 0; j < defaultLen; ++j) {
        expect(gb.board[i][j]).toBe("E");
      }
    }
  });

  it("should be empty with custom size", function () {
    const len = 4;
    let gb = new Gameboard(len);
    expect(gb.size).toBe(len);
    for (let i = 0; i < len; ++i) {
      for (let j = 0; j < len; ++j) {
        expect(gb.board[i][j]).toBe("E");
      }
    }
  });
});

describe("placeShip", function () {
  it("should update board with ship's id at ship location", function () {
    var testCases = [
      {
        coord: { x: 0, y: 0 },
        ship: new Ship(3),
        dir: "h",
        size: 4,
        expected: [
          [0, 0, 0, "E"],
          ["E", "E", "E", "E"],
          ["E", "E", "E", "E"],
          ["E", "E", "E", "E"],
        ],
      },
      {
        coord: { x: 1, y: 1 },
        ship: new Ship(3),
        dir: "v",
        size: 4,
        expected: [
          ["E", "E", "E", "E"],
          ["E", 0, "E", "E"],
          ["E", 0, "E", "E"],
          ["E", 0, "E", "E"],
        ],
      },
      {
        coord: { x: 0, y: 0 },
        ship: new Ship(4),
        dir: "h",
        size: 4,
        expected: [
          [0, 0, 0, 0],
          ["E", "E", "E", "E"],
          ["E", "E", "E", "E"],
          ["E", "E", "E", "E"],
        ],
      },
      {
        coord: { x: 0, y: 0 },
        ship: new Ship(4),
        dir: "v",
        size: 4,
        expected: [
          [0, "E", "E", "E"],
          [0, "E", "E", "E"],
          [0, "E", "E", "E"],
          [0, "E", "E", "E"],
        ],
      },
    ];
    testCases.forEach((tc) => {
      let gb = new Gameboard(tc.size);
      gb.placeShip(tc.ship, tc.coord, tc.dir);

      expect(gb.board).toEqual(tc.expected);
    });
  });

  it("should throw error if invalid placement", function () {
    var testCases = [
      {
        coord: { x: "E", y: 0 },
        length: 4,
        dir: "v",
        id: 0,
        size: 4,
        expected: [
          ["E", "E", "E", "E"],
          ["E", "E", "E", "E"],
          ["E", "E", "E", "E"],
          ["E", "E", "E", "E"],
        ],
      },
      {
        coord: { x: 0, y: 1 },
        length: 4,
        dir: "v",
        id: 0,
        size: 4,
        expected: [
          ["E", "E", "E", "E"],
          ["E", "E", "E", "E"],
          ["E", "E", "E", "E"],
          ["E", "E", "E", "E"],
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
        placements: [
          { coord: { x: 0, y: 0 }, ship: new Ship(3), dir: "h" },
          { coord: { x: 1, y: 1 }, ship: new Ship(3), dir: "v" },
        ],
        size: 4,
        expected: [
          [0, 0, 0, "E"],
          ["E", 1, "E", "E"],
          ["E", 1, "E", "E"],
          ["E", 1, "E", "E"],
        ],
      },
      {
        placements: [
          { coord: { x: 0, y: 0 }, ship: new Ship(3), dir: "h" },
          { coord: { x: 0, y: 1 }, ship: new Ship(3), dir: "h" },
        ],
        size: 4,
        expected: [
          [0, 0, 0, "E"],
          [1, 1, 1, "E"],
          ["E", "E", "E", "E"],
          ["E", "E", "E", "E"],
        ],
      },
    ];

    testCases.forEach((tc) => {
      let gb = new Gameboard(tc.size);
      tc.placements.forEach((p) => {
        gb.placeShip(p.ship, p.coord, p.dir);
      });
      expect(gb.board).toEqual(tc.expected);
    });
  });

  it("Multiple ships: should throw error if invalid placement", function () {
    var testCases = [
      {
        placements: [
          { coord: { x: 0, y: 0 }, ship: new Ship(3), dir: "h" },
          { coord: { x: 1, y: 1 }, ship: new Ship(4), dir: "v" },
        ],
        size: 4,
        expected: [
          [0, 0, 0, "E"],
          ["E", "E", "E", "E"],
          ["E", "E", "E", "E"],
          ["E", "E", "E", "E"],
        ],
      },
      {
        placements: [
          { coord: { x: 0, y: 3 }, ship: new Ship(4), dir: "h" },
          { coord: { x: 0, y: 0 }, ship: new Ship(4), dir: "v" },
        ],
        size: 4,
        expected: [
          ["E", "E", "E", "E"],
          ["E", "E", "E", "E"],
          ["E", "E", "E", "E"],
          [0, 0, 0, 0],
        ],
      },
    ];

    testCases.forEach((tc) => {
      let gb = new Gameboard(tc.size);
      expect(() => {
        tc.placements.forEach((p) => {
          gb.placeShip(p.ship, p.coord, p.dir);
        });
      }).toThrow("Invalid placement");
      expect(gb.board).toEqual(tc.expected);
    });
  });
});

describe("receiveAttack", function () {
  it("should update board with hit", function () {
    const testCases = [
      {
        placements: [{ coord: { x: 0, y: 3 }, ship: new Ship(4), dir: "h" }],
        size: 4,
        expected: [
          ["E", "E", "E", "E"],
          ["E", "E", "E", "E"],
          ["E", "E", "E", "E"],
          [0, 0, "H", 0],
        ],
        attacks: [{ x: 2, y: 3 }],
      },
    ];

    testCases.forEach((tc) => {
      let gb = new Gameboard(tc.size);
      tc.placements.forEach((p) => {
        gb.placeShip(p.ship, p.coord, p.dir);
      });
      tc.attacks.forEach((a) => {
        gb.receiveAttack(a);
      });
      expect(gb.board).toEqual(tc.expected);
    });
  });

  it("should update board with miss", function () {
    const testCases = [
      {
        placements: [{ coord: { x: 0, y: 3 }, ship: new Ship(4), dir: "h" }],
        size: 4,
        expected: [
          ["E", "E", "E", "E"],
          ["E", "M", "E", "E"],
          ["E", "E", "M", "E"],
          [0, 0, 0, 0],
        ],
        attacks: [
          { x: 2, y: 2 },
          { x: 1, y: 1 },
        ],
      },
    ];

    testCases.forEach((tc) => {
      let gb = new Gameboard(tc.size);
      tc.placements.forEach((p) => {
        gb.placeShip(p.ship, p.coord, p.dir);
      });
      tc.attacks.forEach((a) => {
        gb.receiveAttack(a);
      });
      expect(gb.board).toEqual(tc.expected);
    });
  });

  it("should update board with multiple misses and hits", function () {
    const testCases = [
      {
        placements: [
          { coord: { x: 0, y: 3 }, ship: new Ship(4), dir: "h" },
          { coord: { x: 2, y: 0 }, ship: new Ship(3), dir: "v" },
        ],
        size: 4,
        expected: [
          ["E", "E", 1, "E"],
          ["E", "M", 1, "E"],
          ["M", "E", "H", "E"],
          [0, 0, 0, "H"],
        ],
        attacks: [
          { x: 0, y: 2 },
          { x: 1, y: 1 },
          { x: 2, y: 2 },
          { x: 3, y: 3 },
        ],
      },
    ];

    testCases.forEach((tc) => {
      let gb = new Gameboard(tc.size);
      tc.placements.forEach((p) => {
        gb.placeShip(p.ship, p.coord, p.dir);
      });
      tc.attacks.forEach((a) => {
        gb.receiveAttack(a);
      });
      expect(gb.board).toEqual(tc.expected);
    });
  });
});
