const add = require("../");

describe("Add test", () => {
  it("has a module", () => {
    expect(add).toBeDefined();
  });

  describe("addTo", () => {
    it("adds two numbers", () => {
      const expected = 2;
      const actual = add.addTo(1, 1);
      expect(actual).toEqual(expected);
    });

    it("adds two booleans", () => {
      const expected = 1;
      const actual = add.addTo(true, false);
      expect(actual).toEqual(expected);
    });

    it("adds two arrays", () => {
      const expected = [1, 2];
      const actual = add.addTo([1], [2]);
      expect(actual).toEqual(expected);
    });

    it("add two objects", () => {
      const expected = { foo: 1, bar: 1 };
      const actual = add.addTo({ foo: 1 }, { bar: 1 });
      expect(actual).toEqual(expected);
    });

    it("add two strings", () => {
      const expected = "foobar";
      const actual = add.addTo("foo", "bar");
      expect(actual).toEqual(expected);
    });

    it("adds a number to a string", () => {
      const expected = "foo1";
      const actual = add.addTo("foo", 1);
      expect(actual).toEqual(expected);
    });

    it("adds a boolean to a string", () => {
      const expected = "footrue";
      const actual = add.addTo("foo", true);
      expect(actual).toEqual(expected);
    });

    it("adds a boolean to a number", () => {
      const expected = 1;
      const actual = add.addTo(false, 1);
      expect(actual).toEqual(expected);
    });

    it("adds anything to an array", () => {
      const expected = [1];
      const actual = add.addTo([], 1);
      expect(actual).toEqual(expected);
    });

    it("adds anything to an object if a propName option is provided", () => {
      const expected = { foo: 1 };
      const actual = add.addTo(1, {}, { propName: "foo" });
      expect(actual).toEqual(expected);
    });

    it("returns the native string result if no propName option is provided", () => {
      const expected = "foo[object Object]";
      const actual = add.addTo("foo", {});
      expect(actual).toEqual(expected);
    });
  });
});
