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

function Home() {

    const serviceCards = [
        {
            name: 'Mastering',
            img: sBooth,
            link: '/Mastering'
        },
        {
            name: 'Mixing',
            img: equipOne,
            link: '/Mixing'
        },
        {
            name: 'Instrumentals',
            img: soloGuitar,
            link: '/Instrumentals'
        },
        {
            name: 'Podcasting',
            img: vertPodcast,
            link: '/Podcasting'
        },
        {
            name: 'Marketing',
            img: pinkSunset,
            link: '/Marketing'
        }
    ];

    return (
        <section>
            <div id="splashVideo">
                <video autoPlay muted loop >
                    <source src={lights} type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
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
                                            <Link className="service-card-text" to={service.link}>{service.name}</Link>
                                        </Card.ImgOverlay>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </Fade>
            </div>
        </section>
    );
}

export default Home;