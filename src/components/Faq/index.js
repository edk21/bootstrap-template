import React from 'react'
import { Container, Accordion, Stack } from 'react-bootstrap'
import ComponentHeader from '../ComponentHeader'
import { accordionItems } from './accordionItems'
import "./Faq.css"

const title= "F.a.q"
const header= "Frequently Asked"
const headerSpan= "Questions"
const text = ""

const Faq = () => {
  return (
    <section id="faq" className="faq">
        <Container className="faqContainer">
            <ComponentHeader title={title} header={header} headerSpan={headerSpan} text={text} />
            <div className="faq-list">
              {
                accordionItems.map((item, index) => (
                  <Accordion key={index}>
                    <Accordion.Item eventKey={index}>
                      <Accordion.Header>{item.question}</Accordion.Header>
                      <Accordion.Body>{item.answer}</Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                ))
              }
            </div>
        </Container>
    </section>
  )
}

export default Faq