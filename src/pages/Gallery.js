import React, { useState } from 'react';
import { Container, Row, Col, Card, Pagination } from 'react-bootstrap';
import Breadcrumb from '../components/Breadcrumb';

function Gallery() {
  const imagesPerPage = 8;
  const [activePage, setActivePage] = useState(1);

  // Sample gallery data - replace with your actual images
  const galleryImages = [
    { id: 1, src: '/placeholder.svg', alt: 'Gallery Image 1' },
    { id: 2, src: '/placeholder.svg', alt: 'Gallery Image 2' },
    { id: 3, src: '/placeholder.svg', alt: 'Gallery Image 3' },
    { id: 4, src: '/placeholder.svg', alt: 'Gallery Image 4' },
    { id: 5, src: '/placeholder.svg', alt: 'Gallery Image 5' },
    { id: 6, src: '/placeholder.svg', alt: 'Gallery Image 6' },
    { id: 7, src: '/placeholder.svg', alt: 'Gallery Image 7' },
    { id: 8, src: '/placeholder.svg', alt: 'Gallery Image 8' },
    { id: 9, src: '/placeholder.svg', alt: 'Gallery Image 9' },
    { id: 10, src: '/placeholder.svg', alt: 'Gallery Image 10' },
    { id: 11, src: '/placeholder.svg', alt: 'Gallery Image 11' },
    { id: 12, src: '/placeholder.svg', alt: 'Gallery Image 12' },
  ];

  const totalPages = Math.ceil(galleryImages.length / imagesPerPage);
  const currentImages = galleryImages.slice(
    (activePage - 1) * imagesPerPage,
    activePage * imagesPerPage
  );

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <>
      <Breadcrumb />
      <div
        style={{
          backgroundImage: 'url(/images/banner-without-content.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '100px 0',
          textAlign: 'center',
        }}
      >
        <h1 style={{ color: 'white', margin: 0 }}>Gallery</h1>
      </div>

      <Container className="my-5">
        <Row className="g-4">
          {currentImages.map((image) => (
            <Col key={image.id} sm={6} md={4} lg={3}>
              <Card className="border-0 shadow-sm h-100">
                <Card.Img
                  variant="top"
                  src={image.src}
                  alt={image.alt}
                  style={{ height: '250px', objectFit: 'cover' }}
                />
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

export default Gallery;
