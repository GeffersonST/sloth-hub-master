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
import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import imagem1 from "../../assets/img/logorocket.png";
import imagem2 from "../../assets/img/freelogo2.png";
import imagem3 from "../../assets/img/diologo.png";
import imagem4 from "../../assets/img/courseralogo.png";

export default function NucleoIcons() {
  const history = useHistory();

  const handleSurpriseMe = () => {
    const routes = [
      "platform-page",
      "platform-page2",
      "platform-page3",
      "platform-page4",
    ];
    const randomIndex = Math.floor(Math.random() * routes.length);
    const selectedRoute = routes[randomIndex];
    history.push(selectedRoute);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [history.location.pathname]);
  return (
    <div className="section section-nucleo-icons">
      <img alt="..." className="path" src={require("assets/img/path3.png")} />
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" md="12">
            <h1 className="title">Plataformas</h1>
            <h4 className="description">
              Dentro do Sloth•Code, você encontrará uma ampla gama de plataformas
              líderes e reconhecidas, cada uma oferecendo conteúdo valioso e
              recursos interativos para apoiar seu aprendizado. Desde cursos
              introdutórios em linguagens de programação populares, como Python,
              JavaScript e C++, até tutoriais avançados em áreas especializadas,
              como inteligência artificial, desenvolvimento web e segurança
              cibernética.
            </h4>
            <div className="btn-wrapper">
            <Button color="primary" onClick={handleSurpriseMe}>
                Surpreenda-me
              </Button>

            </div>
          </Col>
        </Row>
        <div className="blur-hover">

            <div
              className="blur-item on-screen mt-5"
              style={{ display: "flex", justifyContent: 'center' }}
            >
              {/* Center */}
              <img
                src={imagem1}
                alt="Descrição da imagem 1"
                style={{ marginRight: "35px" }}
              />

              <img
                src={imagem2}
                alt="Descrição da imagem 1"
                style={{ marginRight: "35px" }}
              />

              <img
                src={imagem3}
                alt="Descrição da imagem 1"
                style={{ marginRight: "35px" }}
              />
              <img
                src={imagem4}
                alt="Descrição da imagem 1"
                style={{ marginRight: "35px" }}
              />
            </div>
            <span className="blur-hidden h4 text-primary">
              Explore diversas plataformas de aprendizado!
            </span>

        </div>
      </Container>
    </div>
  );
}
