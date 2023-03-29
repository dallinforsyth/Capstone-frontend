import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export function Header() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <header>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            style={{ maxHeight: 300, maxWidth: 1200 }}
            className="d-block w-100"
            src="https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ maxHeight: 300, maxWidth: 1200 }}
            className="d-block w-100"
            src="https://images.contentstack.io/v3/assets/blt6f84e20c72a89efa/bltc546c14512bb3c1d/62e1a9b498daae0f8f437f68/revplus-overview-og.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ maxHeight: 300, maxWidth: 1200 }}
            className="d-block w-100"
            src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/petting_pet_cat-1296x728-header.jpg?w=1155&h=1528"
            alt="Third slide"
          />

          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <nav>
        <>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">Home</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/new">New pet</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/logout">Logout</Nav.Link>
                <Nav.Link href="/signup">Signup</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <br />
        </>
        {/* <a href="/">Home</a> | <a href="/logout">logout</a> | <a href="/signup">Signup</a> | |{" "}
        <a href="/login">login</a> */}
      </nav>
    </header>
  );
}
