import React from "react";
import landingPhoto from "../assets/images/Guitar.webp";
import "../assets/styles/css/Home.css";

function Home() {
  return (
    <div className="Home">
      <img src={landingPhoto} alt="" height={400} width={1400} />
    </div>
  );
}

export default Home;
