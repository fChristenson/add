const addNumbers = require("./_add_numbers");
const addStrings = require("./_add_strings");
const addArrays = require("./_add_arrays");
const addObjects = require("./_add_objects");
const addBooleans = require("./_add_booleans");
const addAnyOfSameType = require("./_add_any_of_same_type");

module.exports = {
  ...addAnyOfSameType,
  ...addBooleans,
  ...addNumbers,
  ...addStrings,
  ...addArrays,
  ...addObjects
};
