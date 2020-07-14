import React, { useState } from "react";
import {
  Navbar,
  Container,
  Collapse,
  Row,
  Form,
  Col,
  Button,
  Nav,
  FormControl
} from "react-bootstrap";

function BaseHeader() {
  const [show, setShow] = useState(false);

  return (
    <header>
      <Collapse in={show}>
        <div className="bg-dark">
          <Container>
            <Row>
              <Col sm={8} md={7} className="py-4">
                <h4 className="text-white">About</h4>
                <p className="text-muted">
                  In an effort to lead the domestic mobile game market and affirm the Vietnamese game brand in the international market, our studio brings together an enthusiastic and experienced team in designing and developing games on all mobile platforms.
                  If you need more informations, don't hesitate to contact us.
                  But why not try our games first!!!
                </p>
              </Col>
              <Col sm={4} className="offset-md-1 py-4">
                <h4 className="text-white">Contact</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="https://www.youtube.com/channel/UCsEJ43w1UpnzqYJikru7QZA" className="text-white" target="_bank">
                    Subscribe to Youtube channel
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white" target="_bank">
                      Like on Facebook
                    </a>
                  </li>
                  <li>
                    <a href="mailto:danbi.mobilestudio@gmail.com" className="text-white">
                      Email me
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      </Collapse>
      <Navbar bg="dark" variant="dark">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <strong>BAPPS</strong>
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="https://apps.apple.com/us/developer/huy-quang-do/id1449834765" target="_bank">Apple Store</Nav.Link>
              <Nav.Link href="http://play.google.com/store/apps/dev?id=4688206412080211950" target="_bank">CH Play</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Form inline>
            <Button variant="outline-secondary" onClick={() => setShow(!show)}>
              <span className="navbar-toggler-icon"></span>
            </Button>
          </Form>
        </Container>
      </Navbar>
    </header>
  );
}

export default BaseHeader;
