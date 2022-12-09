import React from 'react';
import "./stylefooter.css"

const Foter = () => {
  return (
   <div className="footer">
    <div className="container">
      <div className="footercover">
        <div className="footerlogo"><h1>Orderitto</h1></div>
        <div className="footercontent">
          <div>
            <h4>Products</h4>
            <span>Sand Stone</span>
            <span>Stone</span>
            <span>Cement</span>
            <span>Soft Stone</span>
          </div>
          <div>
          <h4>Service</h4>
            <span>Measurement Service</span>
            <span>Product Advice</span>
            <span>Interior Design</span>
          </div>
          <div>
          <h4>Contact Information</h4>
            <span>3181 Al Imam Saud Ibn Abdul Aziz Branch Rd,</span>
            <span>An Nuzhah, Riyadh 12474,</span>
            <span>Saudi Arabia</span>
          </div>
          <div>
          <h4>Social Media</h4>
            <div className='Social'>
              <i className='fa fa-facebook'/>
              <i className='fa fa-twitter'/>
              <i className='fa fa-youtube-play'/>
            
            </div>
          </div>
        </div>
        <div className="footerend">Copyright © 2022 | Mustafa Abohashem.</div>
      </div>
    </div>
   </div>
  );
}

export default Foter;
