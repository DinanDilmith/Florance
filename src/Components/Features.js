import React from "react";
import "./Features.css";
import { Container, Row, Col } from "react-bootstrap";
import fresh from "../Images/fresh.png";
import bouquet from "../Images/bouquet.png";
import delivery from "../Images/delivery.png";

export default function Features() {
  return (
    <div className="feature-div">
        <h2 className="topic-h2">Discover Our Commitment to Quality and Freshness</h2>
      <Container>
        <Row className="d-flex justify-content-center text-center">

          <Col xs={12} lg={4}>
           <div className="col-div-style">
           <img src={fresh} className="features-img" alt="fresh quality" />
            <h4>Guaranteed Freshness</h4>
            <p>Fresh blooms delivered at their highest quality possible.</p>
           </div>
          </Col>

          <Col xs={12} lg={4}>
            <div className="col-div-style">
            <img src={bouquet} className="features-img" alt="fresh quality" />
            <h4>Custom Floral Arrangements</h4>
            <p>Tailored floral designs to suit your unique preferences.</p>
            </div>
          </Col>

          <Col xs={12} lg={4}>
            <div className="col-div-style">
            <img src={delivery} className="features-img" alt="fresh quality" />
            <h4>Hassle-Free Delivery</h4>
            <p>Convenient and reliable delivery right to your doorstep.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
