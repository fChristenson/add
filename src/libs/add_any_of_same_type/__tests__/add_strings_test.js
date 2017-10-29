const add = require("../_add_strings");

describe("Add strings test", () => {
  it("has a module", () => {
    expect(add).toBeDefined();
  });

  describe("addStrings", () => {
    it("adds two strings", () => {
      const expected = "foobar";
      const actual = add.addStrings("foo", "bar");
      expect(actual).toEqual(expected);
    });

    it("adds two empty strings", () => {
      const expected = "";
      const actual = add.addStrings("", "");
      expect(actual).toEqual(expected);
    });

    /* 
      This is where most programmers will stop but I feel
      like we are not quite done just yet. 
    */

    it("returns empty string for undefined input", () => {
      const expected = "";
      const actual = add.addStrings();
      expect(actual).toEqual(expected);
    });

    it("returns empty string if the left param is undefined", () => {
      const expected = "";
      const actual = add.addStrings(undefined, "foo");
      expect(actual).toEqual(expected);
    });

    it("returns empty string if the right param is undefined", () => {
      const expected = "";
      const actual = add.addStrings("foo");
      expect(actual).toEqual(expected);
    });

    it("returns empty string for adding a number to a string", () => {
      const expected = "";
      const actual = add.addStrings(1, "foo");
      expect(actual).toEqual(expected);
    });

    it("returns empty string for adding a string to a boolean", () => {
      const expected = "";
      const actual = add.addStrings("foo", true);
      expect(actual).toEqual(expected);
    });

    it("returns empty string for adding a string to an array", () => {
      const expected = "";
      const actual = add.addStrings("foo", []);
      expect(actual).toEqual(expected);
    });

    it("returns empty string for adding a string to an object", () => {
      const expected = "";
      const actual = add.addStrings("foo", {});
      expect(actual).toEqual(expected);
    });
  });

  describe("isFailedStringAdd", () => {
    it("returns true if value is empty string", () => {
      const expected = true;
      const actual = add.isFailedStringAdd("");
      expect(actual).toEqual(expected);
    });

    it("returns false if value is not empty string", () => {
      const expected = false;
      const actual = add.isFailedStringAdd(1);
      expect(actual).toEqual(expected);
    });
  });
});
