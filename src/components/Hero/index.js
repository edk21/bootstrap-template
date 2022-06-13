import React from 'react'
import { Container } from 'react-bootstrap'
import "./Hero.css"

const Hero = () => {
  return (
    <section className='heroSection' id="hero">
        <Container fluid className="heroContainer">
            <h3>Welcome to <strong>Home</strong></h3>
            <h1>We're creative agency</h1>
            <h2>We are team of talented designers making websites with Bootstrap</h2>
            <a href="#about">Get Started</a>
        </Container>
    </section>
  )
}

export default Hero