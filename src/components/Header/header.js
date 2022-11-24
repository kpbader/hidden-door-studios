import './header.css';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {

    // offCanvas 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const onClick = () => setShow(true);

    return (
        <section id="topBar">
            <header>
                The Hidden Door Studio
            </header>

            <Nav id="main-nav-links">

                <Nav.Link>
                    <Link to="/hidden-door-studios" className="tab">Home</Link>
                </Nav.Link>
                {/* <NavDropdown title="Services" className="tab">
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
                </NavDropdown> */}
                <Nav.Link>
                    <Link to="/About" className="tab">About</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/Gallery" className="tab">Gallery</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/Contact" className="tab">Contact</Link>
                </Nav.Link>
                <Link to="/Book" className="tab">
                    <Button id="nav-book-btn">Book</Button>
                </Link>
            </Nav>


            <Button id="hamburger-btn" className="openbtn" onClick={handleShow}>
                ☰
            </Button>


            <Offcanvas placement="end" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton />
                <Offcanvas.Body>
                    <section id="nav-tabs">
                        <ul className="tabpanel">

                            <Link to="/hidden-door-studios" className="hamburger-tab ">Home</Link>
                            {/* <NavDropdown title="Services" className="hamburger-tab ">
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
                            </NavDropdown> */}
                            <Link to="/About" className="hamburger-tab ">About</Link>
                            <Link to="/Gallery" className="hamburger-tab ">Gallery</Link>
                            <Link to="/Contact" className="hamburger-tab ">Contact</Link>
                            <Link to="/Contact" className="tab">
                                <Button>Book</Button>
                            </Link>

                        </ul>
                    </section>

                </Offcanvas.Body>
            </Offcanvas >

        </section>
    )
}

export default Header;