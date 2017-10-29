const add = require("../_add_arrays");

describe("Add test", () => {
  it("has a module", () => {
    expect(add).toBeDefined();
  });

  describe("add", () => {
    it("adds two arrays", () => {
      const expected = [1, 2];
      const actual = add.addArrays([1], [2]);
      expect(actual).toEqual(expected);
    });

    /* 
      This is where most programmers will stop but I feel
      like we are not quite done just yet. 
    */

    it("returns [] for a boolean to the array", () => {
      const expected = [];
      const actual = add.addArrays([], true);
      expect(actual).toEqual(expected);
    });

    it("returns [] for an object to the array", () => {
      const expected = [];
      const actual = add.addArrays([], {});
      expect(actual).toEqual(expected);
    });

    it("returns [] for a number to the array", () => {
      const expected = [];
      const actual = add.addArrays([], 0);
      expect(actual).toEqual(expected);
    });

    it("returns [] for undefined input", () => {
      const expected = [];
      const actual = add.addArrays();
      expect(actual).toEqual(expected);
    });

    it("returns [] if the left param is undefined", () => {
      const expected = [];
      const actual = add.addArrays(undefined, []);
      expect(actual).toEqual(expected);
    });

    it("returns [] if the right param is undefined", () => {
      const expected = [];
      const actual = add.addArrays([]);
      expect(actual).toEqual(expected);
    });
  });

  describe("isFailedArrayAdd", () => {
    it("returns true for empty array", () => {
      const expected = true;
      const actual = add.isFailedArrayAdd([]);
      expect(actual).toEqual(expected);
    });

    it("returns false for not empty array", () => {
      const expected = false;
      const actual = add.isFailedArrayAdd([1]);
      expect(actual).toEqual(expected);
    });
  });
});
