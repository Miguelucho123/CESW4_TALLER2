import React from "react";
import { Card, Container } from "react-bootstrap";
import FormMeme from "./FormMeme";

const CardMeme = ({ template }) => {
  return (
    <Container>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={template.url} />
        <Card.Body>
          <Card.Title>{template.name}</Card.Title>
        </Card.Body>

        <FormMeme template={template}/>
      </Card>
    </Container>
  );
};

export default CardMeme;
