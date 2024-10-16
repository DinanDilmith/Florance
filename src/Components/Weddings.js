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
            <Col xs={12} lg={5}>
              <img src={weddings} className="wedding-img" alt="" />
            </Col>
            <Col xs={12} lg={7} className="d-flex align-items-center">
              <div className="wedding-text">
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
          </Row>
        </div>
      </Container>
    </div>
  );
}
