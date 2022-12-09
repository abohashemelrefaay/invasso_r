import React, { useState } from "react";
import axios from "axios";
import "./styletestimonial.css";
import {
  Testimonaial,
  Layoutspan,
  Span,
  Moveright,
  Moveleft,
} from "./styletestimonials.js";
const Testimonial = () => {
  const [testimonials, settestmonials] = useState([]);
  const [classactive, setclassactive] = useState("p1");
    axios.get("jsonData/data.json").then((res) => {
      settestmonials(res.data.testmonials);
    });

  return (
    <div className="testimonials">
      <div className="container">
        <div className="cover">
          <div className="text">
            <h2>clintes</h2>
            <h2>Testimonials</h2>
          </div>
          <Moveright
            onClick={() => {
              setclassactive(
                classactive === "p1"
                  ? "p2"
                  : classactive === "p2"
                  ? "p3"
                  : classactive === "p3"
                  ? "p4"
                  : classactive === "p4"
                  ? "p5"
                  : classactive === "p5"
                  ? "p5"
                  : "p5"
              );
            }}
            moveright={classactive}
          />
          <Moveleft
            onClick={() => {
              setclassactive(
                classactive === "p1"
                  ? "p1"
                  : classactive === "p2"
                  ? "p1"
                  : classactive === "p3"
                  ? "p2"
                  : classactive === "p4"
                  ? "p3"
                  : classactive === "p5"
                  ? "p4"
                  : "p5"
              );
            }}
            moveleft={classactive}
          />
          <Testimonaial active={classactive} className="testimonaial">
            {testimonials.map((testmonaial , i) => {
              return (
                <div key={i} className="test" >
                  <img src={testmonaial.image} alt="" />
                  <h4>{testmonaial.name}</h4>
                  <h6>{testmonaial.work}</h6>
                  <p>{testmonaial.description}</p>
                </div>
              );
            })}
          </Testimonaial>
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
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
