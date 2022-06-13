import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./About.css"

const About = () => {
  return (
    <section id="about" className='about'>
        <Container className="aboutContainer">
            <div className='section-title'>
              <h2>About</h2>
              <h3>Learn More <span>About Us</span></h3>
              <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
            </div>
            <Row className="content">
              <Col lg={6}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <ul>
                  <li>
                    <i className="fa-solid fa-check-double"></i>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </li>
                  <li>
                    <i className="fa-solid fa-check-double"></i>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                  </li>
                  <li>
                    <i className="fa-solid fa-check-double"></i>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </li>
                </ul>
              </Col>
              <Col lg={6} className="pt-4 pt-lg-0">
                <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <a href="#" className='btn-learn-more'>Learn More</a>
              </Col>
            </Row>
        </Container>
    </section>
  )
}

export default About