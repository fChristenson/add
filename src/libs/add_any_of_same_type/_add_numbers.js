const isNumber = require("lodash/isNumber");

const addNumbers = (a, b) => {
  if (!isNumber(a) || !isNumber(b)) return -1;
  return a + b;
};

module.exports.addNumbers = addNumbers;

const isFailedNumberAdd = val => {
  return val === -1;
};

module.exports.isFailedNumberAdd = isFailedNumberAdd;
