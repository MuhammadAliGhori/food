import React, { useState } from "react";
import styles from "../styles/main.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button } from "react-bootstrap";

export default function NavbarBox() {
  return (
    <div>
      <div
        className={`${styles.navbarhero} d-flex justify-content-between px-4 py-3 py-xs-2 `}
      >
        <h6 className="text-white mb-0">
          Email us at mealplans@prepkitchen.co.uk
        </h6>
        <h6 className="text-white mb-0">Call us on 0203 916 0120</h6>
      </div>
      <div className="position-relative">
        <img
          width="230"
          height="40"
          src="https://prepkitchen.co.uk/img/2022/logo-yellow.png"
          alt=""
          className={styles.imgbox}
        />
      </div>
      <div
        className={`px-4 py-3 py-sm-2 bg-white d-flex justify-content-end ${styles.navhero}`}
      >
        <Navbar bg="white" expand="lg" className={styles.navbox}>

            <Container fluid className="d-flex justify-content-end">
              {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
              <Navbar.Toggle aria-controls="basic-navbar-nav" />

              <Navbar.Collapse id="basic-navbar-nav" className={styles.colapsehero}>
                <Nav
                  className={`me-auto w-100 justify-content-between align-items-center gap-4 ${styles.navbarbox}`}
                >
                  <a
                    className="text-dark fw-600 f-16 mb-0 text-decoration-none"
                    href="#home"
                  >
                    Our Menu
                  </a>
                  <a
                    className="text-dark fw-600 f-16 mb-0 text-decoration-none"
                    href="#link"
                  >
                    Ambassadors
                  </a>
                  <a
                    className="text-dark fw-600 f-16 mb-0 text-decoration-none"
                    href="#link"
                  >
                    FAQ
                  </a>

                  <a
                    className="text-dark fw-600 f-16 mb-0 text-decoration-none"
                    href="#link"
                  >
                    My Account
                  </a>
                  <Button
                    className={`${styles.ordernavbarbtn} text-white fw-700 border-0`}
                  >
                    Order Now{" "}
                  </Button>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
      </div>
    </div>
  );
}
