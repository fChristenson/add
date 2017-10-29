const isBoolean = require("lodash/isBoolean");

const addBooleans = (a, b) => {
  if (!isBoolean(a) || !isBoolean(b)) return -1;
  return a + b;
};

module.exports.addBooleans = addBooleans;

const isFailedBooleanAdd = val => {
  return val === -1;
};

module.exports.isFailedBooleanAdd = isFailedBooleanAdd;
