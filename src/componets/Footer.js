import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="foot">
      <footer className="footer-wrapper">
        <div className="footer">
          <section>
            <h3>Quick Links</h3>
            <a onClick={() => navigate("/")}>Home</a>
            <a onClick={() => navigate("/aboutUs")}>About Us</a>
            <a>Blog</a>
          </section>

          <section>
            <h3>Contact Us</h3>
            <a href="emailto:support@websitename.com">
              <span>
                <i className="fa fa-envelope"></i>
              </span>
              <span>whimsix6@gmail.com</span>
            </a>
            <a href="tel:xxxxxxxxx">
              <span>
                <i className="fa fa-phone"></i>
              </span>
              <span>(+x)-xxx-xxxx-xxxxx</span>
            </a>
          </section>
          <section>
            <h3>Social Media</h3>
            <div className="socialMedia">
              <a href="https://www.youtube.com">
                <span>
                  <i className="fa fa-youtube"></i>
                </span>
              </a>
              <a href="https://www.linkedin.com">
                <span>
                  <i className="fa fa-linkedin"></i>
                </span>
              </a>
              <a href="https://www.instagram.com">
                <span>
                  <i className="fa fa-instagram"></i>
                </span>
              </a>
            </div>
          </section>
          <section>
            <h3>Other</h3>
            <a>Privacy Policy</a>
            <a>Terms & Conditions</a>
            <a>Cookie Policy</a>
          </section>
        </div>
      </footer>
      <div className="sub-footer">
        Copyright ©2022 All rights reserved | Code Cartel
      </div>
    </div>
  );
};
export default Footer;
