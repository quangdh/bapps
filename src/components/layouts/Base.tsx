import React from "react";
import Head from "next/head";
import BaseHeader from "src/components/base/Header";
import { Container } from "react-bootstrap";
import styles from "./styles/Base.module.scss";

function BaseLayout(props) {
  return (
    <React.Fragment>
      <Head>
        <title>Home | BApps Games Studio.</title>
        <meta name="description" content="Independant Video Games / Mobile Application / Innovative Technologies creators" />
        <meta name="robots" content="index, follow" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
      </Head>
      <BaseHeader />
      <main>{props.children}</main>
      <footer className="text-muted">
        <Container>
          <p className="float-right">
            <a href="#">Back to top</a>
          </p>
          <p>
            BApps Game Studio @ 2019
          </p>
          <p>
            <span>Address: My Dinh, Nam Tu Liem, Ha Noi, Viet Nam. </span>
            <span>Email: <a href="mailto:danbi.mobilestudio@gmail.com">danbi.mobilestudio@gmail.com</a></span>
          </p>
          <p>
            <a href="/privacy_policy.html" target="_bank">Privacy policy</a>
          </p>
        </Container>
      </footer>
    </React.Fragment>
  );
}

export default BaseLayout;
