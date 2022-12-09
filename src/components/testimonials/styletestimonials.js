import styled from "styled-components";

export const Testimonaial = styled.div`
  flex: 1;
  display: flex;
  margin-left: 10%;
  margin-left: ${(props) => (props.active === "p1" ? "10%" : "")};
  margin-left: ${(props) => (props.active === "p2" ? "-32%" : "")};
  margin-left: ${(props) => (props.active === "p3" ? "-80%" : "")};
  margin-left: ${(props) => (props.active === "p4" ? "-119%" : "")};
  margin-left: ${(props) => (props.active === "p5" ? "-140%" : "")};
  margin-top: 1%;
  display: flex;
  z-index: 2;
  transition: 2s;
`;
export const Layoutspan = styled.div`
  width: 200px;
  height: 50px;
  position: absolute;
  top: 90%;
  left: 65%;
  z-index: 3;
`;
export const Span = styled.span`
  width: 30px;
  height: 5px;
  margin-left: 4px;
  border-radius: 15px;
  background-color: #3b3b3b6b;
  display: inline-block;
  cursor: pointer;
  &:nth-child(1) {
    width: ${(props) => (props.active === "p1" ? "50px" : "")};
    background-color: ${(props) => (props.active === "p1" ? "#3b3b3b" : "")};
  }
  &:nth-child(2) {
    width: ${(props) => (props.active === "p2" ? "50px" : "")};
    background-color: ${(props) => (props.active === "p2" ? "#3b3b3b" : "")};
  }
  &:nth-child(3) {
    width: ${(props) => (props.active === "p3" ? "50px" : "")};
    background-color: ${(props) => (props.active === "p3" ? "#3b3b3b" : "")};
  }
  &:nth-child(4) {
    width: ${(props) => (props.active === "p4" ? "50px" : "")};
    background-color: ${(props) => (props.active === "p4" ? "#3b3b3b" : "")};
  }
  &:nth-child(5) {
    width: ${(props) => (props.active === "p5" ? "50px" : "")};
    background-color: ${(props) => (props.active === "p5" ? "#3b3b3b" : "")};
  }
`;
export const Moveright = styled.span`
  width: 10px;
  border: 2px solid;
  border-color: #f9f9f9 aliceblue transparent transparent;
  background: transparent;
  height: 9px;
  transform: rotate(42deg) translate(18px);
  margin-top: 10px;
  cursor: pointer;
  z-index: 100;
  position: absolute;
  top: 72%;
  left: 22%;
`;
export const Moveleft = styled.span`
  width: 10px;
  border: 2px solid;
  border-color: transparent transparent #f9f9f9 aliceblue;
  background: transparent;
  height: 9px;
  transform: rotate(42deg);
  cursor: pointer;
  position: absolute;
  top: 79%;
  left: 22%;
  z-index: 100;
`;
