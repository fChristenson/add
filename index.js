const add = require("./src/libs/add_any_of_same_type");

console.log(add.addNumbers(1, 1));
console.log("--------------------------");

console.log(add.addStrings("foo", "bar"));
console.log("--------------------------");

console.log(add.addArrays([1], [2]));
console.log("--------------------------");

console.log(add.addObjects({ foo: 1 }, { bar: 1 }));
console.log("--------------------------");

console.log(add.addBooleans(true, false));
console.log("--------------------------");

console.log("Results from our anyOfSameType");
console.log("--------------------------");

console.log(add.addAnyOfSameType(1, 1));
console.log("--------------------------");

console.log(add.addAnyOfSameType("foo", "bar"));
console.log("--------------------------");

console.log(add.addAnyOfSameType([1], [2]));
console.log("--------------------------");

console.log(add.addAnyOfSameType({ foo: 1 }, { bar: 1 }));
console.log("--------------------------");

console.log(add.addAnyOfSameType(true, false));
console.log("--------------------------");
