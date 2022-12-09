import styled from "styled-components";

export const Container1 = styled.div`
  display: flex;
  height: 80vh;

  & > div {
    display: none;
  }
`;

export const Containener55 = styled.div`
  &:nth-child(1) {
    display: ${(props) => (props.classactive === "p1" ? "block" : "none")};
  }
  &:nth-child(2) {
    display: ${(props) => (props.classactive === "p2" ? "block" : "none")};
  }
  &:nth-child(3) {
    display: ${(props) => (props.classactive === "p3" ? "block" : "none")};
  }
  &:nth-child(4) {
    display: ${(props) => (props.classactive === "p4" ? "block" : "none")};
  }
  &:nth-child(5) {
    display: ${(props) => (props.classactive === "p5" ? "block" : "none")};
  }
`;
export const Layoutspan = styled.div`
  width: 200px;
  height: 50px;
  position: absolute;
  top: 90%;
  left: 40%;
`;
export const Span = styled.span`
  width: 30px;
  height: 5px;
  margin-left: 4px;
  border-radius: 15px;
  background-color: #0000008f;
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
