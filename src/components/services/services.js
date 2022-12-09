import React from "react";
import "./services.css";
const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <h1>service we provide</h1>

        <div className="services_cover">
          <div className="cover">
            <div className="image">
              <img className="im1" src="images/service1.PNG" alt="" />
            </div>
            <div className="text">
              <h2>How it Works</h2>
              <p>
                Orderitto helps you create digital solutions for your business
                in the easiest way possible. With a couple of clicks from your
                mouse, you will be able to get a website and mobile application
                along with a 24/7 technical support for free.
              </p>
              <button className="start">START NOW</button>
            </div>
          </div>
          <div className="cover">
            <div className="text">
              <h2>How it Works</h2>
              <p>
                Orderitto helps you create digital solutions for your business
                in the easiest way possible. With a couple of clicks from your
                mouse, you will be able to get a website and mobile application
                along with a 24/7 technical support for free.
              </p>
              <button className="start">START NOW</button>
            </div>
            <div className="image">
              <img className="im2" src="images/service2.PNG" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
