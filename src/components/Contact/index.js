import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import ComponentHeader from '../ComponentHeader'
import "./Contact.css"

const title = "Contact"
const header = "Contact"
const headerSpan = "Us"
const text = "Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem."

const Contact = () => {
  return (
    <section id="section" className="contact">
        <Container className="contactContainer">
          <ComponentHeader title={title} header={header} headerSpan={headerSpan} text={text} />
          <Row className="mt-5">
            <Col lg={4}>
              <div className="info">
                <div className="address">
                  <i className="fa-solid fa-location-dot"></i>
                  <h4>Location</h4>
                  <p>A125 Leuven Straat, Leuven Belgium</p>
                </div>
                <div className="email">
                  <i className="fa-regular fa-envelope"></i>
                  <h4>Email</h4>
                  <p>info@example.com</p>
                </div>
                <div className="phone">
                  <i className="fa-solid fa-mobile-screen"></i>
                  <h4>Call</h4>
                  <p>+32 (0) 224 558 950</p>
                </div>
              </div>
            </Col>
            <Col lg={8} className="mt-5 mt-lg-0">
              <Form className="email-form">
                <Row>
                  <Col md={6} className="form-group">
                    <input type="text" className="form-control" placeholder="Name" required />
                  </Col>
                  <Col md={6} className="form-group mt-3 mt-md-0">
                    <input type="email" className="form-control" placeholder="Email" required />
                  </Col>
                </Row>
                <div className="form-group mt-3">
                  <input type="text" className="form-control" placeholder="Subject" required />
                </div>
                <div className="form-group mt-3">
                  <textarea className="form-control" rows="5" placeholder="Message" required></textarea>
                </div>
                <div className="text-center my-3">
                  <button>Send Message</button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
    </section>
  )
}

export default Contact