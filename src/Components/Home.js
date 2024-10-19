import React from 'react'
import "./Home.css";
import { Col, Container } from 'react-bootstrap';

export default function Home() {
  return (
    <div className='home-div' id='#home'>
        <Container>
        <Col xs={12} md={6} xl={4}>
            <div className='wc-text'>
            <h1>Welcome to Florance – Your One-Stop Flower Shop!</h1>
            <p>Discover the beauty of nature with our exquisite selection of fresh flowers and thoughtfully curated arrangements, perfect for every occasion at Florance!</p>
            </div>
        </Col>
        </Container>
    </div>
  )
}
