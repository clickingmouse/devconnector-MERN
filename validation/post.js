const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  //console.log(data);
  //console.log(data.name);
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";

  if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
    errors.text = "Post must be between 10 and 300";
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = "text field requifield red";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
