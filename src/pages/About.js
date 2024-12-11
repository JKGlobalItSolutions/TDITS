import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
            <Col md={6} className='p-2'>
              <h2>Who We Are</h2>
              <p>
              The <b>Tiruvannamalai</b> Development Information Technology Society <b>(TDITS)</b> is a hub for innovation, collaboration, and community development. We bring together like-minded individuals, businesses, and organizations to create a thriving ecosystem for growth and advancement. At TDITS, we aim to foster a culture of knowledge-sharing, technological progress, and community-driven initiatives that drive sustainable change.

We believe in the power of collective action and work towards building a network that supports both professional development and societal growth. Through our events, workshops, and partnerships, we create a platform for individuals and businesses to enhance their capabilities and contribute to the development of our community.
              </p>
              <Link to="/contact">
                <Button variant="primary" className="mt-3">Contact Us</Button>
              </Link>
            </Col>
            <Col md={6}>
              <Image src="./images/about-us.webp" fluid rounded />
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
                  <li><b>Promoting technological literacy and access:</b> We focus on ensuring that technology is accessible to everyone and that individuals are equipped with the skills to navigate the digital world.</li>
                  <li><b>Providing platforms for professional networking:</b> By creating opportunities for collaboration and partnerships, we help businesses and professionals build meaningful connections.</li>
                  <li><b>Enhancing community well-being through impactful projects:</b> We are committed to supporting local communities with projects that foster growth and contribute to their overall well-being.</li>
                </ul>
              </p>
            </Col>
            <Col md={6} className="order-md-1">
              <Image src="./images/about-us-2.webp" fluid rounded />
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
}

export default About;
