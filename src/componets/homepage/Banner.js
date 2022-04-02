import React from "react";
import landingPhoto from "../../assets/images/homebanner.jpg";
import "../../assets/styles/scss/style.scss";

function Banner() {
  return (
    <div className="bannerImageWrapper">
      <img src={landingPhoto} alt="error fetching error!" />
    </div>
  );
}

export default Banner;
