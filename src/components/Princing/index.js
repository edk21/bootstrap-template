import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ComponentHeader from '../ComponentHeader'
import "./Pricing.css"

const title= "Pricing"
const header= "Our Competing"
const headerSpan= "Prices"
const text = "Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem."

const Pricing = () => {
  return (
    <section id="pricing" className="pricing">
        <Container className="pricingContainer">
            <ComponentHeader title={title} header={header} headerSpan={headerSpan} text={text} />
            <Row>
              <Col lg={4} md={6}>
                <div className="box">
                  <h3>Free</h3>
                  <h4><sup>$</sup>0<span>/ month</span></h4>
                  <ul>
                    <li>Aida dere</li>
                    <li>Nec feugiat nisl</li>
                    <li>Nulla at volutpat dola</li>
                    <li className='na'>Phareta massa</li>
                    <li className='na'>Massa ultricies mi</li>
                  </ul>
                  <div className="btn-wrap">
                    <a href="#" className='btn-buy'>Buy Now</a>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6} className="mt-4 mt-md-0">
                <div className="box recommended border-danger">
                  <span className="recommended-badge">Recommended</span>
                  <h3>Business</h3>
                  <h4><sup>$</sup>19<span>/ month</span></h4>
                  <ul>
                    <li>Aida dere</li>
                    <li>Nec feugiat nisl</li>
                    <li>Nulla at volutpat dola</li>
                    <li>Phareta massa</li>
                    <li className='na'>Massa ultricies mi</li>
                  </ul>
                  <div className="btn-wrap">
                    <a href="#" className='btn-buy'>Buy Now</a>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6} className="mt-4 mt-lg-0">
                <div className="box">
                  <h3>Developer</h3>
                  <h4><sup>$</sup>29<span>/ month</span></h4>
                  <ul>
                    <li>Aida dere</li>
                    <li>Nec feugiat nisl</li>
                    <li>Nulla at volutpat dola</li>
                    <li>Phareta massa</li>
                    <li>Massa ultricies mi</li>
                  </ul>
                  <div className="btn-wrap">
                    <a href="#" className='btn-buy'>Buy Now</a>
                  </div>
                </div>
              </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Pricing