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
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Modal,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import logo from "../../assets/img/slothlogo1.png"; // Substitua pelo caminho correto para o seu logotipo
export default function IndexNavbar() {
  const [demoModal, setDemoModal] = React.useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  const scrollToDownload = () => {
    document
      .getElementById("download-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" tag={Link} id="navbar-brand">

            <span>Sloth•</span>
            Code
          </NavbarBrand>
          <UncontrolledTooltip placement="bottom" target="navbar-brand">
          Sloth•Code
          </UncontrolledTooltip>
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a href="#logo" onClick={(e) => e.preventDefault()}>
                  Sloth•Code
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>

            <NavItem className="p-0">
            <i className="tim-icons icon-planet" />
              <NavLink
                data-placement="bottom"
                href="/about-page"
                rel="noopener noreferrer"
                target="_blank"
                title="Sobre"
              > Sobre

              </NavLink>

            </NavItem>
            <UncontrolledDropdown nav>
              <DropdownToggle
                caret
                color="default"
                data-toggle="dropdown"
                href="#sloth"
                nav
                onClick={(e) => e.preventDefault()}
              >
                <i className="tim-icons icon-single-02" />
                Perfis
              </DropdownToggle>
              <DropdownMenu className="dropdown-with-icons">
                <DropdownItem href='/profile-page'>
                  <i className="tim-icons icon-single-02" />
                  Gustavo Guanabara
                </DropdownItem>
                <DropdownItem href='/profile-page2'>
                  <i className="tim-icons icon-single-02" />
                  Filipe Deschamps
                </DropdownItem>
                <DropdownItem href='/profile-page3'>
                  <i className="tim-icons icon-single-02" />
                  Loiane Groner
                </DropdownItem>
                <DropdownItem href='/profile-page4'>
                  <i className="tim-icons icon-single-02" />
                  Karol Attekita
                </DropdownItem>
                <DropdownItem href='/profile-page5'>
                  <i className="tim-icons icon-single-02" />
                  Nina da Hora
                </DropdownItem>
                <DropdownItem href='/profile-page6'>
                  <i className="tim-icons icon-single-02" />
                  Fabio Akita
                </DropdownItem>
                <DropdownItem href='/profile-page7'>
                  <i className="tim-icons icon-single-02" />
                  Claudson Oliveira
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav>
              <DropdownToggle
                caret
                color="default"
                data-toggle="dropdown"
                href="#drop"
                nav
                onClick={(e) => e.preventDefault()}
              >
                <i className="tim-icons icon-laptop" />
                Plataformas
              </DropdownToggle>
              <DropdownMenu className="dropdown-with-icons">
                <DropdownItem href='/platform-page'>
                  <i className="tim-icons icon-laptop" />
                  Rocketseat
                </DropdownItem>
                <DropdownItem href='/platform-page2'>
                  <i className="tim-icons icon-laptop" />
                  Digital Innovation one
                </DropdownItem>
                <DropdownItem href='/platform-page3'>
                  <i className="tim-icons icon-laptop" />
                  FreeCodeCamp
                </DropdownItem>
                <DropdownItem href='/platform-page4'>
                  <i className="tim-icons icon-laptop" />
                  Coursera
                </DropdownItem>

              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem>
              <button
                style={{
                  backgroundColor: "#feb81d",
                  borderRadius: "8px",
                  padding: "10px 20px",
                  color: "#1f232a",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
                onClick={() => setDemoModal(true)}
              >
                Compromisso
              </button>

              {/* Sart Demo Modal */}
              <Modal isOpen={demoModal} toggle={() => setDemoModal(false)}>
                <div className="modal-header justify-content-center">
                  <button className="close" onClick={() => setDemoModal(false)}>
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                  <h4 className="title title-up">Compromisso</h4>
                </div>
                <div className="modal-body">
                  <p>
                    No Sloth•Code, valorizamos e respeitamos os direitos autorais e
                    a propriedade intelectual. Nosso objetivo é fornecer uma
                    plataforma que sirva como um repositório de conhecimento e
                    recursos para a comunidade de tecnologia. É importante
                    ressaltar que o Sloth•Code não hospeda nem faz o upload de
                    conteúdo protegido por direitos autorais. Em vez disso,
                    nosso aplicativo direciona os usuários para cursos,
                    plataformas de ensino e outras fontes de informação
                    relevantes. Não armazenamos nem copiamos o conteúdo
                    originalmente criado por terceiros. Além disso, queremos
                    deixar claro que o Sloth•Code nunca será monetizado. Nosso foco
                    principal é fornecer um ambiente educacional e colaborativo
                    gratuito para todos os entusiastas de tecnologia. Estamos
                    comprometidos em manter a integridade e respeitar os
                    direitos autorais, garantindo que o conteúdo seja exibido
                    apenas para fins informativos e de aprendizado.
                  </p>
                </div>
                <div className="modal-footer">

                  <Button
                    color="danger"
                    type="button"
                    onClick={() => setDemoModal(false)}
                  >
                    Fechar
                  </Button>
                </div>
              </Modal>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
