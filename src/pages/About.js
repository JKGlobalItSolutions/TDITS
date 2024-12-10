import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function About() {
  return (
    <div>
      {/* Banner Section (No container) */}
      <div
        style={{
          backgroundImage: 'url(/images/banner-without-content.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '100px 0',
          textAlign: 'center',
        }}
      >
        <h1 style={{ color: 'white', margin: 0 }}>About Us</h1>
      </div>

      {/* Main Content */}
      <Container className='my-3'>
        <section className="my-5">
          <Row className="align-items-center">
            <Col md={6}>
              <h2>Who We Are</h2>
              <p>
                The Tiruvannamalai Development Information Technology Society (TDITS) is a hub for innovation, collaboration, and community development. We bring together like-minded individuals, businesses, and organizations to create a thriving ecosystem for growth and advancement.
              </p>
              <Link to="/contact"  ><Button variant="primary" className="mt-3"  to="/contact" > Contact Us</Button></Link>
            </Col>
            <Col md={6}>
              <Image src="./images/about-who-we-are.jpg" fluid rounded />
            </Col>
          </Row>
        </section>

        <section>
          <Row className="align-items-center">
            <Col md={6} className="order-md-2">
              <h2>Our Goals</h2>
              <p>
                At TDITS, we are driven by a passion for progress. Our goals include:
                <ul>
                  <li>Promoting technological literacy and access.</li>
                  <li>Providing platforms for professional networking.</li>
                  <li>Enhancing community well-being through impactful projects.</li>
                </ul>
              </p>
            </Col>
            <Col md={6} className="order-md-1">
              <Image src="./images/about-our-goals.jpg" fluid rounded />
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
}

export default About;
