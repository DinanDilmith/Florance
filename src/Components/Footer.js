import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import instagram from "../Images/instagram.png";
import tumblr from "../Images/tumblr.png";
import facebook from "../Images/facebook.png";

export default function Footer() {
  return (
    <div className="footer-div">
      <Container>
        <Row>
          <Col xs={12} lg={6}>
            <div className="why-florance-div">
            <h5>Why Florance?</h5>
            <h6>
            Florance Flower Shop specializes in exquisite, fresh flowers for every special occasion. From stunning bouquets to personalized floral arrangements, we add vibrant color and joy to your celebrations, ensuring each unique design reflects your personal style with our dedicated, friendly service.
            </h6>
            </div>
          </Col>

          <Col xs={12} lg={3}>
            <div className="contact-div">
              <h5>Need Help?</h5>
              <h6>
                Call Us: <a href="info@florance.com">info@florance.com</a>
              </h6>
              <h6>Contact Us: +94 91 9999456</h6>
              <h6>
                Sales: <a href="sales@florance.com">sales@florance.com</a>
              </h6>
            </div>
          </Col>

          <Col xs={12} lg={3}>
            <div className="social-div">
              <h5>Find us on:</h5>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="Instagram" />
              </a>

              <a
                href="https://www.tumblr.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={tumblr} alt="Tumblr" />
              </a>

              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} alt="Facebook" />
              </a>
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  );
}
