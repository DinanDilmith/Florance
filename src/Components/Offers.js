import React from "react";
import FlowerItem from "./Flower_Item";
import { Container, Row, Col } from "react-bootstrap";
import "./Offer.css";
import Rose from "../Images/flowers/Rose.jpg";
import Tulip from "../Images/flowers/Tulip.jpg";
import Peonies from "../Images/flowers/Peonies.jpg";
import Lilies from "../Images/flowers/Lilies.jpg";
import Orchids from "../Images/flowers/Orchids.jpg";
import Sunflowers from "../Images/flowers/Sunflowers.jpg";
import Hydrangeas from "../Images/flowers/Hydrangeas.jpg";
import Daisies from "../Images/flowers/Daisies.jpg";

export default function Offers() {
  return (
    <div>
      <Container>
        <h2 className="offer-heading">
          Mother's Day Offers | 40% Off Deals | 7 Day Freshness <br /> Guarantee
        </h2>

        <Row>
          <Col xs={12} sm={6} lg={4} xl={3}>
            <FlowerItem
              imageSrc={Rose}
              title="Ecuadorian Roses"
              tag="New"
              text="Large blooms and long stems in vibrant colors for bouquets."
              price="Rs. 9000.00"
              offerPrice="Rs. 5400.00"
              buttonText="Buy Now"
            />
          </Col>

          <Col xs={12} sm={6} lg={4} xl={3}>
            <FlowerItem
              imageSrc={Tulip}
              title="Darwin Hybrid Tulips"
              tag="New"
              text="Symbolizing love, tulips are perfect for spring arrangements."
              price="Rs. 8000.00"
              offerPrice="Rs. 4800.00"
              buttonText="Buy Now"
            />
          </Col>

          <Col xs={12} sm={6} lg={4} xl={3}>
            <FlowerItem
              imageSrc={Peonies}
              title="Sarah Bernhardt Peony"
              text="Lush, full blooms with fragrance, perfect for weddings."
              price="Rs. 9500.00"
              offerPrice="Rs. 5700.00"
              buttonText="Buy Now"
            />
          </Col>

          <Col xs={12} sm={6} lg={4} xl={3}>
            <FlowerItem
              imageSrc={Lilies}
              title="Asiatic Lilies"
              tag="New"
              text="Elegant and fragrant, lilies are versatile for arrangements."
              price="Rs. 10000.00"
              offerPrice="Rs. 6000.00"
              buttonText="Buy Now"
            />
          </Col>

          <Col xs={12} sm={6} lg={4} xl={3}>
            <FlowerItem
              imageSrc={Orchids}
              title="Cattleya Orchids"
              tag="New"
              text="Exotic orchids with unique shapes and long-lasting blooms."
              price="Rs. 7000.00"
              offerPrice="Rs. 4200.00"
              buttonText="Buy Now"
            />
          </Col>

          <Col xs={12} sm={6} lg={4} xl={3}>
            <FlowerItem
              imageSrc={Sunflowers}
              title="Dwarf Sunflowers"
              text="Cheerful sunflowers symbolize adoration, loyalty, and happiness."
              price="Rs. 9750.00"
              offerPrice="Rs. 5850.00"
              buttonText="Buy Now"
            />
          </Col>

          <Col xs={12} sm={6} lg={4} xl={3}>
            <FlowerItem
              imageSrc={Hydrangeas}
              title="Endless Summer Hydrangea"
              text="Large, round flower heads add volume to floral arrangements."
              price="Rs. 11500.00"
              offerPrice="Rs. 6900.00"
              buttonText="Buy Now"
            />
          </Col>

          <Col xs={12} sm={6} lg={4} xl={3}>
            <FlowerItem
              imageSrc={Daisies}
              title="Gerbera Daisies"
              tag="New"
              text="Daisies symbolize innocence, perfect for floral arrangements."
              price="Rs. 10500.00"
              offerPrice="Rs. 6300.00"
              buttonText="Buy Now"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

