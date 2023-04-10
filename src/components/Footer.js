import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mt-auto fixed-bottom">
      <Container fluid className="bg-dark text-white">
        <Row>
          <Col sm={12} md={4} className="text-center p-3">
            <h5>Our Store</h5>
            <p>123 Main Street<br />Anytown, USA 12345<br />555-555-5555</p>
          </Col>
          <Col sm={12} md={4} className="text-center p-3">
            <h5>Follow Us</h5>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              </li>
            </ul>
          </Col>
          <Col sm={12} md={4} className="text-center p-3">
            <h5>Newsletter</h5>
            <p>Sign up for our newsletter to receive the latest news and special offers.</p>
            <form>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
