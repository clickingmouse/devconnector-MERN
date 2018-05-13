const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateExperienceInput(data) {
  //console.log(data);
  //console.log(data.name);
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.company = !isEmpty(data.company) ? data.company : "";
  data.from = !isEmpty(data.from) ? data.from : "";
  //data.password = !isEmpty(data.password) ? data.password : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "Job Title is required";
  }
  if (Validator.isEmpty(data.company)) {
    errors.company = "Job company is required";
  }
  if (Validator.isEmpty(data.from)) {
    errors.from = "Job from is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
