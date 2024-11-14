import React from "react";
import Accordion from "react-bootstrap/Accordion";
import './Accordion.css'

const Accord = ({ header, body, eventKey }) => {
  return (
    <div className="accord-main-div">
      <Accordion className="accordion">
        <Accordion.Item eventKey={eventKey}>
          <Accordion.Header className="accord-header">{header}</Accordion.Header>
          <Accordion.Body className="accord-body">{body}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Accord;

