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
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel,
} from "reactstrap";

// core components

import Footer from "components/Footer/Footer.js";
import IndexNavbar from "components/Navbars/IndexNavbar";

const carouselItems = [
  {
    src: require("assets/img/rocketimage3.png"),
    altText: "Slide 1",
    caption: "Diogo Fernandes",
  },
  {
    src: require("assets/img/rocketimage6.jpg"),
    altText: "Slide 2",
    caption: "Mayk Brito e Rodrigo Gonçalvez",
  },
  {
    src: require("assets/img/rocketimage7.png"),
    altText: "Slide 3",
    caption: "While 2020",
  },
];

let ps = null;

export default function PlatformPage() {
  const [tabs, setTabs] = React.useState(1);
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("profile-page");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="dots"
            src={require("assets/img/dots.png")}
          />
          <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png")}
          />
          <Container className="align-items-center">
            <Row>
              <Col lg="6" md="6">
                <h1 className="profile-title text-left">Rocketseat</h1>
                <h5 className="text-on-back">01</h5>
                <p className="profile-description">
                  Rocketseat é uma renomada plataforma de ensino de programação
                  que tem como missão principal transformar a forma como as
                  pessoas aprendem e constroem suas carreiras na área de
                  tecnologia. Com uma abordagem prática e dinâmica, a Rocketseat
                  oferece uma ampla variedade de cursos, workshops e trilhas de
                  aprendizado que abrangem desde conceitos básicos até
                  tecnologias avançadas.
                </p>
                <div className="btn-wrapper profile pt-3">
                  <Button
                    className="btn-icon btn-round"
                    color="twitter"
                    href="https://github.com/Rocketseat"
                    id="tooltip639225725"
                    target="_blank"
                  >
                    <i className="fab fa-github" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip639225725">
                    Follow us
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon btn-round"
                    color="facebook"
                    href="https://www.facebook.com/rocketseat/?locale=pt_BR"
                    id="tooltip982846143"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-square" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip982846143">
                    Like us
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon btn-round"
                    color="dribbble"
                    href="https://www.instagram.com/rocketseat/"
                    id="tooltip951161185"
                    target="_blank"
                  >
                    <i className="fab fa-instagram" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip951161185">
                    Follow us
                  </UncontrolledTooltip>
                </div>
              </Col>
              <Col className="ml-auto mr-auto" lg="4" md="6">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid rounded-circle"
                      src={require("assets/img/rocketseatlogo.png")}
                    />
                    <h4 className="title">Dados </h4>
                  </CardHeader>
                  <CardBody>
                    <Nav
                      className="nav-tabs-primary justify-content-center"
                      tabs
                    >
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 1,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(1);
                          }}
                          href="#sloth"
                        >
                          Youtube
                        </NavLink>
                      </NavItem>
                    </Nav>
                    <TabContent
                      className="tab-subcategories"
                      activeTab={"tab" + tabs}
                    >
                      <TabPane tabId="tab1">
                        <Table className="tablesorter" responsive>
                          <thead className="text-primary">
                            <tr>
                              <th className="header">Subscritores</th>
                              <th className="header">Vídeos</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>328k+</td>
                              <td>703+</td>
                            </tr>
                            <tr></tr>
                            <tr></tr>
                          </tbody>
                        </Table>
                      </TabPane>
                      <TabPane tabId="tab2">
                        <Row>
                          <Label sm="3">Pay to</Label>
                          <Col sm="9">
                            <FormGroup>
                              <Input
                                placeholder="e.g. 1Nasd92348hU984353hfid"
                                type="text"
                              />
                              <FormText color="default" tag="span">
                                Please enter a valid address.
                              </FormText>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Label sm="3">Amount</Label>
                          <Col sm="9">
                            <FormGroup>
                              <Input placeholder="1.587" type="text" />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Button
                          className="btn-simple btn-icon btn-round float-right"
                          color="primary"
                          type="submit"
                        >
                          <i className="tim-icons icon-send" />
                        </Button>
                      </TabPane>
                      <TabPane tabId="tab3">
                        <Table className="tablesorter" responsive>
                          <thead className="text-primary">
                            <tr>
                              <th className="header">Latest Crypto News</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>The Daily: Nexo to Pay on Stable...</td>
                            </tr>
                            <tr>
                              <td>Venezuela Begins Public of Nation...</td>
                            </tr>
                            <tr>
                              <td>PR: BitCanna – Dutch Blockchain...</td>
                            </tr>
                          </tbody>
                        </Table>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section">
          <Container>
            <Row className="justify-content-between">
              <Col md="6">
                <Row className="justify-content-between align-items-center">
                  <UncontrolledCarousel items={carouselItems} />
                </Row>
              </Col>
              <Col md="5">
                <h1 className="profile-title text-left">Projetos</h1>
                <h5 className="text-on-back">02</h5>
                <p className="profile-description text-left">
                  Os cursos da Rocketseat são atualizados constantemente para
                  refletir as tendências e demandas do mercado de tecnologia,
                  garantindo que os alunos estejam sempre atualizados com as
                  habilidades mais relevantes. Além disso, a plataforma oferece
                  suporte individualizado aos alunos, auxiliando-os em seu
                  processo de aprendizagem e fornecendo mentoria especializada.
                  Com a Rocketseat, os alunos têm a oportunidade de desenvolver
                  habilidades sólidas em programação, conquistar certificações
                  reconhecidas e impulsionar suas carreiras na área de
                  tecnologia. Seja você um iniciante ou um profissional em busca
                  de aprimoramento, a Rocketseat oferece um ambiente completo e
                  estimulante para o aprendizado e crescimento profissional.
                </p>
                <div className="btn-wrapper pt-3">
                  <Button
                    className="btn-simple"
                    color="primary"
                    href="https://www.youtube.com/@rocketseat"
                    target="_blank"
                  >
                    <i className="tim-icons icon-triangle-right-17" /> Youtube
                  </Button>
                  <Button
                    className="btn-simple"
                    color="info"
                    href="https://www.rocketseat.com.br"
                    target="_blank"
                  >
                    <i className="tim-icons icon-spaceship" /> Site
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <section className="section">
          <Container>
            <Row>
              <Col md="6">
                <Card className="card-plain">
                  <CardHeader>
                    <h1 className="profile-title text-left">Conteúdo</h1>
                    <h5 className="text-on-back">03</h5>
                  </CardHeader>

                  <CardBody>
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe
                        className="embed-responsive-item"
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/Znz2QXpJTXQ"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </CardBody>
                  <CardBody>
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/rHX4bJsNB7U"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </CardBody>
                  <CardBody>
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/UF7RXzD4hvs"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col className="ml-auto" md="4">
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-paper" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Automatizando tarefas com IA</h4>
                    <p>
                      Inteligência Artificial <br />
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-money-coins" />
                  </div>

                  <div className="description">
                    <h4 className="info-title">Gratuito</h4>
                    <p>
                      <br />
                      <br />
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-paper" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">React Native</h4>
                    <p>
                      Desenvolvimento Mobile <br />
                      <br />
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-money-coins" />
                  </div>

                  <div className="description">
                    <h4 className="info-title">Gratuito</h4>
                    <p>
<br />
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-paper" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Soft Skills</h4>
                    <p>
                      Desenvolvimento pessoal e profissional para iniciantes <br />
                      <br />
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-money-coins" />
                  </div>

                  <div className="description">
                    <h4 className="info-title">Gratuito</h4>
                    <p>
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  );
}
