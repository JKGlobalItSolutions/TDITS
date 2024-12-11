import React from 'react';
import { Container, Row, Col, Button, Image, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  const currentEvents = [
    {
      id: 1,
      title: "Leadership Summit 2024",
      date: "February 10, 2024",
      time: "9:00 AM - 5:00 PM",
      venue: "TDITS Conference Hall",
      description: "Join us for an inspiring day of leadership development, networking, and professional growth.",
      image: "/images/leadership-summit.jpg",
    },
    {
      id: 2,
      title: "Business Networking Gala",
      date: "March 15, 2024",
      time: "7:00 PM - 10:00 PM",
      venue: "Grand Hotel, Tiruvannamalai",
      description: "An exclusive evening for business leaders to connect, collaborate, and celebrate success.",
      image: "/images/leadership-summit.jpg",
    },
    {
      id: 3,
      title: "Business Networking Gala",
      date: "March 15, 2024",
      time: "7:00 PM - 10:00 PM",
      venue: "Grand Hotel, Tiruvannamalai",
      description: "An exclusive evening for business leaders to connect, collaborate, and celebrate success.",
      image: "/images/leadership-summit.jpg",
    },
  ];

  return (
    <Container fluid className="p-0">
      <Image src="/images/banner.png" className="py-2 img-fluid" rounded />

      <Container>
        {/* Section 1: About */}
        <section className="my-3">
          <Row className="align-items-center">
            <Col md={6}>
              <Image src="/images/about-us.webp" className="p-2 img-fluid" rounded />
            </Col>
            <Col md={6}>
              <h2>About TDITS</h2>
              <p>
                The <b>Tiruvannamalai</b> Development Information Technology Society <b>(TDITS)</b> is a hub for innovation, collaboration, and community development. We bring together like-minded individuals, businesses, and organizations to create a thriving ecosystem for growth and advancement.
              </p>
              <p>
                We believe in the power of collective action and work towards building a network that supports both professional development and societal growth.
              </p>
              <Button variant="primary" as={Link} to="/about" className="mt-3">
                Learn More
              </Button>
            </Col>
          </Row>
        </section>

    

        {/* Section 3: Events */}
        <section className="my-5">
          <h2 className="text-center mb-4">Upcoming Events</h2>
          <Row className="g-4">
            {currentEvents.map((event) => (
              <Col key={event.id} md={6} lg={4}>
                <Card className="h-100 shadow-lg">
                  <Card.Img
                    variant="top"
                    src={event.image}
                    alt={event.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title>{event.title}</Card.Title>
                    <small className="text-muted d-block mb-2">{event.date}</small>
                    <Card.Text>{event.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    </Container>
  );
}

export default Home;
