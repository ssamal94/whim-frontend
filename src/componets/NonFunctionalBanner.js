import react from "react";

function NonFunctionalBanner() {
  return (
    <div className="container-Non-Functional">
      <div className="sub-container">
        <div className="wrapper">
          <div className="wrapper1">
            <div className="icon-container">
              <div className="icon-wrapper">
                <svg className="image"></svg>
              </div>
            </div>
            <div className="text-container">
              <div className="text-wrapper">
                Learn new hobbies with over 1,000 video courses
              </div>
            </div>
          </div>
          <div className="wrapper1">
            <div className="icon-container">
              <div className="icon-wrapper">
                <svg className="image"></svg>
              </div>
            </div>
            <div className="text-container">
              <div className="text-wrapper">
                Choose hobbies taught by real-world experts
              </div>
            </div>
          </div>
          <div className="wrapper1">
            <div className="icon-container">
              <div className="icon-wrapper">
                <svg className="image"></svg>
              </div>
            </div>
            <div className="text-container">
              <div className="text-wrapper">
                Learn at your own pace, with lifetime access on mobile and
                desktop
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NonFunctionalBanner;
