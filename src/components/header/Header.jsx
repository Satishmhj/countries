import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <>
      <Navbar bg="primary" expand="lg">
        <Container >
          <div>
            <img src='data:image/png;base64,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'
              style={{ width: "50px", borderRadius: "15px", paddingRight: "5px" }} />
            <Navbar.Brand href="#home">
              <b>
                Rest Countries
              </b>
            </Navbar.Brand>

          </div>

          <div className='d-flex flex-row-reverse'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
              </Nav>
            </Navbar.Collapse>

          </div>

        </Container>
      </Navbar>
    </>
  )
}

export default Header