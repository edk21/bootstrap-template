import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./Features.css"

const featuresItems = [
  {
    icon: "fa-solid fa-store",
    title: "Lorem Ipsum",
    color: "#ffbb2c"
  },
  {
    icon: "fa-solid fa-chart-column",
    title: "Dolor Sitema",
    color: "#5578ff"
  },
  {
    icon: "fa-solid fa-calendar-minus",
    title: "Sed perspiciatis",
    color: "#e80378"
  },
  {
    icon: "fa-solid fa-paint-roller",
    title: "Magni Dolores",
    color: "#e361ff"
  },
  {
    icon: "fa-solid fa-database",
    title: "Nemo Enim",
    color: "#47aeff"
  },
  {
    icon: "fa-light fa-circle-dot",
    title: "Eiusmod Tempor",
    color: "#ffa76e"
  },
  {
    icon: "fa-solid fa-file-lines",
    title: "Midela Teren",
    color: "#11dbcf"
  },
  {
    icon: "fa-solid fa-tags",
    title: "Pira Neve",
    color: "#4233ff"
  },
  {
    icon: "fa-solid fa-anchor",
    title: "Dirada Pack",
    color: "#b2904f"
  },
  {
    icon: "fa-solid fa-spinner",
    title: "Moton Ideal",
    color: "#b20969"
  },
  {
    icon: "fa-solid fa-tower-cell",
    title: "Verdo Park",
    color: "#ff5828"
  },
  {
    icon: "fa-solid fa-fingerprint",
    title: "Flavor Nivelanda",
    color: "#29cc61"
  },
] 

const Features = () => {
  return (
    <section id="features">
        <Container className="featuresContainer">
            <Row>
              {
                featuresItems.map((item, index) => (
                  <Col key={index} lg={3} md={4} className="featureItem mt-4">
                    <div className="icons-box">
                      <i className={item.icon} style={{color: item.color}}></i>
                      <h3>{item.title}</h3>
                    </div>
                  </Col>
                ))
              }
            </Row>
        </Container>
    </section>
  )
}

export default Features