const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateEducationInput(data) {
  //console.log(data);
  //console.log(data.name);
  let errors = {};

  data.school = !isEmpty(data.school) ? data.school : "";
  data.degree = !isEmpty(data.degree) ? data.degree : "";
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : "";

  data.from = !isEmpty(data.from) ? data.from : "";
  //data.password = !isEmpty(data.password) ? data.password : "";

  if (Validator.isEmpty(data.school)) {
    errors.school = "School is required";
  }
  if (Validator.isEmpty(data.degree)) {
    errors.degree = "Job degree is required";
  }
  if (Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = "Job fieldofstudy is required";
  }
  if (Validator.isEmpty(data.from)) {
    errors.from = "Job from is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
