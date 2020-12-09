import React, { useState } from "react";
import { Button, Form, FormGroup, Image, Modal } from "react-bootstrap";

const FormMeme = ({ template }) => {
  const objectToQueryParam = (obj) => {
    const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
    return "?" + params.join("&");
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [meme, setMeme] = useState(null);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const params = {
      template_id: template.id,
      text0: topText,
      text1: bottomText,
      username: "xzk03017",
      password: "xzk03017@cndps.com",
    };
    const response = await fetch(
      `https://api.imgflip.com/caption_image${objectToQueryParam(params)}`
    );
    const json = await response.json();
    console.log(json.data.url);
    setMeme(json.data.url);
  };

  if (meme) {
    return (
      <div style={{ textAlign: "center" }}>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{`MEME CREADO CON LA PLANTILLA `}{template.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Image src={meme} thumbnail />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar Modal
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  return (
    <>
      <Button variant="primary" type="submit" onClick={handleShow}>
        Crear Meme
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{template.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={template.url} thumbnail />
          <div style={{ textAlign: "center" }}>
            <FormGroup onSubmit={handleOnSubmit}>
              <Form.Control
                type="text"
                placeholder="Texto 1"
                value={topText}
                onChange={(e) => setTopText(e.target.value)}
              />

              <Form.Control
                type="text"
                placeholder="Texto 2"
                value={bottomText}
                onChange={(e) => setBottomText(e.target.value)}
              />
            </FormGroup>

            <Button onClick={handleOnSubmit} type="submit">
              Crear Meme
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar Modal
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormMeme;
