import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhone, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram 
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-light py-4 mt-auto">
      <style jsx>{`
        /* Logo size adjustments for different screen sizes */
        .footer-logo {
          width: auto;
          height: 80px; /* Default height for desktop */
        }

        @media (max-width: 1199px) {
          .footer-logo {
            height: 60px; /* Tablet view */
          }
        }

        @media (max-width: 767px) {
          .footer-logo {
            height: 50px; /* Mobile view */
          }

          /* Center content for mobile view */
          .footer-content {
            justify-content: center;
            text-align: center;
          }

          .footer-text {
            font-size: 0.8rem; /* Adjust text size for mobile */
          }

          /* Center Follow Us icons for mobile */
          .social-icons {
            justify-content: center;
          }

          .footer-text {
            font-size: 0.9rem;
            text-align: center;
          }
        }

        .footer-text {
          font-size: 0.9rem;
          text-align: center;
        }

        .footer-text a {
          color: #007bff;
        }

        .footer-text a:hover {
          color: #0056b3;
        }
      `}</style>

      <Row className="mb-4 footer-content">
        <Col xs={12} md={3} className="mb-4 mb-md-0 d-flex justify-content-center align-items-center">
          {/* Logo with responsive size */}
          <img 
            src="/images/logo.png" 
            alt="TDITS Logo" 
            className="footer-logo" 
          />
        </Col>
        <Col xs={12} md={3} className="mb-4 mb-md-0">
          <h5 className="mb-3">Quick Links</h5>
          <ul className="list-unstyled">
            <li className="mb-2"><Link to="/" className="text-decoration-none text-dark">Home</Link></li>
            <li className="mb-2"><Link to="/about" className="text-decoration-none text-dark">About</Link></li>
            <li className="mb-2"><Link to="/gallery" className="text-decoration-none text-dark">Gallery</Link></li>
            <li className="mb-2"><Link to="/events" className="text-decoration-none text-dark">Events</Link></li>
            <li className="mb-2"><Link to="/membership" className="text-decoration-none text-dark">Membership</Link></li>
            <li className="mb-2"><Link to="/contact" className="text-decoration-none text-dark">Contact</Link></li>
          </ul>
        </Col>
        <Col xs={12} md={3} className="mb-4 mb-md-0">
          <h5 className="mb-3">Follow Us</h5>
          <div className="d-flex text-center  justify-content-lg-start gap-3 social-icons">
            <a href="https://facebook.com" className="text-primary fs-5" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" className="text-primary fs-5" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" className="text-primary fs-5" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </Col>
        <Col xs={12} md={3} className="mb-4 mb-md-0">
          <h5 className="mb-3">Contact Us</h5>
          <ul className="list-unstyled">
            <li className="mb-2">
              <FaMapMarkerAlt className="me-2 text-primary" />
              123 Main St, Tiruvannamalai, TN
            </li>
            <li className="mb-2">
              <FaEnvelope className="me-2 text-primary" />
              info@tdits.com
            </li>
            <li className="mb-2">
              <FaPhone className="me-2 text-primary" />
              +91 1234567890
            </li>
          </ul>
        </Col>
      </Row>

      {/* Line separator */}
      <Row>
        <Col className="border-top pt-3">
          <p className="footer-text mb-0">
            &copy; 2023 TDITS. All rights reserved. | Developed by <a href="https://jkglobalitsolution.com" target="_blank" rel="noopener noreferrer">JK Global IT Solutions</a>.
          </p>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
