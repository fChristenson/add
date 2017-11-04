const { addAnyOfSameType } = require("../add_any_of_same_type");
const get = require("lodash/get");
const isObject = require("lodash/isObject");

const addTo = (a, b, options) => {
  const sameTypeAdd = addAnyOfSameType(a, b);
  if (!sameTypeAddFailed(sameTypeAdd)) return sameTypeAdd;

  if (Array.isArray(a)) return a.concat([b]);
  if (Array.isArray(b)) return b.concat([a]);

  const propName = get(options, "propName");
  if (canMergeProperty(a, b, propName)) return mergeToObject(a, b, propName);

  return a + b;
};

module.exports.addTo = addTo;

const mergeToObject = (a, b, propName) => {
  const toMerge = {};

  if (isObject(a)) {
    toMerge[propName] = b;
    return { ...a, ...toMerge };
  }

  if (isObject(b)) {
    toMerge[propName] = a;
    return { ...b, ...toMerge };
  }

  return {};
};

const canMergeProperty = (a, b, propName) => {
  return (isObject(a) || isObject(b)) && propName;
};

const sameTypeAddFailed = val => {
  return val === -1;
};
