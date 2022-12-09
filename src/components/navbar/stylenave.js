import styled from "styled-components";
export const Navbarsection = styled.div`
  display: flex;
  padding: 10px 0;
  overflow: hidden;
  background: transparent;
  position: relative;
`;
export const Linkscover = styled.div`
  width: 75%;
`;
export const Icon = styled.span`    
     @media (max-width: 992px) {
  
      position: relative;
      left: 31px;
      top: 9%;
      display: grid;
      ::after {
        content: "";
        border: 8px solid;
        width: 0px;
        display: none;
        border-color: transparent transparent #3b3b3b transparent;
        display:none;
        display:${(props) => (props.active === "span" ? "block" : "")}
      }
    
    }
    &:nth-child(2){
      @media (max-width: 992px) {
        ::before {
          content: "";
          border: 8px solid;
          width: 0px;
          display: inherit;
          border-color: transparent transparent transparent #3b3b3b;
          cursor:pointer;
          display:${(props) => (props.active === "span" ? "none" : "")}
        }
    }
`;

export const Logo = styled.h2`
  float: left;
  color: #3b3b3b;
  position: relative;
  margin-top: 3px;
  width: 150px;
  font-size: 35px;
  ::before {
    content: "integrated e-commerce solutions";
    color: #3b3b3b;
    font-size: 18%;
    position: absolute;
    top: 37px;
    left: 50px;
    width: 122px;
  }
  ::after {
    content: "";
    color: #3b3b3b;
    position: absolute;
    top: 15px;
    left: 2%;
    border: 11px solid;
    border-color: #faebd700 #f0f8ff00 #f0f8ff00 #3b3b3b;
  }
`;
export const Logolink = styled.a`
  text-decoration: none;
  color: #3b3b3b;
`;
export const Ul = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto 50%;
  list-style: none;
  margin-top: 10px;
  margin-left: 2px;
  @media (max-width: 992px) {
    grid-template-columns: none;
    background: black;
    width: 22%;
    position: relative;
    top: 34px;
    left: 30px;
  }
`;

export const Link = styled.a`
  display: block;
  color: #988d8d;
  text-decoration: none;
  padding: 10px 15px;
  font-style: oblique;
  width: 100%;
  :hover {
    color: #302d2d;
  }
`;
export const Login = styled.div`
  width: 25%;
  margin-top: 15px;
  margin-left: -30px;
  display: ${(props) => (props.active === "active" ? "none" : "")};
`;
export const Loginbutton = styled.button`
  width: 45%;
  padding: 3px;
  margin-left: 2px;
  color: aliceblue;
  background: #3b3b3b;
  border-radius: 5px;
  font-weight: bolder;
  font-family: revert;
  border: none;
  cursor: pointer;
  width: ${(props) => (props.active === "active" ? "15%" : "")};
  background: ${(props) => (props.active === "active" ? "#510606" : "")};
  &:nth-child(1) {
    background-color: transparent;
    color: #3b3b3b;
    transition: 2s;
    :hover {
      background-color: #3b3b3b;
      color: aliceblue;
    }
  }
`;
export const Form = styled.form`
  position: absolute;
  left: 54%;
  top: 16%;
  height: 100px;
  width: 47%;
  display: none;
  display: ${(props) => (props.active === "active" ? "block" : "")};
`;
export const Input = styled.input`
  margin: 3px;
  height: 24px;
  border-radius: 10px;
  background: #0000002e;
  border: 1px;
  z-index: 2;
  &:nth-child(1):focus,
  :nth-child(2):focus {
    outline: none;
  }
`;

export const Buttonlogin = styled.button`
  color: aliceblue;
  background: #3b3b3b;
  border-radius: 5px;
  font-weight: bolder;
  font-family: revert;
  border: none;
  cursor: pointer;
  width: 16%;
  height: 22%;
`;
