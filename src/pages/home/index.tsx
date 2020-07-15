import React from "react";
import HomeLayout from "src/components/home/layout";
import { Container, Row, Col } from "react-bootstrap";
import * as R from "ramda";
import AppCard from "src/components/home/AppCard";
import { getListGame, getListApp } from "src/utils/DataUtils";
import { GetStaticProps } from "next";

type IProps = {
  games: any[],
  apps: any[]
}

function makeList(data) {
  return R.splitEvery(4, data);
}

const Home: React.FC<IProps> = ({ games, apps }: IProps) => {

  const renderItem = (item, index) => (
    <Col md={3} key={index + ""}>
      <AppCard data={item} />
    </Col>
  )
  const renderItems = (items, index) => (
    <Row key={index + ""}>
      {items.map(renderItem)}
    </Row>)

  const listGame = makeList(games);
  const listApp = makeList(apps);
  return (
    <HomeLayout>
      <div className="album py-5 bg-light">
        <Container>
          <h3>Games</h3>
          {listGame.map(renderItems)}
          <h3>Apps</h3>
          {listApp.map(renderItems)}
        </Container>
      </div>
    </HomeLayout>
  )
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      games: getListGame(),
      apps: []//getListApp(),
    },
  }
};

export default Home;
