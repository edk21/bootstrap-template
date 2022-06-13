import React,{ useState } from 'react'
import "./Navbar.css"
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

const NavBar = () => {
    const [caret, setCaret] = useState(false);

    const handleCaret = () => {
        setCaret(!caret);
    }
    
  return (
    <header id="header" className="">
        <Navbar expand="lg" className="">
            <Container fluid className='mx-5 d-flex align-items-center justify-content-between'>
                <Navbar.Brand href="/" className="text-white"><h1>My<span className="text-danger">Logo</span></h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar"/>
                <Navbar.Collapse id="navbar" className="justify-content-end">
                    <Nav className=''>
                        <Nav.Link href="/" className="px-4 text-white"><p className='link active'>Home</p></Nav.Link>
                        <Nav.Link href="#about" className="px-4 text-white navlink"><p className='link'>About</p></Nav.Link>
                        <Nav.Link href="#services" className="px-4 text-white"><p className='link'>Services</p></Nav.Link>
                        <Nav.Link href="#portfolio" className="px-4 text-white"><p className='link'>Portfolio</p></Nav.Link>
                        <Nav.Link href="#team" className="px-4 text-white"><p className='link'>Team</p></Nav.Link>
                        <Nav.Link href="/blog" className="px-4 text-white"><p className='link'>Blog</p></Nav.Link>
                        <NavDropdown onClick={()=> handleCaret()} title={<p className="link">Projects <i className={caret ? "fa-solid fa-caret-down" : "fa-solid fa-caret-right"}></i></p>}id="basic-nav-dropdown" className="px-4 text-white">
                            <NavDropdown.Item href="#action/3.1">Project 1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another Project</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something Else</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated Project</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#contact" className="px-4 text-white"><p className='link'>Contact</p></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default NavBar