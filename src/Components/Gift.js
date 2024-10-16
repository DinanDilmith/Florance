import React from "react";
import "./Gift.css";
import { Row, Col, Container } from "react-bootstrap";
import gifts from "../Images/gifts.jpg";

export default function Gift() {
  return (
    <div>
      <Container>
        <div className="gift-div">
          <Row>
            <Col xs={12} lg={7}  className="d-flex align-items-center">
              <div className="gift-text">
                <h2> Petals of Joy – Gift Orders</h2>
                <h5>
                  At our flower shop, every gift order is a work of art,
                  designed to bring joy and delight to your loved ones. Whether
                  you’re celebrating a milestone, sending a thoughtful birthday
                  surprise, or expressing love “just because,” our stunning
                  floral arrangements are the perfect way to make any moment
                  special. From lush bouquets bursting with vibrant colors to
                  elegant assortments of roses, lilies, or seasonal blooms, each
                  order is crafted with care and personalized to suit your
                  occasion.
                </h5>
              </div>
            </Col>
            <Col xs={12} lg={5} className="d-none d-lg-block">
              <img src={gifts} className="gift-img" alt="weddings" />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
