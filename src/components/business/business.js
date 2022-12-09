import React from "react";
import "./stylebusiness.css";
const Business = () => {
  return (
    <div className="business">
      <div className="container">
        <div className="businesscover">
          <div className="image">
            <img src="images/business.png" alt="" />
          </div>
          <div className="covertext">
            <div className="text">
              <h2>Get Your Business App</h2>
              <p>
                As soon as you get one of Orderitto's plus plans you will get
                your mobile app for your business. Control everything from a
                single dashboard with centralized inventory, order management,
                pricing, and more.
              </p>
            </div>
            <div className="secton1">
              <img src="images/section1.PNG" alt="" />
              <img src="images/section1-2.PNG" alt="" />
            </div>
            <div className="section2">
              <div>
                <i className="fa fa-download" />
                <h3>52554</h3>
                <h4>DOWNLOAD</h4>
              </div>
              <div>
                <i className="fa fa-users" />
                <h3>4054</h3>
                <h4>Happy Client</h4>
              </div>
              <div>
                <i className="fa fa-star" />
                <h3>52554</h3>
                <h4>Reviews</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
