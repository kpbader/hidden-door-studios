import './header.css';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { useLocation } from "react-router";

function Header() {
    return (
        <section id="topBar">
            <div id="groupName">
                <a data-testid="link" href="/hidden-door-studios">
                    Hidden Door Studios
                </a>
            </div>

            <Nav >
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/hidden-door-studios" className="tab">Home</Link>
                    </Nav.Link>
                </Nav.Item>
                <NavDropdown title="Services" className="tab">
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

                <Nav.Item>
                    <Nav.Link>
                        <Link to="/About" className="tab">About</Link>
                    </Nav.Link>
                </Nav.Item>
                     <Nav.Link>
                        <Link to="/Gallery" className="tab">Gallery</Link>
                    </Nav.Link>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/Contact" className="tab">Contact</Link>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </section>
    )
}

export default Header;