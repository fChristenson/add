const anyOfSameType = require("./add_any_of_same_type");
const addTo = require("./add_to");

module.exports = {
  ...addTo,
  ...anyOfSameType
};
