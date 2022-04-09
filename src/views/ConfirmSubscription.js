import React from "react";
import { useNavigate } from "react-router-dom";
import successLogo from "../assets/images/Purchase_Success.png";

function ConfirmSubscription() {
  const navigate = useNavigate();
  const confirmSubscription = (event) => {
    event.preventDefault();
    navigate("/");
  };
  return (
    <div className="confirmSubscription-container">
      <div className="container">
        <div className="form">
          <div className="heading">
            <h4 className="title">
              Hi {localStorage.getItem("name")}, welcome to WHIM!
            </h4>
          </div>
          <div className="logo">
            <img src={successLogo} alt="something broke"></img>
          </div>
          <div className="para-container">
            <div className="para">You are now subscribed to our platform.</div>
            <div className="para">
              Please find your subscription details below
            </div>
          </div>
          <form onSubmit={confirmSubscription}>
            <div>
              <div className="plan-name">
                Your plan name: <span>{localStorage.getItem("planName")}</span>
              </div>
              <p className="para2">
                {localStorage.getItem("planDetails")} + taxes on every last day
                of the month. You can stop your subscription any time from your
                MyAccount page.
              </p>
            </div>
            <div className="flex-row">
              <input
                className="card-submit"
                type="submit"
                value="Back to Home Page"
              />
            </div>
          </form>

          <div className="card-image-shadow"></div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmSubscription;
