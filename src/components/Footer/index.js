import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./Footer.css"

const Footer = () => {
  return (
    <footer id="footer">
      <div className='footer-top'>
        <Container fluid >
          <Row>
            <Col lg={3} md={6} className="footer-contact">
              <h3>Tempo</h3>
              <p>
                A125 Leuven Straat <br /> 
                Leuven, Belgium <br /><br /> 
                <strong>Phone</strong>+32(0)224 558 950 <br /> 
                <strong>Email</strong> info@example.com <br />
              </p>
            </Col>
            <Col lg={2} md={6} className="footer-links">
              <h4>Usefull Links</h4>
              <ul>
                <li>
                  <i className="fa-solid fa-angle-right"></i>
                  <a href="/">Home</a>
                </li>
                <li>
                  <i className="fa-solid fa-angle-right"></i>
                  <a href="#about">About</a>
                </li>
                <li>
                  <i className="fa-solid fa-angle-right"></i>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <i className="fa-solid fa-angle-right"></i>
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <i className="fa-solid fa-angle-right"></i>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </Col>
            <Col lg={3} md={6} className="footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="fa-solid fa-angle-right"></i>
                  <a href="#">Web Design</a>
                </li>
                <li>
                  <i className="fa-solid fa-angle-right"></i>
                  <a href="#">Web Developement</a>
                </li>
                <li>
                  <i className="fa-solid fa-angle-right"></i>
                  <a href="#">Product Management</a>
                </li>
                <li>
                  <i className="fa-solid fa-angle-right"></i>
                  <a href="#">Marketing</a>
                </li>
                <li>
                  <i className="fa-solid fa-angle-right"></i>
                  <a href="#">Graphic Design</a>
                </li>
              </ul>
            </Col>
            <Col lg={4} md={6} className="footer-newsletter"></Col>
          </Row>
        </Container>
      </div>
      <div></div>
    </footer>
  )
}

export default Footer