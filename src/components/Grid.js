import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class Grid extends Component {
  render() {
    return (
      <div>
        <div style={{ display: "block" }}>
          <h4>React-Bootstrap Container Component</h4>
          <Container fluid style={{ backgroundColor: "green", height: 300 }}>
            <h3>Sample Text, Greetings from GeeksforGeeks</h3>
          </Container>
        </div>
        <Row
          style={{
            backgroundColor: "red",
          }}
        >
          <Col
            className="col-2 "
            style={{
              backgroundColor: "red",
            }}
          >
            Sample First Col
          </Col>
          <Col
            className="col-8  "
            style={{
              backgroundColor: "yellow",
              textAlign: "center",
            }}
          >
            Sample Second Col
          </Col>
          <Col
            className="col-2"
            style={{
              backgroundColor: "blue",
            }}
          >
            Sample Third Col
          </Col>
        </Row>
      </div>
    );
  }
}
