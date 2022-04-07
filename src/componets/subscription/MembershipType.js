import React from "react";
import "../assets/styles/scss/style.scss";

function MembershipType() {
  return (
    <div className="membership-container">
      <div className="container">
        <div className="form">
          <div className="heading">
            <h4 className="title">Please select your membership type</h4>
          </div>
          <form onSubmit="/" method="post">
            <div className="radio-group">
              <div className="membership-type">
                <div className="float-child1">
                  <label className="label ">
                    Without Ad Sense ($14.99/m + taxes)
                  </label>
                  <p className="para">
                    Enjoy a month of ad free learning with the industry best
                    professionals for a price as less as a pizza!
                  </p>
                </div>
                <div className="float-child2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                </div>
              </div>
              <div className="membership-type">
                <div className="float-child1">
                  <label className="label">
                    With Ad Sense ($3.99/m + taxes)
                  </label>
                  <p className="para">
                    Pay as less as a coffee for an entire month of content
                  </p>
                  <p className="para">
                    You get limited and streamlined ads while learning .These
                    ads allows us to support our wonderful content creators and
                    developers who work their best to bring you the best content
                    in market.
                  </p>
                </div>
                <div className="float-child2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                </div>
              </div>
            </div>
            <div className="flex-row">
              <input
                className="card-submit"
                type="submit"
                value="Proceed to payment"
              />
            </div>
          </form>

          <div className="card-image-shadow"></div>
        </div>
      </div>
    </div>
  );
}

export default MembershipType;
