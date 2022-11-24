import './about.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import soundboardOne from "../../assets/images/IMG_2903.jpeg";
import studioOne from "../../assets/images/IMG_2900.jpeg";
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { FaMicrophoneAlt, FaSlidersH, FaVolumeUp, FaMusic, FaLaptop } from 'react-icons/fa';

function About() {

    const form = useRef();
    const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = contactForm;
    const [errorMessage, setErrorMessage] = useState('');

    return (
        <section id="about-page">
            <div id="about-the-studio">
                <Fade bottom>
                    <h2>About</h2>
                </Fade>
                <div id="about-div-one">
                    <Fade left>
                        <div id="about-card">
                            <Card>
                                <Card.Body>
                                    <Card.Text>
                                        The studio can be used in various ways, such as recording, mixing, podcasting, production, or songwriting. You may reserve the studio with one of our in-house engineers or with your own engineer/producer.
                                    </Card.Text>
                                    <Card.Text>
                                        We offer hourly and daily sessions starting at $65/hr as well as long-term monthly rentals.
                                    </Card.Text>
                                    <Link to="/Book" className="tab">
                                        <Button>Book</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </Fade>
                    <Fade right>
                        <img src={soundboardOne} alt="Soundboard in studio" />
                    </Fade>
                </div>
                <div id="about-div-two">
                    <Fade left>
                        <img src={studioOne} alt="Soundboard in studio" />
                    </Fade>
                    <Fade right>
                        <Card id="about-card-2">
                            <Card.Body>
                                <Card.Text>
                                    Our attentive staff along with our incredible team of recording engineers will ensure a smooth, hassle-free session. Our studio provides both inspiration and a comfortable space for you and your collaborators to create.
                                </Card.Text>
                                <Link to="/Book" className="tab">
                                    <Button>Book</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Fade>
                </div>
            </div>

            <div id="about-services">
                <Fade down>
                    <h2>Services We Provide</h2>
                </Fade>
                <Fade up>
                    <div id="about-services-cards">
                        <Card>
                            <FaVolumeUp className="about-service-icon" />

                            <Card.Title>
                                Mastering
                            </Card.Title>

                        </Card>
                        <Card>
                            <FaSlidersH className="about-service-icon" />

                            <Card.Title>
                                Mixing
                            </Card.Title>

                        </Card>
                        <Card>
                            <FaMicrophoneAlt className="about-service-icon" />

                            <Card.Title>
                                Podcasting
                            </Card.Title>

                        </Card>
                        <Card>
                            <FaMusic className="about-service-icon" />

                            <Card.Title>
                                Instrumentals
                            </Card.Title>

                        </Card>
                        <Card>
                            <FaLaptop className="about-service-icon" />

                            <Card.Title>
                                Marketing
                            </Card.Title>

                        </Card>
                    </div>
                </Fade>
            </div>

            <div id="about-bottom-contact">
                <Fade left>
                    <form id="about-contact-form">
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
    )

};

export default About;