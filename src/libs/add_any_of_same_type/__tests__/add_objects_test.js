const add = require("../_add_objects");

describe("Add test", () => {
  it("has a module", () => {
    expect(add).toBeDefined();
  });

  describe("add", () => {
    it("adds two Objects", () => {
      const expected = { foo: 1, bar: 1 };
      const actual = add.addObjects({ foo: 1 }, { bar: 1 });
      expect(actual).toEqual(expected);
    });

    /* 
      This is where most programmers will stop but I feel
      like we are not quite done just yet. 
    */

    it("returns {} for a boolean to the array", () => {
      const expected = {};
      const actual = add.addObjects({}, true);
      expect(actual).toEqual(expected);
    });

    it("returns {} for an object to the array", () => {
      const expected = {};
      const actual = add.addObjects({}, {});
      expect(actual).toEqual(expected);
    });

    it("returns {} for a number to the array", () => {
      const expected = {};
      const actual = add.addObjects({}, 0);
      expect(actual).toEqual(expected);
    });

    it("returns {} for undefined input", () => {
      const expected = {};
      const actual = add.addObjects();
      expect(actual).toEqual(expected);
    });

    it("returns {} if the left param is undefined", () => {
      const expected = {};
      const actual = add.addObjects(undefined, {});
      expect(actual).toEqual(expected);
    });

    it("returns {} if the right param is undefined", () => {
      const expected = {};
      const actual = add.addObjects({});
      expect(actual).toEqual(expected);
    });
  });

  describe("isFailedObjectAdd", () => {
    it("returns true for empty object", () => {
      const expected = true;
      const actual = add.isFailedObjectAdd({});
      expect(actual).toEqual(expected);
    });

    it("returns false for not empty object", () => {
      const expected = false;
      const actual = add.isFailedObjectAdd({ foo: 1 });
      expect(actual).toEqual(expected);
    });
  });
});
