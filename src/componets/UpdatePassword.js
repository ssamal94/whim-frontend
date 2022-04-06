import React, { useState } from "react";
import "../assets/styles/scss/style.scss";
import logo from "../assets/images/whim.png";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useModal from "../hooks/useModal";
import Dialog from "./Dialogue";

/**@module Component_ForgotPassword */

/**
 * @function ForgotPassword
 * @description This method will login a user.
 * @param {String} email Registered email address of the user.
 */

const UpdatePassword = () => {
  //Route constant for navigation
  const navigate = useNavigate();
  //State for password details
  const [password, setPassword] = useState({
    password: "",
    confirmPassword: "",
  });
  //Destructure modal methods for dialog box
  const { alertStatus, alertDescription, setAlertDescription, setAlertStatus } =
    useModal();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPassword({
      ...password,
      [name]: value,
    });
  };

  const updatePassword = (event) => {
    event.preventDefault();
    if (password.password !== password.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const currentPath = window.location.pathname.split("/");
    const email = currentPath[2];
    const resetToken = currentPath[3];
    axios
      .post(
        `http://localhost:9032/reset_password/${email}/${resetToken}`,
        password
      )
      .then((res) => {
        if (res.data.status === "ok") {
          setAlertDescription(res.data.message);
          setAlertStatus(true);
          navigate("/login");
        } else {
          setAlertDescription(res.data.message);
          setAlertStatus(true);
        }
      });
  };

  return (
    <>
      {alertStatus ? (
        <Dialog
          message={alertDescription}
          toggleDialog={(status) => setAlertStatus(status)}
        />
      ) : null}

      <div className="forgotPwd-container">
        <div className="container">
          <div className="form">
            <div className="logo">
              <img src={logo} alt="something broke"></img>
            </div>
            <div className="pageName">
              <span>Enter new password</span>
            </div>
            <form onSubmit={updatePassword} method="post">
              <div className="flex-row">
                <TextField
                  name="password"
                  value={password.password}
                  onChange={handleInputChange}
                  className="card-name"
                  label="Password"
                  variant="outlined"
                  type="text"
                  required
                />
              </div>
              <div className="flex-row">
                <TextField
                  name="confirmPassword"
                  value={password.confirmPassword}
                  onChange={handleInputChange}
                  className="card-name"
                  label="Confirm Password"
                  variant="outlined"
                  type="text"
                  required
                />
              </div>
              <div className="flex-row">
                <input className="card-submit" type="submit" value="Reset" />
              </div>
            </form>
            <div className="loginInstead">
              <span className="wrongAuth" onClick={() => navigate("/login")}>
                Login instead?
              </span>
            </div>
            <div className="card-image-shadow"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdatePassword;
