const addArrays = (a, b) => {
  if (!Array.isArray(a) || !Array.isArray(b)) return [];
  return a.concat(b);
};

module.exports.addArrays = addArrays;

const isFailedArrayAdd = val => {
  return Array.isArray(val) && val.length === 0;
};

module.exports.isFailedArrayAdd = isFailedArrayAdd;
