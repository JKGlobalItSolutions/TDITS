import React, { useState, useEffect, useCallback } from 'react';
import { Container, Row, Col, Card, Button, Pagination } from 'react-bootstrap';

function Events() {
  const eventsPerPage = 6;
  const [activePage, setActivePage] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const events = [
    {
      id: 1,
      title: 'Mr. Kartick Dutta',
      date: '10/06/2023',
      description: 'National Institute of Software and Hardware Technology of Durgapur achievement celebration.',
      image: '/images/leadership-summit.jpg',
    },
    {
      id: 2,
      title: 'PADMA BHUSHAN HARIVANSH R.',
      date: '11/12/2023',
      description: 'Shri Amitabh Bachchan appreciated the efforts made by the organization.',
      image: '/images/leadership-summit.jpg',
    },
    {
      id: 3,
      title: "Hon'ble Thawar Chand Gehlot",
      date: '18/09/2021',
      description: 'His contribution in serving humanity and philanthropic activities has been widely recognized.',
      image: '/images/leadership-summit.jpg',
    },
    {
      id: 4,
      title: 'Event Title Four',
      date: '01/01/2024',
      description: 'Details about the fourth event organized by the community.',
      image: '/images/leadership-summit.jpg',
    },
    {
      id: 5,
      title: 'Event Title Five',
      date: '02/02/2024',
      description: 'Details about the fifth event organized by the community.',
      image: '/images/leadership-summit.jpg',
    },
    {
      id: 6,
      title: 'Event Title Six',
      date: '03/03/2024',
      description: 'Details about the sixth event organized by the community.',
      image: '/images/leadership-summit.jpg',
    },
    {
      id: 7,
      title: 'Event Title Seven',
      date: '04/04/2024',
      description: 'Details about the seventh event organized by the community.',
      image: '/images/leadership-summit.jpg',
    },
    {
      id: 8,
      title: 'Event Title Eight',
      date: '05/05/2024',
      description: 'Details about the eighth event organized by the community.',
      image: '/images/leadership-summit.jpg',
    },
  ];

  const totalPages = Math.ceil(events.length / eventsPerPage);
  const currentEvents = events.slice(
    (activePage - 1) * eventsPerPage,
    activePage * eventsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    setAnimationKey(prevKey => prevKey + 1);
  };

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
  }, [observerCallback, animationKey]);

  return (
    <>
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

          .hover-card {
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          }

          .hover-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          }
        `}
      </style>

      <div
        className={`${isLoaded ? 'fade-in' : ''}`}
        style={{
          backgroundImage: 'url(/images/banner-without-content.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '100px 0',
          textAlign: 'center',
        }}
      >
        <h1 style={{ color: 'white', margin: 0 }}>Events</h1>
      </div>

      <Container className="my-5">
        <Row className="g-4" key={animationKey}>
          {currentEvents.map((event, index) => (
            <Col key={event.id} md={6} lg={4} className="hidden" style={{transitionDelay: `${index * 0.1}s`}}>
              <Card className="h-100 shadow-lg hover-card">
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

        <div className="d-flex justify-content-center mt-4">
          <Pagination>
            <Pagination.Prev
              onClick={() => handlePageChange(Math.max(activePage - 1, 1))}
              disabled={activePage === 1}
            />
            {[...Array(totalPages)].map((_, index) => (
              <Pagination.Item
                key={index + 1}
                active={activePage === index + 1}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() => handlePageChange(Math.min(activePage + 1, totalPages))}
              disabled={activePage === totalPages}
            />
          </Pagination>
        </div>
      </Container>
    </>
  );
}

export default Events;

