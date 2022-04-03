import React from "react";

function ConfirmSubscription() {
  return (
    <div className="confirmSubscription-container">
      <div className="container">
        <div className="form">
          <div className="heading">
            <h4 className="title">Hi Swagat Samal, Welcome to WHIM!</h4>
          </div>
          <div className="para-container">
            <p className="para">You are now subscribed to our platform.</p>
            <p className="para">Please find your subscription details below</p>
          </div>
          <form onSubmit="/" method="post">
            <div>
              <div className="plan-name">Your plan name: With Ad Sense</div>
              <p className="para2">
                You will be charged $3.99/m + taxes. To stop your subscription
                you may do so from profile page
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
