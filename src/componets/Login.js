import React, { useState } from "react";
import "../assets/styles/scss/style.scss";
import logo from "../assets/images/whim.png";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useNavigate } from "react-router-dom";

/**@module Component_LoginUser */

/**
 * @function login
 * @description This method will login a user.
 * @param {String} email Registered email address of the user.
 * @param {String} password Password.
 */

const Login = () => {
  //Route constant for navigation
  const navigate = useNavigate();
  //State for user details
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const loginUser = (event) => {
    event.preventDefault();
    axios.post("http://localhost:9032/login", user).then((res) => {
      //If details match, redirect to home page and create a token
      //Else alert error message
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("name", res.data.name);
        navigate("/");
      } else {
        alert(res.data.message);
      }
    });
  };

  return (
    <div className="login-container">
      <div className="container">
        <div className="form">
          <div className="logo">
            <img src={logo} alt="something broke"></img>
          </div>
          <div className="pageName">
            <span>Login</span>
          </div>
          <form onSubmit={loginUser} method="post">
            <div className="flex-row">
              <TextField
                name="email"
                value={user.name}
                onChange={handleInputChange}
                className="card-name"
                label="Email"
                variant="outlined"
                type="text"
              />
            </div>
            <div className="flex-row">
              <TextField
                name="password"
                className="card-name"
                type="password"
                label="Password"
                variant="outlined"
                value={user.value}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex-row">
              <input className="card-submit" type="submit" value="Log in" />
            </div>
          </form>
          <div className="register">
            <span
              className="wrongAuth"
              onClick={() => navigate("/forgot_password")}
            >
              Forgot Password?
            </span>
            <span className="wrongAuth" onClick={() => navigate("/register")}>
              Not a member? Register Here.
            </span>
          </div>
          <div className="card-image-shadow"></div>
        </div>
      </div>
    </div>
  );
};
export default Login;
