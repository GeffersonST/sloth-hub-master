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
// reactstrap components
import {
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

export default function Tabs() {
  const [iconTabs, setIconsTabs] = React.useState(1);
  const [textTabs, setTextTabs] = React.useState(4);
  return (
    <div className="section section-tabs">
      <Container>
        <div className="title">
          <h3 className="mb-3">O que você encontrará no Sloth•Code?</h3>
        </div>
        <Row>
          <Col className="ml-auto mr-auto" md="10" xl="6">
            <div className="mb-3">
              <small className="text-uppercase font-weight-bold"></small>
            </div>
            <Card>
              <CardHeader>
                <Nav className="nav-tabs-info" role="tablist" tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: iconTabs === 1,
                      })}
                      onClick={(e) => setIconsTabs(1)}
                      href="#sloth"
                    >
                      <i className="tim-icons icon-spaceship" />
                      Perfis
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: iconTabs === 2,
                      })}
                      onClick={(e) => setIconsTabs(2)}
                      href="#sloth"
                    >
                      <i className="tim-icons icon-settings-gear-63" />
                      Plataformas
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: iconTabs === 3,
                      })}
                      onClick={(e) => setIconsTabs(3)}
                      href="#sloth"
                    >
                      <i className="tim-icons icon-bag-16" />
                      Gratuito
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>
              <CardBody>
                <TabContent className="tab-space" activeTab={"link" + iconTabs}>
                  <TabPane tabId="link1">
                    <p>
                      Explore a categoria de Perfis de Professores e
                      Influenciadores na Programação do nosso aplicativo Sloth•Code e mergulhe em um mundo de conhecimento e inspiração.
                      Aqui você encontrará uma seleção exclusiva de
                      profissionais e influenciadores renomados no campo da
                      programação, prontos para compartilhar seus conhecimentos,
                      dicas e experiências com você.
                    </p>
                  </TabPane>
                  <TabPane tabId="link2">
                    <p>
                      Aqui, você terá acesso a uma variedade de plataformas de
                      ensino renomadas, projetadas para ajudar você a dominar
                      diversas linguagens de programação, conceitos avançados e
                      tecnologias emergentes.
                    </p>
                  </TabPane>
                  <TabPane tabId="link3">
                    <p>
                      O Sloth•Code acredita firmemente no poder do acesso gratuito
                      ao ensino de programação e tecnologia. Nosso objetivo é
                      proporcionar uma plataforma aberta e inclusiva, onde
                      qualquer pessoa interessada em aprender possa fazê-lo,
                      independentemente de sua origem ou recursos financeiros.
                    </p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
