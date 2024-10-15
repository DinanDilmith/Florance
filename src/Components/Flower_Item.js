import React from "react";
import Card from "react-bootstrap/Card";
import "./Flower_Item.css"

const FlowerItem = ({ imageSrc, title, tag, text, price, offerPrice, buttonText }) => {
  return (
    <div>
      <Card className="mt-5" style={{ width: "18rem" }}>
        <Card.Img className="card-img" variant="top" src={imageSrc} />
        <Card.Body  className="d-flex flex-column align-items-center text-center">
          <Card.Title>{title} {tag && <span className="tag">{tag}</span>}</Card.Title>
          <Card.Text>
            <span className="text">{text}</span> <br />
            <span className="og-price">{price}</span> <br />
            <span className="offer-price">{offerPrice}</span> <br />
          </Card.Text>
          <button className="buy-btn w-100">{buttonText}</button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FlowerItem;

