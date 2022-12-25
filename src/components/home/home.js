import React, { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";
import { Containener55, Container1, Layoutspan, Span } from "./stylehome.js";
const Home = () => {
  const [Homesection, setHomesection] = useState([]);
  const [classactive, setclassactive] = useState("p1");

  useEffect(() => {
    axios.get("jsonData/data.json").then((res) => {
      setHomesection(res.data.Homesection);
    });
  }, []);
  return (
    <div className="home">
      <Container1>
        {Homesection.map((homeitem, i) => {
          return (
            <Containener55 key={i} classactive={classactive}>
              <div className="text">
                <h5>{homeitem.generaltitle}</h5>
                <h2>{homeitem.productltitle}</h2>
                <p>{homeitem.description}</p>
                <div className="button">
                  <button className="buttonlearn">
                    LEARN MORE ABOUT ORDERITTO
                  </button>
                  <button className="buttonstart">START NOW</button>
                </div>
              </div>
              <div className="images">
                <img src={homeitem.productimage} alt="" />
              </div>
   <Layoutspan>
                <Span
                  onClick={() => setclassactive("p1")}
                  active={classactive}
                ></Span>
                <Span
                  onClick={() => setclassactive("p2")}
                  active={classactive}
                ></Span>
                <Span
                  onClick={() => setclassactive("p3")}
                  active={classactive}
                ></Span>
                <Span
                  onClick={() => setclassactive("p4")}
                  active={classactive}
                ></Span>
                <Span
                  onClick={() => setclassactive("p5")}
                  active={classactive}
                ></Span>
              </Layoutspan>
            </Containener55>
          );
        })};
       
      </Container1>
    </div>
  );
};

export default Home;
