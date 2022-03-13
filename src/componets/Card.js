import React from "react";
import logo from "../assets/images/whim.png";

function Card() {
  return (
    <div className="my-3 mx-3">
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={logo} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">Learn Guitar - Noob to pro in 4 weeks</h5>
          <p className="card-text">By -Abcdef</p>
          <a href="/" className="btn btn-sm btn-primary">
            Take Course
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
