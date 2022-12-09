import React from 'react';
import Home from '../home/home';
import Work from '../work/work';
import Mango from '../manageplatform/manage';
import Services from '../services/services';
import Orderito from '../orderiato/orderito';
import Features from '../features/features';
import Lifetime from '../lifetime.js/lifetime';
import Testimonial from '../testimonials/testimonial';
import Price from '../price/price';
import Business from '../business/business';
const Allcomponents = () => {
  return (
    <React.Fragment>
    < Home /> 
    < Work />
    < Mango />
    < Services />
    < Orderito />
    < Features />
    < Lifetime />
    < Testimonial />
    < Price />
    < Business />
    </React.Fragment>
  );
}

export default Allcomponents;
