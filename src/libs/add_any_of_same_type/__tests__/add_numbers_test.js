const add = require("../_add_numbers");

describe("Add test", () => {
  it("has a module", () => {
    expect(add).toBeDefined();
  });

  describe("add", () => {
    it("adds two positive integers together", () => {
      const expected = 2;
      const actual = add.addNumbers(1, 1);
      expect(actual).toEqual(expected);
    });

    it("adds two negative integers together", () => {
      const expected = -2;
      const actual = add.addNumbers(-1, -1);
      expect(actual).toEqual(expected);
    });

    it("adds a negative and a positive integers together", () => {
      const expected = 0;
      const actual = add.addNumbers(1, -1);
      expect(actual).toEqual(expected);
    });

    it("adds zero to zero", () => {
      const expected = 0;
      const actual = add.addNumbers(0, 0);
      expect(actual).toEqual(expected);
    });

    /* 
      This is where most programmers will stop but I feel
      like we are not quite done just yet. 
    */

    it("returns -1 for undefined input", () => {
      const expected = -1;
      const actual = add.addNumbers();
      expect(actual).toEqual(expected);
    });

    it("returns -1 if the left param is undefined", () => {
      const expected = -1;
      const actual = add.addNumbers(undefined, 1);
      expect(actual).toEqual(expected);
    });

    it("returns -1 if the right param is undefined", () => {
      const expected = -1;
      const actual = add.addNumbers(1);
      expect(actual).toEqual(expected);
    });

    it("returns -1 for adding a number to a string", () => {
      const expected = -1;
      const actual = add.addNumbers(1, "foo");
      expect(actual).toEqual(expected);
    });

    it("returns -1 for adding a number to a boolean", () => {
      const expected = -1;
      const actual = add.addNumbers(1, true);
      expect(actual).toEqual(expected);
    });

    it("returns -1 for adding a  number to an array", () => {
      const expected = -1;
      const actual = add.addNumbers(1, []);
      expect(actual).toEqual(expected);
    });

    it("returns -1 for adding a number to an object", () => {
      const expected = -1;
      const actual = add.addNumbers(1, {});
      expect(actual).toEqual(expected);
    });
  });

  describe("isFailedNumberAdd", () => {
    it("returns true if number is -1", () => {
      const expected = true;
      const actual = add.isFailedNumberAdd(-1);
      expect(actual).toEqual(expected);
    });

    it("returns false if number is not -1", () => {
      const expected = false;
      const actual = add.isFailedNumberAdd(1);
      expect(actual).toEqual(expected);
    });
  });
});
