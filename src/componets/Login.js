import React from "react";
import "../assets/styles/scss/style.scss";
import logo from "../assets/images/whim.png";

function Login() {
  return (
    <div className="login-container">
      <div className="container">
        <div className="form">
          <div className="logo">
            <img src={logo} alt="something broke"></img>
          </div>
          <form action="#">
            <div className="flex-row">
              <label htmlFor="email"></label>
              <input
                name="email"
                className="card-name"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="flex-row">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                className="card-name"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="flex-row">
              <input className="card-submit" type="submit" value="Log in" />
            </div>
          </form>
          <div className="card-image-shadow"></div>
        </div>
        <div className="register">
          <p>Not a member?</p>
          <a href="#">Register Here</a>
        </div>
      </div>
    </div>
  );
}
export default Login;
