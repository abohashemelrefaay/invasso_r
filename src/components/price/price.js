import React from "react";
import "./styleprice.css";
const Price = () => {
  return (
    <div className="pric">
      <div className="container">
        <div className="pricetext">
          <h1>Our pricing plans</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
            inventore sunt amet
          </p>
        </div>
        <div className="priceparts">
          <div className="part1">
            <div className="textprice">
              <h2>$100</h2>
              <h4>STARTER PACKAGE</h4>
            </div>
            <div className="elements">
              <span>
                <i className="fa fa-check-circle" />
                Blog System
              </span>
              <span>
                <i className="fa fa-check-circle" /> Support System
              </span>
              <span>
                <i className="fa fa-check-circle" />
                POS System
              </span>
              <span>
                <i className="fa fa-check-circle" />
                Marketing System
              </span>
              <span>
                <i className="fa fa-check-circle" />
                Multiple Payment Options
              </span>
              <span>
                <i className="fa fa-check-circle" /> Reports
              </span>
            </div>
            <button>GET STARTED</button>
          </div>
        </div>
        <div className="priceparts">
          <div className="part1">
            <div className="textprice">
              <h2>$120</h2>
              <h4>BUSINESS PACKAGE</h4>
            </div>
            <div className="elements">
              <span>
                <i className="fa fa-check-circle" />
                Blog System
              </span>
              <span>
                <i className="fa fa-check-circle" /> Support System
              </span>
              <span>
                <i className="fa fa-check-circle" />
                POS System
              </span>
              <span>
                <i className="fa fa-check-circle" />
                Marketing System
              </span>
              <span>
                <i className="fa fa-check-circle" />
                Multiple Payment Options
              </span>
              <span>
                <i className="fa fa-check-circle" /> Reports
              </span>
            </div>
            <button>GET STARTED</button>
          </div>
        </div>
        <div className="priceparts">
          <div className="part1">
            <div className="textprice">
              <h2>$150</h2>
              <h4>PLATINUM PACKAGE</h4>
            </div>
            <div className="elements">
              <span>
                <i className="fa fa-check-circle" />
                Blog System
              </span>
              <span>
                <i className="fa fa-check-circle" /> Support System
              </span>
              <span>
                <i className="fa fa-check-circle" />
                POS System
              </span>
              <span>
                <i className="fa fa-check-circle" />
                Marketing System
              </span>
              <span>
                <i className="fa fa-check-circle" />
                Multiple Payment Options
              </span>
              <span>
                <i className="fa fa-check-circle" /> Reports
              </span>
            </div>
            <button>GET STARTED</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
