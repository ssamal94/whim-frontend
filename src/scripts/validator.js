function validateEmail(email) {
  var format =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(format)) {
    return true;
  } else {
    return false;
  }
}

function validateName(name) {
  if (name.length > 0) {
    return true;
  } else return false;
}

function validatePassword(password) {
  //Minimum eight characters, at least one uppercase letter, one lowercase letter and one number
  var format = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (password.match(format)) {
    return true;
  } else return false;
}

function validateConfirmPassword(password, confirmPassword) {
  if (password === confirmPassword && password !== "") {
    return true;
  } else return false;
}

export {
  validateEmail,
  validateName,
  validatePassword,
  validateConfirmPassword,
};
