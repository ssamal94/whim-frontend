import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/scss/style.scss";
import superman from "../assets/images/superman.png";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="notFoundWrapper">
      <div className="title">404!</div>
      <div className="supper-man">
        <img src={superman} alt="superman" />
      </div>
      <p>The Page You're Looking For Was Not Found.</p>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
}

export default PageNotFound;
