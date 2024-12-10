import React from 'react';
import { Container, Row, Col, Button, Image, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container fluid className="p-0">
      {/* Banner Section */}
      <div
        style={{
          backgroundImage: 'url(/images/banner.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '500px',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white',
          }}
        >
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Welcome to TDITS</h1>
          <p style={{ fontSize: '1.5rem' }}>
            Empowering Innovation & Business Excellence in Tiruvannamalai
          </p>
        </div>
      </div>

      {/* Main Content */}
      <Container>
        {/* Section 1: About */}
        <section className="my-5">
          <Row className="align-items-center">
            <Col md={6}>
              <Image src="/images/about-home.jpg" fluid rounded />
            </Col>
            <Col md={6}>
              <h2>About TDITS</h2>
              <p>
                The Tiruvannamalai Development Information Technology Society (TDITS) is a professional association committed to driving innovation, promoting business growth, and fostering community development through technology and collaboration.
              </p>
              <Button variant="primary" as={Link} to="/about" className="mt-3">
                Learn More
              </Button>
            </Col>
          </Row>
        </section>

        {/* Section 2: Mission */}
        <section className="my-5">
          <h2 className="text-center mb-4">Our Mission</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Body>
                  <Card.Title>Innovation</Card.Title>
                  <Card.Text>
                    We strive to foster technological advancements and creative solutions to empower businesses and individuals.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Body>
                  <Card.Title>Collaboration</Card.Title>
                  <Card.Text>
                    By connecting professionals, we create opportunities for partnerships and mutual growth.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Body>
                  <Card.Title>Community Impact</Card.Title>
                  <Card.Text>
                    Our initiatives aim to bring positive changes to the local community through education and empowerment.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        {/* Section 3: Events */}
        <section className="my-5">
          <h2 className="text-center mb-4">Upcoming Events</h2>
          <Row>
            <Col md={6} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Body>
                  <Card.Title>Leadership Summit 2024</Card.Title>
                  <Card.Text>
                    Date: February 10, 2024<br />
                    Time: 9:00 AM - 5:00 PM<br />
                    Venue: TDITS Conference Hall
                  </Card.Text>
                  <Button variant="primary" className="w-100">Register Now</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Body>
                  <Card.Title>Business Networking Gala</Card.Title>
                  <Card.Text>
                    Date: March 15, 2024<br />
                    Time: 7:00 PM - 10:00 PM<br />
                    Venue: Grand Hotel, Tiruvannamalai
                  </Card.Text>
                  <Button variant="primary" className="w-100">RSVP</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
      </Container>
    </Container>
  );
}

export default Home;
