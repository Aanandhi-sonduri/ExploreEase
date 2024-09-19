'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function LandingPage({ onStartChat }) {
  return (
    <Container
      fluid
      className="vh-100 d-flex align-items-center justify-content-start"
      style={{
        backgroundImage: `url(/assets/landing.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#000',
        paddingLeft: '7%',
      }}
    >
      <Row>
        <Col xs={12}>
          <h1
            className="text-white"
            style={{
              fontSize: '4rem',
              textAlign: 'left',
            }}
          >
            <span>Welcome to</span> <br />
            <span>ExploreEase!</span>
          </h1>
          <p
            className="text-white"
            style={{
              fontSize: '1.5rem',
              textAlign: 'left',
            }}
          >
            Your guide to epic adventures awaits.
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={onStartChat}
            style={{ textAlign: 'left' }}
          >
            Let's Get Started
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

