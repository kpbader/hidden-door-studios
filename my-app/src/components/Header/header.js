import './header.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { useLocation } from "react-router";

function Header() {
    return (
        <section id="topBar">
            <div id="groupName">
                <a data-testid="link" href="/">
                    Hidden Door Studio
                </a>
            </div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link>
                                <Link to="/">Home</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/Gallery">Gallery</Link>
                            </Nav.Link>

                            <NavDropdown title="Services" id="basic-nav-dropdown">
                                <NavDropdown.Item>
                                    <Link to="/Mastering">Mastering</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/Mixing">Mixing</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/Instrumentals">Instrumentals</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/Podcasting">Podcasting</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/Marketing">Marketing</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* <div id="navTabs">
                <ul id="tabList">
                    <Link to="/" className="tabTitle">Home</Link>
                    <Link to="/Services" className="tabTitle">Services</Link>
                    <Link to="/Gallery" className="tabTitle">Gallery</Link>
                    <Link to="/About" className="tabTitle">About</Link>
                    <Link to="/Contact" className="tabTitle">Contact</Link>
                </ul>
            </div> */}
        </section>
    )
}

export default Header;