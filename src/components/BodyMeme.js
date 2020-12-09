import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardMeme from './CardMeme'

const BodyMeme = ({templates}) => {
    return (
        <Container>
        <Row>
          {templates.map((template) => (
            <Col key={template.id}>
              <CardMeme template={template} />
            </Col>
          ))}
        </Row>
      </Container>
    )
}

export default BodyMeme
