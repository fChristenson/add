const S = require("./_add_strings");
const B = require("./_add_booleans");
const A = require("./_add_arrays");
const O = require("./_add_objects");
const N = require("./_add_numbers");

const addAnyOfSameType = (a, b, fallbackValue = -1) => {
  const stringAdd = S.addStrings(a, b);
  const booleanAdd = B.addBooleans(a, b);
  const arrayAdd = A.addArrays(a, b);
  const objectAdd = O.addObjects(a, b);
  const numberAdd = N.addNumbers(a, b);

  if (!S.isFailedStringAdd(stringAdd)) return stringAdd;
  if (!B.isFailedBooleanAdd(booleanAdd)) return booleanAdd;
  if (!A.isFailedArrayAdd(arrayAdd)) return arrayAdd;
  if (!O.isFailedObjectAdd(objectAdd)) return objectAdd;
  if (!N.isFailedNumberAdd(numberAdd)) return numberAdd;

  return fallbackValue;
};

module.exports.addAnyOfSameType = addAnyOfSameType;
