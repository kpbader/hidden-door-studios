import './home.css';
import lights from "../../assets/images/Video Of Bokeh Lights.mp4";
import equipOne from "../../assets/images/equipment-1.jpg";
import soloGuitar from "../../assets/images/solo-guitar.jpg";
import sBooth from "../../assets/images/sound-booth.jpg";
import vertPodcast from "../../assets/images/podcast-vert.jpg";
import pinkSunset from "../../assets/images/pink-sunset.jpg";
// import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { useState, useRef } from 'react';

function Home() {

    const form = useRef();
    const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = contactForm;
    const [errorMessage, setErrorMessage] = useState('');

    const serviceCards = [
        {
            name: 'Mastering',
            img: sBooth,
            // link: '/Mastering'
        },
        {
            name: 'Mixing',
            img: equipOne,
            // link: '/Mixing'
        },
        {
            name: 'Instrumentals',
            img: soloGuitar,
            // link: '/Instrumentals'
        },
        {
            name: 'Podcasting',
            img: vertPodcast,
            // link: '/Podcasting'
        },
        {
            name: 'Marketing',
            img: pinkSunset,
            // link: '/Marketing'
        }
    ];

    return (
        <section>
            <div id="splashVideo">
                <video src={lights} muted loop playsInline autoPlay/>
                <Fade up>
                    <h1 id="home-splash-text">Lay down some sound</h1>
                </Fade>
            </div>
            <div id="our-services">
                <Fade bottom>
                    <h3>Our Services</h3>
                </Fade>

            </div>
            <div id="services-card-group">
                <Fade bottom>
                    <Row id="services-row">
                        {serviceCards.map((service, i) => {
                            return (
                                <Col className="card-column">
                                    <Card className="service-card">
                                        <Card.Img src={service.img} alt="Card image" id="IMG" />
                                        <Card.ImgOverlay>
                                            <Card.Title className="service-card-text">{service.name}</Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </Fade>
            </div>

            <div id="home-bottom-contact">
                <Fade left>
                    <form id="hp-contact-form">
                        <h2>Reach Out</h2>
                        <div id="form-slot-1">
                            <label htmlFor="name">Name</label>
                            <input type="text" defaultValue={name} name="name" />
                        </div>
                        <div id="form-slot-2">
                            <label htmlFor="email">Email</label>
                            <input type="email" defaultValue={email} name="email" />
                        </div>
                        <div id="form-slot-3">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" defaultValue={message} rows="10" cols="45" />
                        </div>
                        <button type="submit" className="contact-submit-btn">Submit</button>
                    </form>
                </Fade>
                <Fade right>
                    <div id="google-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.437250098534!2d-118.35691804914127!3d34.083937480502065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bed3abba7fdb%3A0x3b9fba3f4044dc43!2s7561%20Melrose%20Ave%2C%20Los%20Angeles%2C%20CA%2090046!5e0!3m2!1sen!2sus!4v1666299489629!5m2!1sen!2sus" title="map" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </Fade>
            </div>
        </section>
    );
}

export default Home;