import React, { useState } from "react";
import logo from "../assets/images/whim.png";
import {
  validateEmail,
  validateName,
  validatePassword,
  validateConfirmPassword,
} from "../scripts/validator.js";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

/**@module Component_RegisterUser */
/**
 * @function Register
 * @description This method registers a new user to the platform.
 * @param {String} name Full name of the user
 * @param {String} email Email address of the user
 * @param {String} password Password
 * @param {String} confirmPassword Repeat Password
 */
const Register = () => {
  //Route constant for navigation
  const navigate = useNavigate();

  //Store variable to store user details
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //Store variables to store helper text in case of wrong input from user
  const [helperTexts, setHelperTexts] = useState({
    nameMessage: "",
    emailMessage: "",
    passwordMessage: "",
    confirmPasswordMessage: "",
  });

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const registerUser = (event) => {
    event.preventDefault();

    const tempTexts = {
      tempname: "",
      tempemail: "",
      temppassword: "",
      tempconfirmPassword: "",
    };

    setNameError(false);
    setEmailError(false);
    setPasswordError(false);
    setConfirmPasswordError(false);

    setHelperTexts({
      nameMessage: "",
      emailMessage: "",
      passwordMessage: "",
      confirmPasswordMessage: "",
    });

    const { name, email, password, confirmPassword } = user;
    let fail = 0;
    //name validation
    if (!validateName(name)) {
      fail += 1;
      tempTexts.tempname = "Name cannot be empty. \n Please enter your name.";
      setNameError(true);
    }
    //email validation
    if (!validateEmail(email)) {
      fail += 1;
      tempTexts.tempemail =
        "Please enter a valid email. \n Accepted format: example@email.com";
      setEmailError(true);
    }
    //password validation
    if (!validatePassword(password)) {
      fail += 1;
      tempTexts.temppassword =
        "Please make sure your password has \n minimum eight characters, at least one uppercase letter, one lowercase letter and one number.";
      setPasswordError(true);
    }
    //confirm password valiation
    if (!validateConfirmPassword(password, confirmPassword)) {
      fail += 1;
      tempTexts.tempconfirmPassword = "Your passwords do not match";
      setConfirmPasswordError(true);
    }
    setHelperTexts({
      nameMessage: tempTexts.tempname,
      emailMessage: tempTexts.tempemail,
      passwordMessage: tempTexts.temppassword,
      confirmPasswordMessage: tempTexts.tempconfirmPassword,
    });
    console.log(`status: ${fail}`);

    //If all reqirements passes, post request sent
    if (fail === 0) {
      axios.post("http://localhost:9032/register", user).then((res) => {
        //If registration was sucessful, redirect to login page
        //Else alert error message
        if (res.data.message === "User Added") {
          navigate("/login");
        } else {
          alert(res.data.message);
        }
      });
    }
  };

  return (
    <div className="register-container">
      <div className="container">
        <div className="form">
          <div className="logo">
            <img src={logo} alt="something broke"></img>
          </div>
          <div className="pageName">
            <span>Register</span>
          </div>
          <form onSubmit={registerUser} method="post">
            <div className="flex-row">
              <TextField
                name="name"
                value={user.name}
                label="Full Name"
                variant="outlined"
                helperText={helperTexts.nameMessage}
                error={nameError}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex-row">
              <TextField
                name="email"
                value={user.email}
                type="email"
                label="Email"
                variant="outlined"
                helperText={helperTexts.emailMessage}
                error={emailError}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex-row">
              <TextField
                name="password"
                value={user.password}
                type="password"
                label="Password"
                variant="outlined"
                helperText={helperTexts.passwordMessage}
                error={passwordError}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex-row">
              <TextField
                name="confirmPassword"
                value={user.confirmPassword}
                type="password"
                label="Confirm Password"
                variant="outlined"
                helperText={helperTexts.confirmPasswordMessage}
                error={confirmPasswordError}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex-row">
              <input className="card-submit" type="submit" value="Register" />
            </div>
          </form>
          <div className="login">
            <span className="wrongAuth" onClick={() => navigate("/login")}>
              Already registered? Login Here.
            </span>
          </div>
          <div className="card-image-shadow"></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
