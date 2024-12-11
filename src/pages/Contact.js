import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    email: '',
    message: '',
    reason: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare email data
    const templateParams = {
      name: formData.name,
      mobileNumber: formData.mobileNumber,
      email: formData.email,
      message: formData.message,
      reason: formData.reason,
    };

    // Send email using EmailJS
    emailjs
      .send(
        'service_xbpvgmc', // Replace with your EmailJS service ID
        'template_0k9dbed', // Replace with your EmailJS template ID
        templateParams,
        'bqlWNmTGQqntLsD5l' // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log('Email sent successfully!', response);
          alert('Your message has been sent successfully!');
          setFormData({ name: '', mobileNumber: '', email: '', message: '', reason: '' });
        },
        (error) => {
          console.error('Error sending email:', error);
          alert('There was an error sending your message. Please try again.');
        }
      );

    // Create the WhatsApp message with the form data
    const message = `*TDITS Contact Form*\n\nName: ${formData.name}\nMobile: ${formData.mobileNumber}\nEmail: ${formData.email}\nMessage: ${formData.message}\nReason: ${formData.reason}`;
    
    // WhatsApp API URL with the pre-filled message
    const whatsappUrl = `https://wa.me/7806844491?text=${encodeURIComponent(message)}`;

    // Redirect to WhatsApp with the pre-filled message
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <div
        style={{
          backgroundImage: 'url(/images/banner-without-content.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '100px 0',
          textAlign: 'center',
        }}
      >
        <h1 style={{ color: 'white', margin: 0 }}>Contact Us</h1>
      </div>

      <Container className="mb-5">
        <h1 className="text-center my-5">Contact Form</h1>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="shadow-lg">
              <Card.Body className="p-4">
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control
                          type="tel"
                          name="mobileNumber"
                          value={formData.mobileNumber}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Why are you writing?</Form.Label>
                    <Form.Select
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a reason</option>
                      <option value="general">General inquiry</option>
                      <option value="membership">Membership inquiry</option>
                    </Form.Select>
                  </Form.Group>

                  <div className="text-center">
                    <Button variant="primary" type="submit" size="lg" className="px-5">
                      Send Message
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
