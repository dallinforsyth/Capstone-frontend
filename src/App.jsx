import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col></Col>

          <BrowserRouter>
            <Col xl={9}>
              <Header />
              <Content />
              <Footer />
            </Col>
            <Col></Col>
          </BrowserRouter>
        </Row>
      </Container>
    </div>
  );
}

export default App;
