import React from "react";
import "../assets/styles/scss/style.scss";
import puneetImage from "../assets/images/puneet.png";
import shubhamImage from "../assets/images/shubham.png";
import swagatImage from "../assets/images/swagat.jpeg";
import TopNav from "../componets/TopNav";
import Footer from "../componets/Footer";

const AboutUs = () => {
  return (
    <div className="aboutUsWrapper">
      <TopNav />
      <div className="container">
        <div className="header">
          <h1>We are a team of expert developers</h1>
        </div>
        <div className="card-container">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={puneetImage}
                  alt="Avatar"
                  style={{ width: "300px", height: "400px" }}
                />
              </div>
              <div className="flip-card-back">
                <h2 className="Name">Puneet Chopra</h2>
                <h5 className="role">Full Stack Software Developer</h5>
                <div className="description">
                  <p style={{ color: "azure" }}>
                    Skills : JAVA, C#, HTML, CSS, JavaScript, React.js
                  </p>

                  <p style={{ color: "azure" }}>
                    LinkedIn :
                    <a
                      href="https://www.linkedin.com/in/puneet-chopra-2409/"
                      style={{ color: "rgb(43, 10, 210)" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Puneet Chopra
                    </a>
                  </p>
                </div>
                <div className="quote">
                  <p style={{ color: "azure" }}>
                    "Life isn't about finding yourself. Life is about creating
                    yourself."
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={swagatImage}
                  alt="Avatar"
                  style={{ width: "300px", height: "400px" }}
                />
              </div>
              <div className="flip-card-back">
                <h2 className="Name">Swagat Samal</h2>
                <h5 className="role">Full Stack Software Developer</h5>
                <div className="description">
                  <p style={{ color: "azure" }}>
                    Skills : JavaScript, React.js, Vue.js, Node.js, HTML, CSS,
                    SCSS, JAVA, C#
                  </p>

                  <p style={{ color: "azure" }}>
                    LinkedIn :
                    <a
                      href="https://www.linkedin.com/in/ssamal94/"
                      style={{ color: "rgb(43, 10, 210)" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Swagat Samal
                    </a>
                  </p>
                </div>
                <div className="quote">
                  <p style={{ color: "azure" }}>"Passion led us here."</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={shubhamImage}
                  alt="Avatar"
                  style={{ width: "300px", height: "400px" }}
                />
              </div>
              <div className="flip-card-back">
                <h2 className="Name">Shubham Singh</h2>
                <h5 className="role">Full Stack Software Developer</h5>
                <div className="description">
                  <p style={{ color: "azure" }}>
                    Skills : JAVA, C#, HTML, CSS, JavaScript, React.js
                  </p>

                  <p style={{ color: "azure" }}>
                    LinkedIn :
                    <a
                      href="https://www.linkedin.com/in/shubhamsingh-s/"
                      style={{ color: "rgb(43, 10, 210)" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Shubham Singh
                    </a>
                  </p>
                </div>
                <div className="quote">
                  <p style={{ color: "azure" }}>
                    "Measuring programming progress by lines of code is like
                    measuring aircraft building progress by weight."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
