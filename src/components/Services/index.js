import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./Services.css"

const servicesItems = [
    {
        icon: 'fa-solid fa-basketball',
        title: 'Team Player',
        text: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi'
    },
    {
        icon: 'fa-solid fa-file-lines',
        title: 'Project Management',
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore'
    },
    {
        icon: 'fa-solid fa-gauge-high',
        title: 'Time Management',
        text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia'
    },
    {
        icon: 'fa-solid fa-earth-africa',
        title: 'Woldwide Reach',
        text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis'
    },
]

const Services = () => {
    return (
        <section id="services">
            <Container className="servicesContainer">
                <div className="section-title">
                    <h2>services</h2>
                    <h3>We Do Offer Awesome <span>Services</span></h3>
                    <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                </div>
                <Row>
                    {
                        servicesItems.map((item, index) => (
                            <Col key={index} md={6} lg={3} className="d-flex align-items-stretch mb-5 mb-lg-0">
                                <div className="icon-box">
                                    <div className="icon">
                                        <i className={item.icon}></i>
                                    </div>
                                    <h4 className="title">{item.title}</h4>
                                    <p className="description">{item.text}</p>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    )
}

export default Services
