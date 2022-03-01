import React from "react";
import logo from "../assets/images/whim.png";
import validation from "../scripts/formValidation";

function Register() {
  return (
    <div className="register-container">
      <div className="container">
        <div className="form">
          <div className="logo">
            <img src={logo} alt="something broke"></img>
          </div>
          <form onSubmit={validation}>
            <div className="flex-row">
              <label htmlFor="name">Full Name</label>
              <input
                name="name"
                className="card-name"
                type="text"
                placeholder="Full Name"
                max="50"
                required
              />
            </div>
            <div className="flex-row">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                className="card-name"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="flex-row">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                className="card-name"
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="flex-row">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                name="confirm-password"
                className="card-name"
                type="password"
                placeholder="Repeat Password"
                required
              />
            </div>
            <div className="flex-row">
              <input className="card-submit" type="submit" value="Register" />
            </div>
          </form>
          <div className="login">
            <span>
              Already registered? <a href="#">Login Here</a>
            </span>
          </div>
          <div className="card-image-shadow"></div>
        </div>
      </div>
    </div>
  );
}

export default Register;
