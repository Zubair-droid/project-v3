import React from "react";
import MainBackground from "../../static/img/pages/main-background.svg";
import "../../static/style/pages/home.css";
const Home = () => {
  return (
    <div className="home-sec">
      <div className="container-fluid">
        <div className="background-sec">
          <div className="header">
            <div className="row">
              <div className="col-lg-5">
                <p className="heading ">
                  {" "}
                  Start your hassle free printing today
                </p>
              </div>
              <div className="col-lg-7">
                <img
                  className="main-background"
                  src={MainBackground}
                  alt="main background"
                />
              </div>
              <button className="get-started-btn">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
