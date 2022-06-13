import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import "./Footer.css"

const Footer = () => {
  return (
    <footer id="footer" className='bg-white'>
      <div className='footer-top'>
        <Container >
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
            <Col lg={4} md={6} className="footer-newsletter">
              <h4>Join Our Newsletter</h4>
              <p className='mb-2 mt-0'>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
              <Form className='form'>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Control type="sumbit" value="Subscribe" />
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='d-md-flex py-4 bg-light'>
        <Container className='d-md-flex py-4' >
        <div className='me-auto text-center text-md-start'>
          <div className="copyright">
            <i className="fa-solid fa-copyright pr-2"></i>
            Copyright
            <strong className='px-2'><span>Tempo</span></strong>
            All right reserved.
          </div>
          <div className="credits">
            Designed by <a href="#">Ed K.</a>
          </div>
        </div>
        <div className='social-links text-center text-md-right pt-3 pt-md-0'>
          <a href="#">
              <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="#">
              <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#">
              <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#">
              <i className="fa-brands fa-google"></i>
          </a>
          <a href="#">
              <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer