import React, { useState } from "react";
import {
  Mangosection,
  Mangocover,
  H5,
  Partimages,
  Img,
  Imgsection1,
  H1,
  Imgsection2,
  H2,
  Imgsection3,
  H3,
  Imgsection4,
  H4,
  Sectionpart,
  Section1,
  Pr,
  Section2,
  Emtys2,
  Section3,
  Emtys3,
  Section4,
  Emtys4,
  Layoutspan,
  Span,
} from "./stylemanage.js";
const Manage = () => {
  const [classactive, setclassactive] = useState("");
  return (
    <Mangosection>
      <div className="container">
        <Mangocover>
          <H5>Manage your Platform</H5>
          <Partimages>
            <Img src="images/animation1.gif" alt="" />
          </Partimages>

          <Sectionpart>
            <Section1>
              <Imgsection1
                active={classactive}
                src="images/manage1.png"
                alt=""
              />
              <H1 active={classactive}>Manage Your Platform</H1>
              <Pr active={classactive}>
                Start making money using Orderitto for
                <br />
                <span>FREE</span>
              </Pr>
            </Section1>
            <Section2 active={classactive}>
              <Emtys2 active={classactive} />
              <Imgsection2
                active={classactive}
                src="images/manage2.png"
                alt=""
              />
              <H2 active={classactive}>Manage Accounts</H2>
            </Section2>

            <Section3 active={classactive}>
              <Emtys3 active={classactive} />
              <Imgsection3
                active={classactive}
                src="images/manage3.png"
                alt=""
              />
              <H3 active={classactive}>Manage Your Shop</H3>
            </Section3>

            <Section4 active={classactive}>
              <Emtys4 active={classactive} />
              <Imgsection4
                active={classactive}
                src="images/manage4.png"
                alt=""
              />
              <H4 active={classactive}>Manage Accounts</H4>
            </Section4>
          </Sectionpart>
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
          </Layoutspan>
        </Mangocover>
      </div>
    </Mangosection>
  );
};

export default Manage;
