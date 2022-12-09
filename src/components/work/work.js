import React from "react";
import "./work.css"
const Work = () => {
  return (
    <div className="work">
      <div className="container">
        <div className="work_cover">
        <div className="work_text">
          <h2>How it Works?</h2>
          <p>
            Orderitto helps you create digital solutions for your business in
            the easiest way possible. With a couple of clicks from your mouse,
            you will be able to get a website and mobile application along with
            a 24/7 technical support for free. You don't need a coding
            background or even design skills to create your solutions.
          </p>
          <button>START NOW</button>
        </div>
        <div className="work_image" >
          
          <img src="images/phone7.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
