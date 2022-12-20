import './home.css';
import lights from "../../assets/images/Video Of Bokeh Lights.mp4";
import equipOne from "../../assets/images/equipment-1.jpg";
import soloGuitar from "../../assets/images/solo-guitar.jpg";
import sBooth from "../../assets/images/sound-booth.jpg";
import vertPodcast from "../../assets/images/podcast-vert.jpg";
import pinkSunset from "../../assets/images/pink-sunset.jpg";
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import React from 'react';

function Home() {

    const scrollToForm = () => {
        window.scrollTo(0, 525)
    };

    const serviceCards = [
        {
            name: 'Mastering',
            img: sBooth,
            
        },
        {
            name: 'Mixing',
            img: equipOne,
        
        },
        {
            name: 'Instrumentals',
            img: soloGuitar,
            
        },
        {
            name: 'Podcasting',
            img: vertPodcast,
            
        },
        {
            name: 'Marketing',
            img: pinkSunset,
            
        }
    ];

    return (
        <section>
            <div id="splashVideo">
                <video src={lights} muted loop playsInline autoPlay />
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
            <div id="cta-section">
                <h3>Ready to go? Request a booking!</h3>
                <Link to="/Book" className="tab">
                    <Button id="nav-book-btn" onClick={scrollToForm}>Book</Button>
                </Link>
            </div>
        </section>
    );
}

export default Home;