import styled from "styled-components";
export const Mangosection = styled.div`
  background: #262626;
`;
export const Mangocover = styled.div`
  display: flex;
  height: 65vh;
  margin-top: -2px;
`;
export const H5 = styled.h2`
  position: absolute;
  left: 42%;
  color: white;
`;
export const Partimages = styled.div`
  display: block ruby;
  width: 40%;
`;
export const Img = styled.img`
  display: block;
  width: 100%;
  height: 90%;
`;

export const Sectionpart = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  text-align: center;
  align-content: center;
  width: 70%;
`;
export const Section1 = styled.div`
  margin-top: 30px;
  position: absolute;
`;
export const Imgsection1 = styled.img`
  display: block;
  width: 153px;
  margin: 78px 0 -15px 69px;
  transition: 2s;
  width: ${(props) => (props.active === "p1" ? "" : "100px")};
  margin: ${(props) => (props.active === "p1" ? "" : "120px 0 -5px 99px")};
`;
export const H1 = styled.h3`
  margin-left: 55px;
  color: white;
  margin-bottom: -14px;
  transition: 2s;
  font-size: ${(props) => (props.active === "p1" ? "" : "8px")};
`;
export const Pr = styled.p`
  float: none;
  margin-left: 69px;
  width: 173px;
  font-size: 18px;
  color: aliceblue;
  transition: 2s;
  font-size: ${(props) => (props.active === "p1" ? "" : "9px")};
  margin-top: ${(props) => (props.active === "p1" ? "" : "15px")};
`;

export const Section2 = styled.div`
  width: 200px;
  left: 58%;
  position: absolute;
`;
export const Emtys2 = styled.div`
  width: 140px;
  height: 74px;
  background: #3e3d3d;
  border-radius: 30px;
  margin-bottom: -170px;
  margin: 177px 0 -157px 0;
  transition: 2s;
  width: ${(props) => (props.active === "p2" ? "200px" : "")};
  height: ${(props) => (props.active === "p2" ? "185px" : "")};
  margin: ${(props) => (props.active === "p2" ? "119px 0 -191px 0" : "")};
`;
export const Imgsection2 = styled.img`
  display: block;
  width: 130px;
  margin: 25px 0 0 8px;
  transition: 2s;
  width: ${(props) => (props.active === "p2" ? "200px" : "")};
  margin: ${(props) => (props.active === "p2" ? "0px" : "")};
`;
export const H2 = styled.h3`
  margin-left: -96px;
  color: white;
  margin-bottom: -14px;
  font-size: 12px;
  margin: 4px 0 0 -70px;
  transition: 2s;
  font-size: ${(props) => (props.active === "p2" ? "12px" : "")};
  margin: ${(props) => (props.active === "p2" ? "0px" : "")};
`;
export const Section3 = styled.div`
  width: 100px;
  margin-top: 65px;
  position: absolute;
  left: 74%;
  transition: 2s;
  left: ${(props) => (props.active === "p3" ? "76%" : "")};
`;
export const Emtys3 = styled.div`
  width: 106px;
  height: 56px;
  margin: 122px 0 -78px 0;
  background: #3e3d3d;
  border-radius: 30px;
  transition: 2s;
  width: ${(props) => (props.active === "p3" ? "200px" : "")};
  height: ${(props) => (props.active === "p3" ? "185px" : "")};
  margin: ${(props) => (props.active === "p3" ? "52px 0 -191px -50px" : "")};
`;
export const Imgsection3 = styled.img`
  display: block;
  width: 80px;
  margin: -31px 0 -41px 15px;
  transition: 2s;
  width: ${(props) => (props.active === "p3" ? "200px" : "")};
  margin: ${(props) => (props.active === "p3" ? "-11px 0 0px -50px" : "")};
`;
export const H3 = styled.h3`
  margin-left: -96px;
  color: white;
  margin-bottom: -14px;
  margin: 37px 0 251px 0;
  font-size: 8px;
  transition: 1s;
  width: ${(props) => (props.active === "p3" ? "150px" : "")};
  font-size: ${(props) => (props.active === "p3" ? "12px" : "")};
  margin: ${(props) => (props.active === "p3" ? "-1px 0 98px -30px" : "")};
`;
export const Section4 = styled.div`
  width: 50px;
  margin-top: 75px;
  position: absolute;
  left: 87%;
  left: ${(props) => (props.active === "p4" ? "85%" : "")};
`;

export const Emtys4 = styled.div`
  width: 70px;
  height: 36px;
  margin: 121px 0 -52px 35px;
  background: #3e3d3d;
  border-radius: 30px;
  transition: 2s;
  width: ${(props) => (props.active === "p4" ? "200px" : "")};
  height: ${(props) => (props.active === "p4" ? "185px" : "")};
  margin: ${(props) => (props.active === "p4" ? "45px 0 -52px -12px" : "")};
`;
export const Imgsection4 = styled.img`
  display: block;
  width: 43px;
  margin: -22px 0 -97px 50px;
  transition: 2s;
  width: ${(props) => (props.active === "p4" ? "175px" : "")};
  margin: ${(props) => (props.active === "p4" ? "-189px 0 0 0" : "")};
`;
export const H4 = styled.h3`
  margin-left: -96px;
  color: white;
  margin-bottom: -14px;
  font-size: 6px;
  margin: 98px -85px 98px 0;
  transition: 2s;
  font-size: ${(props) => (props.active === "p4" ? "12px" : "")};
  margin: ${(props) => (props.active === "p4" ? " 0 -135px 251px 0" : "")};
`;
export const Layoutspan = styled.div`
  width: 200px;
  height: 50px;
  position: absolute;
  top: 205%;
  left: 60%;
`;
export const Span = styled.span`
  width: 30px;
  height: 5px;
  margin-left: 4px;
  border-radius: 15px;
  background-color: #868686;
  display: inline-block;
  cursor: pointer;
  &:nth-child(1) {
    width: ${(props) => (props.active === "p1" ? "50px" : "")};
    background-color: ${(props) => (props.active === "p1" ? "#fff" : "")};
  }
  &:nth-child(2) {
    width: ${(props) => (props.active === "p2" ? "50px" : "")};
    background-color: ${(props) => (props.active === "p2" ? "#fff" : "")};
  }
  &:nth-child(3) {
    width: ${(props) => (props.active === "p3" ? "50px" : "")};
    background-color: ${(props) => (props.active === "p3" ? "#fff" : "")};
  }
  &:nth-child(4) {
    width: ${(props) => (props.active === "p4" ? "50px" : "")};
    background-color: ${(props) => (props.active === "p4" ? "#fff" : "")};
  }
`;
