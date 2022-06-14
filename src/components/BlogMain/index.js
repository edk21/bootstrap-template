import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { blogItems } from './blogItems'
import "./BlogMain.css"

const BlogMain = () => {
  return (
    <section id="blog" className="blog">
        <Container>
          <Row>
            <Col lg={8} entries>
              {
                blogItems.map((item) => (
                  <article key={item.id} className="entry">
                    <div className="entry-img">
                      <img src={item.image} alt="" class="img-fluid" />
                    </div>
                    <h2 className="entry-title">
                      <a href="#">{item.title}</a>
                    </h2>
                    <div className="entry-meta">
                      <ul>
                        <li className="d-flex align-items-center">
                          <i className="fa-solid fa-user"></i>
                          <a href="#">{item.name}</a>
                        </li>
                        <li className="d-flex align-items-center">
                          <i className="fa-regular fa-clock"></i>
                          <a href="#"><time>{item.date}</time></a>
                        </li>
                        <li className="d-flex align-items-center">
                          <i className="fa-regular fa-comment-dots"></i>
                          <a href="#">{item.comments} Comments</a>
                        </li>
                      </ul>
                    </div>
                    <div className="entry-content">
                      <p>{item.text} </p>
                      <div className="read-more">
                        <a href="#">Read More</a>
                      </div>
                    </div>
                  </article>
                ))
              }
            </Col>
            <Col lg={4}>
              <div className="sidebar">
                <h3 className="sidebar-title">Search</h3>
                <div className="sidebar-item search-form">
                  <Form className="form">
                    <Form.Control type="text" placeholder="Search..." />
                    <button>
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </Form>
                </div>
                <h3 className="sidebar-title">Categories</h3>
                <div className="sidebar-item categories">
                  <ul>
                    <li>
                      <a href="#" >General <span>(25)</span></a>
                    </li>
                    <li>
                    <a href="#" >Lifestyle <span>(12)</span></a>
                    </li>
                    <li>
                    <a href="#" >Travel <span>(5)</span></a>
                    </li>
                    <li>
                    <a href="#" >Design <span>(22)</span></a>
                    </li>
                    <li>
                    <a href="#" >Creative <span>(8)</span></a>
                    </li>
                    <li>
                    <a href="#" >Education <span>(14)</span></a>
                    </li>
                  </ul>
                </div>
                <h3 className="sidebar-title">Recent Posts</h3>
                <div className="sidebar-item recent-posts">
                  <div className="post-item clearfix">
                  <img src="https://bootstrapmade.com/demo/templates/Tempo/assets/img/blog/blog-recent-1.jpg" alt="" />
                  <h4>Nihil blanditiis at in nihil autem</h4>
                  <time>Jan 1, 2022</time>
                  </div>
                  <div className="post-item clearfix">
                    <img src="https://bootstrapmade.com/demo/templates/Tempo/assets/img/blog/blog-recent-2.jpg" alt="" />
                  <h4>Quidem autem et impedit</h4>
                  <time>March 1, 2022</time>
                  </div>
                  <div className="post-item clearfix">
                    <img src="https://bootstrapmade.com/demo/templates/Tempo/assets/img/blog/blog-recent-3.jpg" alt="" />
                  <h4>Id quia et et ut maxime similique occaecati ut</h4>
                  <time>April 1, 2022</time>
                  </div>
                  <div className="post-item clearfix">
                    <img src="https://bootstrapmade.com/demo/templates/Tempo/assets/img/blog/blog-recent-4.jpg" alt="" />
                  <h4>Laborum corporis quo dara net para</h4>
                  <time>Jan 1, 2022</time>
                  </div>
                  <div className="post-item clearfix">
                    <img src="https://bootstrapmade.com/demo/templates/Tempo/assets/img/blog/blog-recent-5.jpg" alt="" />
                  <h4>Et dolores corrupti quae illo quod dolor</h4>
                  <time>Jan 1, 2022</time>
                  </div>
                </div>
                <h3 className="sidabar-title">Tags</h3>
                <div className="sidebar-itme tags">
                  <ul>
                    <li>
                      <a href="#" >App</a>
                    </li>
                    <li>
                      <a href="#" >IT</a>
                    </li>
                    <li>
                      <a href="#" >Business</a>
                    </li>
                    <li>
                      <a href="#" >Mac</a>
                    </li>
                    <li>
                      <a href="#" >Design</a>
                    </li>
                    <li>
                      <a href="#" >Office</a>
                    </li>
                    <li>
                      <a href="#" >Creative</a>
                    </li>
                    <li>
                      <a href="#" >Studio</a>
                    </li>
                    <li>
                      <a href="#" >Smart</a>
                    </li>
                    <li>
                      <a href="#" >Tips</a>
                    </li>
                    <li>
                      <a href="#" >Marketing</a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
    </section>
  )
}

export default BlogMain