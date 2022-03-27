import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer-wrapper">
        <div class="footer">
          <section>
            <h3>Quick Links</h3>
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Blog</a>
            <a href="#">Contact Us</a>
          </section>

          <section>
            <h3>Contact Us</h3>
            <a href="emailto:support@websitename.com">
              <span>
                <i class="fa fa-envelope"></i>
              </span>
              <span>support@websitename.com</span>
            </a>
            <a href="tel:xxxxxxxxx">
              <span>
                <i class="fa fa-phone"></i>
              </span>
              <span>(+x)-xxx-xxxx-xxxxx</span>
            </a>
          </section>
          <section>
            <h3>Social Media</h3>
            <div className="socialMedia">
              <a href="https://www.youtube.com">
                <span>
                  <i class="fa fa-youtube"></i>
                </span>
              </a>
              <a href="https://www.linkedin.com">
                <span>
                  <i class="fa fa-linkedin"></i>
                </span>
              </a>
              <a href="https://www.instagram.com">
                <span>
                  <i class="fa fa-instagram"></i>
                </span>
              </a>
            </div>
          </section>
          <section>
            <h3>Other</h3>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Cookie Policy</a>
          </section>
        </div>
      </footer>
      <div class="sub-footer">
        Copyright ©2022 All rights reserved | Code Cartel
      </div>
    </>
  );
};
export default Footer;
