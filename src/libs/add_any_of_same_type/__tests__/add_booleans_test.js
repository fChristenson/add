const add = require("../_add_booleans");

describe("Add Booleans test", () => {
  it("has a module", () => {
    expect(add).toBeDefined();
  });

  describe("addBooleans", () => {
    it("adds two true booleans", () => {
      const expected = 2;
      const actual = add.addBooleans(true, true);
      expect(actual).toEqual(expected);
    });

    it("adds two false booleans", () => {
      const expected = 0;
      const actual = add.addBooleans(false, false);
      expect(actual).toEqual(expected);
    });

    it("adds a true and a false Booleans", () => {
      const expected = 1;
      const actual = add.addBooleans(true, false);
      expect(actual).toEqual(expected);
    });

    /* 
      This is where most programmers will stop but I feel
      like we are not quite done just yet. 
    */

    it("returns -1 for undefined input", () => {
      const expected = -1;
      const actual = add.addBooleans();
      expect(actual).toEqual(expected);
    });

    it("returns -1 if the left param is undefined", () => {
      const expected = -1;
      const actual = add.addBooleans(undefined, true);
      expect(actual).toEqual(expected);
    });

    it("returns -1 if the right param is undefined", () => {
      const expected = -1;
      const actual = add.addBooleans(true);
      expect(actual).toEqual(expected);
    });

    it("returns -1 for adding a number to a boolean", () => {
      const expected = -1;
      const actual = add.addBooleans(1, true);
      expect(actual).toEqual(expected);
    });

    it("returns -1 for adding a string to a boolean", () => {
      const expected = -1;
      const actual = add.addBooleans("foo", true);
      expect(actual).toEqual(expected);
    });

    it("returns -1 for adding a boolean to an array", () => {
      const expected = -1;
      const actual = add.addBooleans(true, []);
      expect(actual).toEqual(expected);
    });

    it("returns -1 for adding a boolean to an object", () => {
      const expected = -1;
      const actual = add.addBooleans(true, {});
      expect(actual).toEqual(expected);
    });
  });

  describe("isFailedBooleanAdd", () => {
    it("returns true if value is -1", () => {
      const expected = true;
      const actual = add.isFailedBooleanAdd(-1);
      expect(actual).toEqual(expected);
    });

    it("returns false if value is not -1", () => {
      const expected = false;
      const actual = add.isFailedBooleanAdd(1);
      expect(actual).toEqual(expected);
    });
  });
});
