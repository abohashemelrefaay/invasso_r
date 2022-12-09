import React, { useState } from "react";
import {
  Navbarsection,
  Linkscover,
  Icon,
  Logo,
  Logolink,
  Ul,
  Link,
  Login,
  Loginbutton,
  Form,
  Input,
  Buttonlogin,
} from "./stylenave.js";
const Navbar = () => {
  const [active, setactive] = useState("");

  return (
    <div className="container">
      <Navbarsection>
        <Linkscover>
          <Logo>
            <Logolink href="/">Orderitto</Logolink>
          </Logo>
          <Icon active={active} onClick={() => setactive("span")}></Icon>
          <Icon active={active} onClick={() => setactive("span")}></Icon>

          <Ul  active={active}>
            <li className="list-item">
              <Link href="/About">About Us</Link>
            </li>
            <li className="list-item">
              <Link href="/Services">Services</Link>
            </li>
            <li className="list-item">
              <Link href="/Pricing">Pricing</Link>
            </li>
            <li className="list-item">
              <Link href="/FAQ">FAQ</Link>
            </li>
            <li className="list-item">
              <Link href="/Contact">Contact Us</Link>
            </li>
          </Ul>
        </Linkscover>
        <Login active={active}>
          <Loginbutton onClick={() => setactive("active")}>Log In</Loginbutton>
          <Loginbutton>Register</Loginbutton>
        </Login>
        <Form active={active}>
          <Input type="text" placeholder="User Name" />
          <Input type="text" placeholder="password" />
          <Buttonlogin>login</Buttonlogin>
          <Loginbutton active={active}>Register</Loginbutton>
        </Form>
      </Navbarsection>
    </div>
  );
};

export default Navbar;
