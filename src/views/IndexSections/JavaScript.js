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
import classnames from "classnames";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  Button,
  FormGroup,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledPopover,
  PopoverBody,
  PopoverHeader,
  Modal,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  UncontrolledCarousel,
} from "reactstrap";

const carouselItems = [

  {
    src: require("assets/img/react2.png"),
    altText: "Slide 2",
    caption: "",
  },
  {
    src: require("assets/img/python2.png"),
    altText: "Slide 3",
    caption: "",
  },
  {
    src: require("assets/img/javascript2.png"),
    altText: "Slide 4",
    caption: "",
  },
  {
    src: require("assets/img/csharp1.png"),
    altText: "Slide 4",
    caption: "",
  },
  {
    src: require("assets/img/flutter1.png"),
    altText: "Slide 4",
    caption: "",
  },
];

export default function JavaScript() {
  const [demoModal, setDemoModal] = React.useState(false);
  const [miniModal, setMiniModal] = React.useState(false);
  const [formModal, setFormModal] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  return (
    <div className="section section-javascript" id="javascriptComponents">
      <img alt="..." className="path" src={require("assets/img/path5.png")} />
      <img
        alt="..."
        className="path path1"
        src={require("assets/img/path5.png")}
      />

      <div className="section">
        <Container>
          <div className="title">

          </div>
          <Row className="justify-content-between align-items-center">
            <Col className="mb-5 mb-lg-0" lg="5">
              <h1 className="text-white font-weight-light">
                Conhecimento
              </h1>
              <p className="text-white mt-4">
                No Sloth•Code, valorizamos o acesso igualitário à educação e nos
                esforçamos para promover uma cultura de compartilhamento e
                crescimento. Junte-se a nós nessa jornada de aprendizado
                contínuo e empoderamento tecnológico. Juntos, vamos explorar o
                universo do conhecimento e construir um futuro melhor.
              </p>

            </Col>
            <Col lg="4">
            <UncontrolledCarousel
  items={carouselItems.map((item) => ({
    ...item,
    className: 'd-block w-100', // Adicione as classes 'd-block' e 'w-100' para definir a largura e altura das imagens
  }))}
  indicators={false}
  autoPlay={false}
/>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
