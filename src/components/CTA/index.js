import React from 'react'
import { Container } from 'react-bootstrap'
import "./Cta.css"

const Cta = () => {
  return (
    <section id="cta" className="cta">
        <Container className="ctaContainer">
          <div className="text-center">
            <h3>Call To Action</h3>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a href="#" className="cta-btn">Call to action</a>
          </div>
        </Container>
    </section>
  )
}

export default Cta