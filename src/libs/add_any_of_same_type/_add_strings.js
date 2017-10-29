const isString = require("lodash/isString");

const addStrings = (a, b) => {
  if (!isString(a) || !isString(b)) return "";
  return a + b;
};

module.exports.addStrings = addStrings;

const isFailedStringAdd = val => {
  return val === "";
};

module.exports.isFailedStringAdd = isFailedStringAdd;
