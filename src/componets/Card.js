import React from "react";
import logo from "../assets/images/whim.png";
import landingPhoto from "../assets/images/homebanner.jpg";
import "../assets/styles/scss/style.scss";

function Card() {
  return (
    <div className="my-4 mx-3">
      <div className="card" style={{ width: "24rem", height: "40rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            style={{ color: "white" }}
          >
            New
          </span>
        </div>

        <img className="card-img-top" src={landingPhoto} alt="Card cap" />
        <div className="card-body" style={{ textAlign: "left" }}>
          <h5 className="card-title">Learn Guitar - Noob to pro in 4 weeks</h5>
          <h6 className="card-subtitle mb-2 text-muted">By -Abcdef</h6>
          <p className="card-text">
            Learn how to play the guitar in no time, with fun and easy courses,
            tutorials, and songs.
          </p>
          <h5 className="card-title">CA$ 49.99</h5>

          <div className="rating">
            {" "}
            <input type="radio" name="rating" value="5" id="5" />
            <label for="5">☆</label>
            <input type="radio" name="rating" value="4" id="4" />
            <label for="4">☆</label>
            <input type="radio" name="rating" value="3" id="3" />
            <label for="3">☆</label>
            <input type="radio" name="rating" value="2" id="2" />
            <label for="2">☆</label>
            <input type="radio" name="rating" value="1" id="1" />
            <label for="1">☆</label>
          </div>
          <a href="/" className="btn btn-dark">
            Take Course
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
