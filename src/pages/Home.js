import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Breadcrumb from '../components/Breadcrumb';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container>
      <Breadcrumb />
      <section className="my-5">
        <h1 className="text-center mb-4">Welcome to TDITS</h1>
        <p className="text-center lead">
          Tiruvannamalai Development Information Technology Society (TDITS) is a business association and computer-based club located in Tiruvannamalai.
        </p>
      </section>

      <section className="my-5">
        <h2 className="text-center mb-4">Our Mission</h2>
        <Row>
          <Col md={4} className="mb-3">
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <Card.Title>Promote Technology</Card.Title>
                <Card.Text>We aim to foster technological growth in our community.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-3">
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <Card.Title>Business Networking</Card.Title>
                <Card.Text>We provide a platform for local businesses to connect and grow.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-3">
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <Card.Title>Skill Development</Card.Title>
                <Card.Text>We offer workshops and training to enhance IT skills.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      <section className="my-5">
        <h2 className="text-center mb-4">Upcoming Events</h2>
        <Row>
          <Col md={6} className="mb-3">
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <Card.Title>Web Development Workshop</Card.Title>
                <Card.Text>
                  Date: July 15, 2023<br />
                  Time: 10:00 AM - 4:00 PM<br />
                  Venue: TDITS Conference Hall
                </Card.Text>
                <Button variant="success" className="w-100">Register Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-3">
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <Card.Title>Business Networking Meetup</Card.Title>
                <Card.Text>
                  Date: August 5, 2023<br />
                  Time: 6:00 PM - 9:00 PM<br />
                  Venue: Grand Hotel, Tiruvannamalai
                </Card.Text>
                <Button variant="success" className="w-100">RSVP</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      <section className="my-5">
        <h2 className="text-center mb-4">Join TDITS</h2>
        <p className="text-center">
          Become a member of TDITS and enjoy exclusive benefits, networking opportunities, and access to our events and workshops.
        </p>
        <div className="text-center">
          <Button variant="primary" size="lg" as={Link} to="/membership" className="px-5 py-3">
            Apply for Membership
          </Button>
        </div>
      </section>
    </Container>
  );
}

export default Home;
