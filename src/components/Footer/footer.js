import './footer.css';
import hdsFooterLogo from '../../assets/images/hds-logo.png';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import React from 'react';

function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const scrollToForm = () => {
        window.scrollTo(0, 525)
    };

    return (
        <section id="footer">
            <img src={hdsFooterLogo} alt="logo" />
            <div id="footer-menu">
                <Link to="/hidden-door-studios" onClick={scrollToTop}>Home</Link>
                <Link to="/About" onClick={scrollToTop}>About</Link>
                <Link to="/Gallery" onClick={scrollToTop}>Gallery</Link>
                <Link to="/Contact" onClick={scrollToTop}>Contact</Link>
                <Link to="/Book" className="tab" onClick={scrollToForm}>
                    <Button id="footer-book-btn">Book</Button>
                </Link>
            </div>
        </section>
    )
};

export default Footer;