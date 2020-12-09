import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BodyMeme from "./components/BodyMeme";
import Header from "./components/Header";
import { BASE_URL } from "./utils/apis";

function App() {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    const url = `${BASE_URL}`;
    fetch(url).then((x) =>
      x.json().then((response) => setTemplates(response.data.memes))
    );
  }, []);

  return (
    <>
      <Header />
      <Container>
        <div style={{ textAlign: "center" }}>
          {" "}
          <h1>ESCOGE PLANTILLA</h1>
        </div>

        <Row>
          <Col xs={6} md={4}></Col>
          <BodyMeme templates={templates} />
          <Col xs={6} md={4}></Col>
          <Col xs={6} md={4}></Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
