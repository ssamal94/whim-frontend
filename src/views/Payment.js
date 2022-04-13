import React from "react";
import { useNavigate } from "react-router-dom";
import useModal from "../hooks/useModal";
import axios from "axios";

function Payment() {
  const { setAlertDescription, setAlertStatus } = useModal();
  const navigate = useNavigate();
  const processPayment = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:9032/subscribe", {
        email: localStorage.getItem("email"),
      })
      .then((res) => {
        //If details match, redirect to home page and create a token
        //Else alert error message
        console.log(res.data);
        if (res.data.status === "ok") {
          localStorage.setItem("isSubscribed", res.data.isSubscribed);
          navigate("/ConfirmSubscription");
        } else {
          setAlertDescription(res.data.message);
          setAlertStatus(true);
        }
      });
  };
  return (
    <div className="payment-container">
      <div className="container">
        <div className="form">
          <form onSubmit={processPayment}>
            <div className=" p-0">
              <div className="card px-4">
                <p className="h8 py-3">Payment details</p>
                <div className="row gx-3">
                  <div className="col-12">
                    <div className="d-flex flex-column">
                      <p className="text mb-1">Full Name As On Card</p>
                      <input
                        className="form-control mb-3"
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex flex-column">
                      <p className="text mb-1">Card Number</p>
                      <input
                        className="form-control mb-3"
                        type="text"
                        placeholder="1234-5678-435678"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex flex-column">
                      <p className="text mb-1">Expiry</p>
                      <input
                        className="form-control mb-3"
                        type="text"
                        placeholder="MM/YYYY"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex flex-column">
                      <p className="text mb-1" style={{ marginLeft: "1rem" }}>
                        CVV/CVC
                      </p>
                      <input
                        className="form-control mb-3 pt-2 "
                        type="password"
                        placeholder="***"
                      />
                    </div>
                  </div>
                  <div className="flex-row">
                    <input
                      className="card-submit"
                      type="submit"
                      value="Pay Now"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>

          <div className="card-image-shadow"></div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
