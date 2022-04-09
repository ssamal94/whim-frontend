import { useNavigate } from "react-router-dom";
import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

function Subscription() {
  //Route constant
  const navigate = useNavigate();
  //Method
  const updateSubscriptionType = (event) => {
    event.preventDefault();
    navigate("/payment");
  };
  //Method
  const selectSubscription = async (event) => {
    if (event.target.value === "$3.99") {
      localStorage.setItem("planName", "With add sense.");
      localStorage.setItem("planDetails", "You will be charged $3.99");
    } else {
      localStorage.setItem("planName", "Without add sense.");
      localStorage.setItem("planDetails", "You will be charged $14.99");
    }
  };

  return (
    <div className="subscriptionWrapper">
      <div className="membership-container">
        <div className="container">
          <div className="form">
            <div className="heading">
              <h4 className="title">Please select your membership type</h4>
            </div>
            <div className="description">
              <form onSubmit={updateSubscriptionType}>
                <RadioGroup
                  aria-labelledby="demo-form-control-label-placement"
                  defaultValue="$3.99"
                  name="controlled-radio-buttons-group"
                  onChange={selectSubscription}
                >
                  <FormControlLabel
                    className="formControlLabel1"
                    value="$3.99"
                    control={<Radio />}
                    label={
                      <>
                        <div className="label">
                          With Ad Sense ($3.99/m + taxes)
                        </div>
                        <div className="para">
                          Pay as less as a cup of coffee for an entire month of
                          content! <br /> You get limited and streamlined ads
                          while learning .These ads allows us to support our
                          wonderful content creators and developers who work
                          their best to bring you the best content in market.
                        </div>
                      </>
                    }
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    className="formControlLabel2"
                    value="$14.99"
                    control={<Radio />}
                    label={
                      <>
                        <div className="label ">
                          Without Ad Sense ($14.99/m + taxes)
                        </div>
                        <div className="para">
                          Enjoy a month of ad free learning with the industry
                          best professionals for a price as less as a medium
                          pizza!
                        </div>
                      </>
                    }
                    labelPlacement="start"
                  />
                </RadioGroup>
                <div className="button">
                  <input
                    className="card-submit"
                    type="submit"
                    value="Proceed to payment"
                  />
                </div>
              </form>
            </div>
            <div className="card-image-shadow"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
