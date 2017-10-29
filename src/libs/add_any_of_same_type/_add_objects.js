const isObject = require("lodash/isObject");

const addObjects = (a, b) => {
  if (!isObject(a) || !isObject(b)) return {};
  return { ...a, ...b };
};

module.exports.addObjects = addObjects;

const isFailedObjectAdd = val => {
  return isObject(val) && Object.keys(val).length === 0;
};

module.exports.isFailedObjectAdd = isFailedObjectAdd;
