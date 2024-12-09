import React from 'react';
import { Container } from 'react-bootstrap';
import Breadcrumb from '../components/Breadcrumb';

function About() {
  return (
    <Container>
      <Breadcrumb />
      <h1 className="mt-4 mb-4">About TDITS</h1>
      <p>TDITS is a club for business association and computer enthusiasts in Tiruvannamalai. We aim to promote technological growth and business networking in our community.</p>
    </Container>
  );
}

export default About;

