import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ComponentHeader from '../ComponentHeader'
import { teamItems } from './teamItems'
import "./Team.css"

const title= "Team"
const header= "Our Hardworking"
const headerspan= "Team"
const text = "Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem."

const Team = () => {
  return (
    <section id="team">
        <Container className="teamContainer">
          <ComponentHeader title={title} header={header} headerSpan={headerspan} text={text} />
          <Row>
            {
              teamItems.map(item => (
                <Col key={item.id} lg={3} md={6} className="d-flex align-items-stretch">
                  <div className="member">
                    <div className="member-img">
                      <img className='img-fluid' src={item.image} alt="" />
                      <div className="social">
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>{item.name}</h4>
                      <span>{item.position}</span>
                    </div>
                  </div>
                </Col>
              ))
            }            
          </Row>
        </Container>
    </section>
  )
}

export default Team