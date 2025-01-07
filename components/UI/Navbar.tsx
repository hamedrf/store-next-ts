"use client";
import { Navbar, Nav, Container } from "react-bootstrap";
import MainBtn, { colorBtn } from "./MainBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";

import { faHome, faShop } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const MyNavbar = () => {
  const handelToggle = () => {
    const navIcon = document.getElementById("nav-icon");
    if (navIcon) {
      navIcon.classList.toggle("open");
    }
  };
  return (
    <div className=" d-flex justify-content-center align-items-center row m-0 ">
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
            <Navbar.Brand className="fs-3 fw-bold ">
              <Link href={"./"}>
                نهال
                <span style={{ color: "var(--color-main)" }}> ای تی </span>
              </Link>
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
                <Link
                  href="./shop"
                  data-rr-ui-event-key="#shop"
                  className="nav-link"
                >
                  <span className="me-1">فروشگاه</span>
                  <FontAwesomeIcon icon={faShop} />
                </Link>
                <Link
                  href="./"
                  data-rr-ui-event-key="#home"
                  className="nav-link"
                >
                  <span className="me-1">خانه</span>
                  <FontAwesomeIcon icon={faHome} />
                </Link>
              </Nav>
              <div className="d-flex justify-content-center align-items-center">
                <Link href={"http://localhost:3000/login"}>
                  <MainBtn text="ورود ادمین" color={colorBtn.main} />
                </Link>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default MyNavbar;
