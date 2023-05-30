import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from "reactstrap";

export default function Examples() {

  return (
    <div className="section section-examples" data-background-color="black">
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <div className="space-50" />
      <Container className="text-center">
        <Row>
          <Col sm="6">
            <h1 style={{ marginTop: "20px" }}>Rocketseat</h1>
            <a href="/platform-page">
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/rocketimage1.png")}
              />
            </a>
            <Button
              className="btn-simple btn-round"
              color="primary"
              href="/platform-page"
            >
              Veja a Plataforma
            </Button>
          </Col>
          <Col sm="6">
            <h1 style={{ marginTop: "20px" }}>DIO</h1>
            <a href="/platform-page2">
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/dioimage1.png")}
              />
            </a>
            <Button
              className="btn-simple btn-round"
              color="primary"
              href="/platform-page2"
            >
              Veja a Plataforma
            </Button>
          </Col>
          <Col sm="6">
            <h1 style={{ marginTop: "20px" }}>FreeCodeCamp</h1>
            <a href="/platform-page3">
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/freeimage1.png")}
              />
            </a>
            <Button
              className="btn-simple btn-round"
              color="primary"
              href="/platform-page3"
            >
              Veja a Plataforma
            </Button>
          </Col>
          <Col sm="6">
            <h1 style={{ marginTop: "20px" }}>Coursera</h1>
            <a href="/platform-page4">
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/courseraimage1.png")}
              />
            </a>
            <Button
              className="btn-simple btn-round"
              color="primary"
              href="/platform-page4"

            >
              Veja a Plataforma
            </Button>
          </Col>
          {/* Rest of the code */}
        </Row>
      </Container>
    </div>
  );
}
