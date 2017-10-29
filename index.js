const {
  addNumbers,
  addStrings,
  addArrays,
  addObjects,
  addAnyOfSameType,
  addTo,
  addBooleans
} = require("./src/libs");

console.log(addNumbers(1, 1));
console.log("--------------------------");

console.log(addStrings("foo", "bar"));
console.log("--------------------------");

console.log(addArrays([1], [2]));
console.log("--------------------------");

console.log(addObjects({ foo: 1 }, { bar: 1 }));
console.log("--------------------------");

console.log(addBooleans(true, false));
console.log("--------------------------");

console.log("Results from our anyOfSameType");
console.log("--------------------------");

console.log(addAnyOfSameType(1, 1));
console.log("--------------------------");

console.log(addAnyOfSameType("foo", "bar"));
console.log("--------------------------");

console.log(addAnyOfSameType([1], [2]));
console.log("--------------------------");

console.log(addAnyOfSameType({ foo: 1 }, { bar: 1 }));
console.log("--------------------------");

console.log(addAnyOfSameType(true, false));
console.log("--------------------------");

console.log("Results from our addTo");
console.log("--------------------------");

console.log(addTo(1, 1));
console.log("--------------------------");

console.log(addTo("foo", "bar"));
console.log("--------------------------");

console.log(addTo([1], [2]));
console.log("--------------------------");

console.log(addTo({ foo: 1 }, { bar: 1 }));
console.log("--------------------------");

console.log(addTo(true, false));
console.log("--------------------------");

console.log(addTo(1, []));
console.log("--------------------------");

console.log(addTo(1, {}, { propName: "bar" }));
console.log("--------------------------");
