import React from 'react'
import { Container } from 'react-bootstrap'
import "./Bread.css"

const Breadcrumbs = () => {
  return (
    <section className="bread">
        <Container>
            <ol>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    Blog
                </li>
            </ol>
            <h2>Blog</h2>
        </Container>
    </section>
  )
}

export default Breadcrumbs