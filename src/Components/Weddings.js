import React from "react";
import "./Weddings.css";
import { Row, Col, Container } from "react-bootstrap";
import weddings from "../Images/weddings.jpg";

export default function Weddings() {
  return (
    <div>
      <Container>
        <div className="weddings-div">
          <Row>
            <Col xs={12} lg={5} className="d-none d-lg-block">
              <img src={weddings} className="wedding-img" alt="" />
            </Col>
            <Col xs={12} lg={7} className="d-flex align-items-center">
              <div className="wedding-text">
                <h2>Hearts in Bloom – Valentine’s Day Flowers</h2>
                <h5>
                  At our flower shop, we believe that love deserves to be
                  celebrated in the most beautiful way, and our Valentine’s Day
                  flowers are crafted to make your romantic gestures truly
                  memorable. From classic red roses symbolizing timeless love to
                  unique arrangements featuring vibrant tulips, lilies, and
                  orchids, each bouquet is designed to express your feelings in
                  a meaningful and heartfelt way. Whether you’re surprising a
                  new love or honoring a lifelong connection, our floral
                  creations are the perfect way to say, “I love you.”
                </h5>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
