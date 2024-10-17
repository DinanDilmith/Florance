import React from "react";
import "./Newsletter.css";
import { Container, Row, Col } from "react-bootstrap";
import newsletter from "../Images/newsletter.jpg";
import Form from "react-bootstrap/Form";

export default function Newsletter() {
  return (
    <div>
      <Container>
        <div className="newslet-div">
          <Row>
            <Col xs={12} lg={6} xl={5} className="d-none d-lg-block">
              <img
                src={newsletter}
                className="newslet-img"
                alt="Newsletter"
              />
            </Col>

            <Col xs={12} lg={6} xl={7}  className="d-flex align-items-center justify-content-center">
              <div className="newslet-text">
                <h2>"Stay Connected with Us!"</h2>
                <h5>
                  Join our community of flower enthusiasts and be the first to
                  know about exclusive offers, new arrivals, and floral tips to
                  brighten your days. Subscribe to our newsletter and receive
                  10% off your next order!
                </h5>

                <Form>
                  <Form.Group className="form-email my-4">
                    <Form.Control
                      type="email"
                      placeholder="@typeyouremailhere"
                    />
                  </Form.Group>
                  <button className="newslet-btn" type="submit" aria-label="Subscribe to Newsletter">SUBSCRIBE</button>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
