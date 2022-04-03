import React from "react";

function Payment() {
  return (
    <div className="payment-container">
      <div className="container">
        <div className="form">
          <form onSubmit="/" method="post">
            <div class=" p-0">
              <div class="card px-4">
                <p class="h8 py-3">Whimscription</p>
                <div class="row gx-3">
                  <div class="col-12">
                    <div class="d-flex flex-column">
                      <p class="text mb-1">Person Name</p>{" "}
                      <input
                        class="form-control mb-3"
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="d-flex flex-column">
                      <p class="text mb-1">Card Number</p>{" "}
                      <input
                        class="form-control mb-3"
                        type="text"
                        placeholder="1234 5678 435678"
                      />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="d-flex flex-column">
                      <p class="text mb-1">Expiry</p>{" "}
                      <input
                        class="form-control mb-3"
                        type="text"
                        placeholder="MM/YYYY"
                      />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="d-flex flex-column">
                      <p class="text mb-1">CVV/CVC</p>{" "}
                      <input
                        class="form-control mb-3 pt-2 "
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
