import React from "react";
import logo from "../assets/images/whim.png";
import "../assets/styles/scss/_top_nav.scss";

function TopNav() {
  return (
    <div className="topnav" id="myTopNav">
      <a className="active" href="/">
        <img src={logo} width="50" height="30" alt="" />
      </a>
      <a href="/">Category</a>
      <a href="/">Post Hobby</a>
      <input type="text" placeholder="Search.." />

      <div className="SignIn">
        <a href="/">Login</a>
        <a href="/">Register</a>
      </div>
      <a href="javascript:void(0);" className="icon" onClick="myFunction()">
        <i class="fa fa-bars"></i>
      </a>
    </div>
  );
}

export default TopNav;
