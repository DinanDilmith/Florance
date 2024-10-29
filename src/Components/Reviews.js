import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Reviews.css";

export default function Reviews({ img, heading, review, name }) {
  return (
    <div className="reviews-comp-div">
      <Container>
        <Row>
          <Col xs={12} lg={6}>
            <div className="cus-img-div">
              <img src={img} alt="" className="cus-img" />
            </div>
          </Col>
          <Col xs={12} lg={6} className="d-flex align-items-center">
            <div className="cus-heading">
              <h3>{heading}</h3>
              <p>{review}</p>
              <h5>{name}</h5>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
