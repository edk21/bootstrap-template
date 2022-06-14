import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ComponentHeader from '../ComponentHeader'
import "./Portfolio.css"

import { portfolioItems } from './portfolioItems'

const title = "Portfolio"
const header = "Check Our"
const headerSpan = "Portfolio"
const text = "Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem."

const Portfolio = () => {
  return (
    <section id="portfolio">
        <Container className="portfolioContainer">
          <ComponentHeader title={title} header={header} headerSpan={headerSpan} text={text} />
          <Row>
            <Col lg={12} className="d-flex justify-content-center">
              <ul id="portfolio-filters">
                <li data-filter="*" className='filter-active'>All</li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-card">Card</li>
                <li data-filter=".filter-web">Web</li>
              </ul>
            </Col>
          </Row>
          <Row className='portfolio-container'>
            {
              portfolioItems.map(item => (
                <Col key={item.id} lg={4} md={6} className="portfolio-item filter-app" style={{ position: "relative" }}>
                  <img className='img-fluid' src={item.image} alt="" />
                  <div className="portfolio-info">
                    <h4>{item.title}</h4>
                    <p>{item.category}</p>
                    <a href="#" data-gallery="portfolioGallery" className='portfolio-lightbox preview-link' title="App 1">
                      <i className="fa-solid fa-plus"></i>
                    </a>
                    <a href="#" className='details-link' title="More Details">
                      <i className="fa-solid fa-link"></i>
                    </a>
                  </div>
                </Col>
              ))
            }
          </Row>
        </Container>
    </section>
  )
}

export default Portfolio