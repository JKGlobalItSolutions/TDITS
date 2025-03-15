import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { Container, Row, Col, Button, Image, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const EventCard = React.memo(({ event }) => (
  <Card className="h-100 shadow-lg hover-card">
    <Card.Img
      variant="top"
      src={event.image}
      alt={event.title}
      style={{ height: '200px', objectFit: 'cover' }}
      loading="lazy"
    />
    <Card.Body>
      <Card.Title>{event.title}</Card.Title>
      <small className="text-muted d-block mb-2">{event.date}</small>
      <Card.Text>{event.description}</Card.Text>
    </Card.Body>
  </Card>
));

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  const currentEvents = useMemo(() => [
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
      title: "Tech Innovation Showcase",
      date: "April 5, 2024",
      time: "10:00 AM - 4:00 PM",
      venue: "TDITS Innovation Center",
      description: "Explore cutting-edge technologies and innovative solutions from local tech startups and established companies.",
      image: "/images/leadership-summit.jpg",
    },
  ], []);

  const observerCallback = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        entry.target.style.visibility = 'visible';
      }
    });
  }, []);

  useEffect(() => {
    setIsLoaded(true);

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => {
      el.style.visibility = 'hidden';
      observer.observe(el);
    });

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, [observerCallback]);

  return (
    <Container fluid className="p-0">
      <style>
        {`
          :root {
            --animation-duration: 0.8s;
            --animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
          }

          .hidden {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity var(--animation-duration) var(--animation-timing-function),
                        transform var(--animation-duration) var(--animation-timing-function);
          }

          .show {
            opacity: 1;
            transform: translateY(0);
          }

          .fade-in {
            animation: fadeIn var(--animation-duration) var(--animation-timing-function) forwards;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          .banner-image {
            transition: transform 8s ease-in-out;
          }

          .banner-image:hover {
            transform: scale(1.05);
          }

          .pulse-button {
            animation: pulse 2s infinite;
          }

          @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.7); }
            70% { box-shadow: 0 0 0 10px rgba(0, 123, 255, 0); }
            100% { box-shadow: 0 0 0 0 rgba(0, 123, 255, 0); }
          }

          .hover-card {
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          }

          .hover-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          }

          .stagger-animation > * {
            opacity: 0;
            transform: translateY(30px);
          }

          .stagger-animation.show > * {
            opacity: 1;
            transform: translateY(0);
            transition: opacity 0.5s ease-out, transform 0.5s ease-out;
          }

          .stagger-animation.show > *:nth-child(1) { transition-delay: 0.1s; }
          .stagger-animation.show > *:nth-child(2) { transition-delay: 0.2s; }
          .stagger-animation.show > *:nth-child(3) { transition-delay: 0.3s; }
        `}
      </style>

      <Image
        src="/images/banner.png"
        className={`py-2 img-fluid banner-image ${isLoaded ? 'fade-in' : ''}`}
        alt="TDITS Banner"
        rounded
        loading="eager"
      />

      <Container>
        <section className="my-5">
          <Row className="align-items-center hidden">
            <Col md={6}>
              <Image src="/images/about-us.webp" className="p-2 img-fluid" alt="About TDITS" rounded loading="lazy" />
            </Col>
            <Col md={6}>
              <h2>About TDITS</h2>
              <p>
                The <b>Tiruvannamalai</b> Development Information Technology Society <b>(TDITS)</b> is a hub for innovation, collaboration, and community development. We bring together like-minded individuals, businesses, and organizations to create a thriving ecosystem for growth and advancement.
              </p>
              <p>
                We believe in the power of collective action and work towards building a network that supports both professional development and societal growth.
              </p>
              <Button variant="primary" as={Link} to="/about" className="mt-3 pulse-button">
                Learn More
              </Button>
            </Col>
          </Row>
        </section>

        <section className="my-5">
          <h2 className="text-center mb-4 hidden">Upcoming Events</h2>
          <Row className="g-4 stagger-animation hidden">
            {currentEvents.map((event) => (
              <Col key={event.id} md={6} lg={4}>
                <EventCard event={event} />
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    </Container>
  );
}

export default Home;