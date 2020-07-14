import React from "react";
import { Jumbotron, Button, Container } from "react-bootstrap";
import BaseLayout from "src/components/layouts/Base";
import styles from "./styles/layout.module.scss";

function HomeLayout(props) {
  return (
    <BaseLayout>
      <Jumbotron className="text-center bg-white" as="section">
        <Container>
          <h1>Make happy for everyone!</h1>
          <p className="lead text-muted">
            Independant Video Games / Mobile Application / Innovative Technologies creators
          </p>
          {/* <p>
            <a href="#" className="btn btn-primary my-2">
              Main call to action
            </a>
            <a href="#" className="btn btn-secondary my-2">
              Secondary action
            </a>
          </p> */}
        </Container>
      </Jumbotron>
      {props.children}
    </BaseLayout>
  );
}
export default HomeLayout;
