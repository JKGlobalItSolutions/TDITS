import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Pagination } from 'react-bootstrap';
import Breadcrumb from '../components/Breadcrumb';

function Events() {
  const eventsPerPage = 6;
  const [activePage, setActivePage] = useState(1);

  const events = [
    {
      id: 1,
      title: 'Mr. Kartick Dutta',
      date: '10/06/2023',
      description: 'National Institute of Software and Hardware Technology of Durgapur achievement celebration.',
      image: '/placeholder.svg',
    },
    {
      id: 2,
      title: 'PADMA BHUSHAN HARIVANSH R.',
      date: '11/12/2023',
      description: 'Shri Amitabh Bachchan appreciated the efforts made by the organization.',
      image: '/placeholder.svg',
    },
    {
      id: 3,
      title: "Hon'ble Thawar Chand Gehlot",
      date: '18/09/2021',
      description: 'His contribution in serving humanity and philanthropic activities has been widely recognized.',
      image: '/placeholder.svg',
    },
    {
      id: 4,
      title: 'Event Title Four',
      date: '01/01/2024',
      description: 'Details about the fourth event organized by the community.',
      image: '/placeholder.svg',
    },
    {
      id: 5,
      title: 'Event Title Five',
      date: '02/02/2024',
      description: 'Details about the fifth event organized by the community.',
      image: '/placeholder.svg',
    },
    {
      id: 6,
      title: 'Event Title Six',
      date: '03/03/2024',
      description: 'Details about the sixth event organized by the community.',
      image: '/placeholder.svg',
    },
    {
      id: 7,
      title: 'Event Title Seven',
      date: '04/04/2024',
      description: 'Details about the seventh event organized by the community.',
      image: '/placeholder.svg',
    },
    {
      id: 8,
      title: 'Event Title Eight',
      date: '05/05/2024',
      description: 'Details about the eighth event organized by the community.',
      image: '/placeholder.svg',
    },
  ];

  const totalPages = Math.ceil(events.length / eventsPerPage);
  const currentEvents = events.slice(
    (activePage - 1) * eventsPerPage,
    activePage * eventsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <>
      < Breadcrumb />
      <div
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
                <Card.Footer className="bg-white border-0 text-center">
                  <Button
                    variant="primary"
                    className="px-4"
                    style={{ backgroundColor: '#004aad', border: 'none' }}
                  >
                    MORE
                  </Button>
                </Card.Footer>
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
