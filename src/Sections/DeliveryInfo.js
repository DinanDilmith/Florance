import React from "react";
import "./DeliveryInfo.css";
import Accord from "../Components/Accordion";
import { Container } from "react-bootstrap";

export default function DeliveryInfo() {
  return (
    <div className="main-div">
      <Container>
      <Accord
        eventKey="0"
        header="What are the delivery areas covered by Florance Flower Shop?"
        body="Florance Flower Shop delivers flowers across all major cities in Sri Lanka. Please enter your delivery address at checkout to confirm availability for your specific location. If you’re unsure, feel free to contact our support team to verify delivery options for your area."
      />

      <Accord
      eventKey="1"
        header="What are the delivery charges?"
        body=" Delivery charges depend on the distance from our shop location in Colombo and the type of delivery selected (standard or express). Standard delivery starts at LKR 250, while express delivery is available at an additional charge for same-day orders. The exact fee will be displayed during checkout."
      />

      <Accord
      eventKey="2"
        header="Can I schedule a specific delivery time for my order?"
        body="Yes, you can choose a specific delivery time during the ordering process. We offer time slots throughout the day to accommodate your needs. For same-day delivery, please place your order by 1:00 p.m. If you need an urgent delivery, contact us to arrange express options.
"
      />

      <Accord
      eventKey="3"
        header="What should I do if my flowers are delivered and no one is home?"
        body="If no one is available to receive your flowers, our delivery team will contact the recipient or the sender. We can leave the flowers with a neighbor or at a secure location, based on your instructions. In case of unsuccessful attempts, the flowers will be returned to the shop, and a redelivery can be arranged for an additional fee."
      />

      <Accord
      eventKey="4"
        header=" How can I track my flower delivery?"
        body="Once your order is processed, you will receive a tracking link via email or SMS. You can use this link to follow the status of your delivery in real time. For any updates or concerns, feel free to reach out to our customer service team."
      />
      </Container>
    </div>
  );
}
