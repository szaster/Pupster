import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
        <h1>Pupster</h1>
        <h2>About dogs!</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1> Welcome to Pupster!</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
