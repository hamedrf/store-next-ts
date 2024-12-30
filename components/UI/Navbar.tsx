"use client";
import { Navbar, Nav, Container } from "react-bootstrap";
import MainBtn, { colorBtn } from "./MainBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  faCode,
  faHome,
  faPhone,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import Underline from "../effect/Underline";

const MyNavbar = () => {
  const handelToggle = () => {
    const navIcon = document.getElementById("nav-icon");
    if (navIcon) {
      navIcon.classList.toggle("open");
    }
  };
  return (
    <div className=" d-flex justify-content-center align-items-center row m-0">
      <div
        dir="ltr"
        className="d-flex z-3 justify-content-center align-items-center p-1 p-md-3 position-absolute top-0"
      >
        <Navbar
          bg="dark"
          variant="dark"
          expand="lg"
          className="rounded-5 p-2 col-12 col-lg-auto"
        >
          <Container fluid="lg" className="flex-row flex-lg-row-reverse">
            <Navbar.Brand href="#home" className="fs-3 fw-bold ">
              <Underline text="حامد" delay={3} />{" "}
              <span style={{ color: "var(--color-one)" }}>رجبی فرجاد</span>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={handelToggle}
            >
              <div id="nav-icon">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Navbar.Toggle>
            <Navbar.Collapse
              id="basic-navbar-nav "
              className="flex-row flex-lg-row-reverse"
            >
              <Nav className="mx-4 my-lg-0 my-4 justify-content-center align-items-center flex-column-reverse flex-lg-row">
                <Nav.Link href="#footer">
                  {" "}
                  <span className="me-1">تماس</span>
                  <FontAwesomeIcon icon={faPhone} />
                </Nav.Link>
                <Nav.Link href="#samples">
                  {" "}
                  <span className="me-1">نمونه کار</span>
                  <FontAwesomeIcon icon={faCode} />
                </Nav.Link>
                <Nav.Link href="#about">
                  {" "}
                  <span className="me-1">درباره</span>
                  <FontAwesomeIcon icon={faQuestion} />
                </Nav.Link>
                <Nav.Link href="#home">
                  <span className="me-1">خانه</span>
                  <FontAwesomeIcon icon={faHome} />
                </Nav.Link>
              </Nav>
              <div className="d-flex justify-content-center align-items-center">
                <a href="tel:+989012226411">
                  <MainBtn text="ارتباط با ما" color={colorBtn.main} />
                </a>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default MyNavbar;
