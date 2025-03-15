import React, { useState, useEffect, useCallback } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function About() {
  const [isLoaded, setIsLoaded] = useState(false);

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
    <div>
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

          .hover-image {
            transition: transform 0.3s ease-in-out;
          }

          .hover-image:hover {
            transform: scale(1.05);
          }
        `}
      </style>

      {/* Banner Section (No container) */}
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
        <h1 style={{ color: 'white', margin: 0 }}>About Us</h1>
      </div>

      {/* Main Content */}
      <Container className='my-3'>
        <section className="my-5">
          <Row className="align-items-center">
            <Col md={6} className='p-2 hidden'>
              <h2>Who We Are</h2>
              <p>
                The <b>Tiruvannamalai</b> Development Information Technology Society <b>(TDITS)</b> is a hub for innovation, collaboration, and community development. We bring together like-minded individuals, businesses, and organizations to create a thriving ecosystem for growth and advancement. At TDITS, we aim to foster a culture of knowledge-sharing, technological progress, and community-driven initiatives that drive sustainable change.
              </p>
              <p>
                We believe in the power of collective action and work towards building a network that supports both professional development and societal growth. Through our events, workshops, and partnerships, we create a platform for individuals and businesses to enhance their capabilities and contribute to the development of our community.
              </p>
              <Link to="/contact">
                <Button variant="primary" className="mt-3">Contact Us</Button>
              </Link>
            </Col>
            <Col md={6} className="hidden" style={{ transitionDelay: '0.2s' }}>
              <Image src="./images/about-us.webp" fluid rounded className="hover-image" />
            </Col>
          </Row>
        </section>

        <section>
          <Row className="align-items-center">
            <Col md={6} className="order-md-2 hidden">
              <h2>Our Goals</h2>
              <p>
                At TDITS, we are driven by a passion for progress. Our goals include:
              </p>
              <ul>
                <li><b>Promoting technological literacy and access:</b> We focus on ensuring that technology is accessible to everyone and that individuals are equipped with the skills to navigate the digital world.</li>
                <li><b>Providing platforms for professional networking:</b> By creating opportunities for collaboration and partnerships, we help businesses and professionals build meaningful connections.</li>
                <li><b>Enhancing community well-being through impactful projects:</b> We are committed to supporting local communities with projects that foster growth and contribute to their overall well-being.</li>
              </ul>
            </Col>
            <Col md={6} className="order-md-1 hidden" style={{ transitionDelay: '0.2s' }}>
              <Image src="./images/about-us-2.webp" fluid rounded className="hover-image" />
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
}

export default About;

