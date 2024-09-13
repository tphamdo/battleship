describe("ship", function () {
  it("should exist", function () {
    expect(require("./ship")).toBeDefined();
  });

  const Ship = require("./ship");

  describe("length", function () {
    it("should return the length passed into constructor", function () {
      let ship = new Ship(4);
      expect(ship.length).toBe(4);
    });

    it("should throw excpetion if invalid length", function () {
      var testCases = [-1, 0, "str"];
      testCases.forEach((tc) => {
        expect(() => {
          new Ship(tc);
        }).toThrow("Invalid length argument");
      });
    });
  });

  describe("hit", function () {
    it("should exist", function () {
      let ship = new Ship();
      expect(ship.hit).toBeDefined();
    });
  });

  describe("sunk", function () {
    it("should be sunk if num hits equals length", function () {
      let ship = new Ship(4);
      expect(ship.isSunk()).toBe(false);
      ship.hit();
      ship.hit();
      ship.hit();
      ship.hit();
      expect(ship.isSunk()).toBe(true);
    });
  });
});
