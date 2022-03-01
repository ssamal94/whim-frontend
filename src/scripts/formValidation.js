function validate(event) {
  event.preventDefault();

  let nameRegex = /^[a-zA-Z ]{2,30}$/;
  let emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  //PASSWORD: Minimum eight characters, at least one uppercase letter, one lowercase letter and one number
  let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  let name = document.getElementsByName("name");
  let email = document.getElementsByName("email");
  let password = document.getElementsByName("password");
  let confirmPassword = document.getElementsByName("confirm-password");

  console.log(password);
}
export default validate;
