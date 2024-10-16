import React from "react";
import "./Valentines.css";
import { Row, Col, Container } from "react-bootstrap";
import valentines from "../Images/valentines.jpg";

export default function Valentines() {
  return (
    <div>
      <Container>
        <div className="valentines-div">
          <Row>
            <Col xs={12} lg={7} className="d-flex align-items-center">
              <div className="valentines-text">
                <h2>Blossoms of Love – Wedding Flowers</h2>
                <h5>
                  At our flower shop, we understand that every wedding is a
                  unique celebration of love, and our floral arrangements are
                  designed to make your special day truly unforgettable. From
                  delicate bouquets for the bride and bridesmaids to elegant
                  centerpieces and dreamy floral arches, each arrangement is
                  crafted with a passion for beauty and attention to detail.
                  Whether you're envisioning a romantic garden theme with soft
                  pastels or a bold, modern look with vibrant blooms, our
                  wedding flowers are tailored to complement your style and
                  vision.
                </h5>
              </div>
            </Col>
            <Col xs={12} lg={5} className="d-none d-lg-block">
              <img src={valentines} className="valentines-img" alt="" />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
