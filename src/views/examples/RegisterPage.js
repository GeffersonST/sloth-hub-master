/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

import Footer from "components/Footer/Footer.js";
import IndexNavbar from "components/Navbars/IndexNavbar";

export default function RegisterPage() {
  const [squares1to6, setSquares1to6] = React.useState("");
  const [squares7and8, setSquares7and8] = React.useState("");

  React.useEffect(() => {
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", followCursor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("register-page");
      document.documentElement.removeEventListener("mousemove", followCursor);
    };
  }, []);
  const followCursor = (event) => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    setSquares1to6(
      "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)"
    );
    setSquares7and8(
      "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"
    );
  };
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <div className="page-header">
          <div className="page-header-image" />
          <div className="content">
            <img
              alt="..."
              className="img-fluid  shadow-lg"
              src={require("assets/img/fotopreferidaGefferson.jpg")}
              style={{ width: "200px" }}
            />
            <Container>
              <div className="content-center">
                <Row className="row-grid justify-content-between align-items-center text-left">
                  <Col lg="6" md="6">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    <div className="typography-line">
                      <blockquote>
                        <p className="blockquote blockquote">
                          "No SlothCode, acreditamos que o conhecimento é um
                          direito universal. Estamos empenhados em quebrar
                          barreiras e tornar o acesso ao aprendizado uma
                          realidade para todos, abrindo portas para o
                          crescimento pessoal e coletivo." <br />
                          <br />
                          <small>- Gefferson Severo da Trindade Ramos</small>
                        </p>
                      </blockquote>
                    </div>
                    <div className="btn-wrapper mb-3">

                    </div>
                    <div className="btn-wrapper">
                      <div className="button-container">
                        <Button
                          className="btn-icon btn-simple btn-round btn-neutral"
                          color="default"
                          href="https://github.com/GeffersonST"
                        target="_blank"
                        >
                          <i className="fab fa-github" />
                        </Button>
                        <Button
                          className="btn-icon btn-simple btn-round btn-neutral"
                          color="default"
                          href="https://www.instagram.com/geffersonsevero/"
                        target="_blank"
                        >
                          <i className="fab fa-instagram" />
                        </Button>
                        <Button
                          className="btn-icon btn-simple btn-round btn-neutral"
                          color="default"
                          href="https://www.linkedin.com/in/gefferson-severo-da-trindade-ramos-510010115/"
                        target="_blank"
                        >
                          <i className="fab fa-linkedin" />
                        </Button>
                        <Button
                          className="btn-icon btn-simple btn-round btn-neutral"
                          color="default"
                          href="https://www.artstation.com/geffst"
                        target="_blank"
                        >
                          <i className="tim-icons icon-palette" />
                        </Button>
                      </div>
                    </div>
                  </Col>
                  <Col lg="4" md="5">
                    <img
                      alt="..."
                      className="img-fluid"
                      src={require("assets/img/slothlogodefinitive.png")}
                    />
                  </Col>
                </Row>
              </div>
              <div className="register-bg" />
              <div
                className="square square-9"
                id="square1"
                style={{ transform: squares1to6 }}
              />

              <div
                className="square square-2"
                id="square2"
                style={{ transform: squares1to6 }}
              />

              <div
                className="square square-3"
                id="square3"
                style={{ transform: squares1to6 }}
              />

              <div
                className="square square-4"
                id="square4"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-5"
                id="square5"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-6"
                id="square6"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-7"
                id="square6"
                style={{ transform: squares7and8 }}
              />
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
