import React from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";

type IProps = {
  data: any;
};

const AppCard: React.FC<IProps> = ({ data }: IProps) => {
  return (
    <Card>
      <Card.Img variant="top" src={data.frontmatter.thumbnail} />
      <Card.Body>
        <Card.Title>{data.frontmatter.name}</Card.Title>
        {/* <Card.Text className="text-justify">{data.frontmatter.short_description}</Card.Text> */}
        <ButtonGroup aria-label="go_store">
          {data.frontmatter.ios && (
            <Button
              as="a"
              target="_bank"
              href={data.frontmatter.ios}
              size="sm"
              variant="outline-secondary"
            >
              &nbsp;&nbsp;IOS&nbsp;&nbsp;
            </Button>
          )}
          {data.frontmatter.android && (
            <Button
              as="a"
              target="_bank"
              href={data.frontmatter.android}
              size="sm"
              variant="outline-secondary"
            >
              Android
            </Button>
          )}
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};

export default AppCard;
