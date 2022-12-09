import React,{useState} from 'react';
import axios from 'axios';
import "./stylefeatures.css"

const Features = () => {
 const [features ,setfeatures]=useState([])

  axios.get("jsonData/data.json").then((res) => {
    setfeatures(res.data.features);  
  });


  return (
    <div className='features'>
   <div className="container">
    <div className="cover">
    <h1>Features You Will Get</h1>
      {features.map((feature , i)=>{
     return(
<div key={i} className="feature"  >
        <i  className={feature.icon}></i>
        <h2>{feature.title}</h2>
        <p>{feature.subject}</p>
        <button>{feature.button}</button>
      </div>
     )
      })}
      
      
    </div>
    <button className='view'>view all features</button>
    </div>      
    </div>
  );
}

export default Features;
