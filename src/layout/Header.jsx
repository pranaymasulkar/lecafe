import React, {useEffect, useState} from "react";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import Logo from "../assets/img/logo.png";
import { HiHome } from "react-icons/hi";
import { ImInfo } from "react-icons/im";

const Header = () => {
  const [scroll, setScroll] = useState(false);
 useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 50);
   });
 }, []);

  return (
    <header>
      <Navbar expand="lg"  fixed="top" className={scroll ? "header-bg py-0" : "bg-transparent py-0"}>
        <Container className="header-conatiner py-3">
          <Navbar.Brand href="#home">
            <Image src={Logo} className="img-fluid" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#"><HiHome size={15}/></Nav.Link>
              <Nav.Link href="#"><ImInfo size={30} className="me-2"/>logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
