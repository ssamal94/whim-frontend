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

const ForgotPassword = () => {
  //Route constant for navigation
  const navigate = useNavigate();
  //State for user details
  const [user, setUser] = useState({
    email: "",
  });
  //Destructure modal methods for dialog box
  const { alertStatus, alertDescription, setAlertDescription, setAlertStatus } =
    useModal();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const updatePassword = (event) => {
    event.preventDefault();
    axios.post("http://localhost:9032/forgot_password", user).then((res) => {
      //If details match, redirect to home page and create a token
      //Else alert error message
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
              <span>Reset password</span>
            </div>
            <form onSubmit={updatePassword} method="post">
              <div className="flex-row">
                <TextField
                  name="email"
                  value={user.email}
                  onChange={handleInputChange}
                  className="card-name"
                  label="Email"
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

export default ForgotPassword;
