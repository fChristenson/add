const add = require("../");

describe("Add test", () => {
  it("has a module", () => {
    expect(add).toBeDefined();
  });

  describe("addAnyOfSameType", () => {
    it("adds two arrays", () => {
      const expected = [1, 2];
      const actual = add.addAnyOfSameType([1], [2]);
      expect(actual).toEqual(expected);
    });

    it("adds two booleans", () => {
      const expected = 1;
      const actual = add.addAnyOfSameType(true, false);
      expect(actual).toEqual(expected);
    });

    it("adds two numbers", () => {
      const expected = 2;
      const actual = add.addAnyOfSameType(1, 1);
      expect(actual).toEqual(expected);
    });

    it("adds two objects", () => {
      const expected = { foo: 1, bar: 1 };
      const actual = add.addAnyOfSameType({ foo: 1 }, { bar: 1 });
      expect(actual).toEqual(expected);
    });

    it("adds two strings", () => {
      const expected = "foobar";
      const actual = add.addAnyOfSameType("foo", "bar");
      expect(actual).toEqual(expected);
    });

    it("returns -1 for no input", () => {
      const expected = -1;
      const actual = add.addAnyOfSameType();
      expect(actual).toEqual(expected);
    });

    it("returns -1 for missmatched adds", () => {
      const expected = -1;
      let actual = add.addAnyOfSameType(1, true);
      expect(actual).toEqual(expected);

      actual = add.addAnyOfSameType("foo", []);
      expect(actual).toEqual(expected);

      actual = add.addAnyOfSameType({}, []);
      expect(actual).toEqual(expected);
    });

    it("returns a default value if a add is not possible", () => {
      const expected = "failed";
      const actual = add.addAnyOfSameType(undefined, undefined, "failed");
      expect(actual).toEqual(expected);
    });
  });
});
