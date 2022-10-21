import './about.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import soundboardOne from "../../assets/images/sound-board-1.jpg";
import studioOne from "../../assets/images/studio-1.jpg";
import Fade from 'react-reveal/Fade';


function About() {
    return (
        <section id="about-page">
            <div id="about-ph">
                <Fade bottom>
                    <h2 id="about-ph-text">About Us</h2>
                </Fade>
            </div>
            <div id="about-div-one">
                <Fade left>
                    <Card id="about-card">
                        <Card.Body>
                            <Card.Text>
                                The studio can be used in various ways, such as recording, mixing, podcasting, production, or songwriting. You may reserve the studio with one of our in-house engineers or with your own engineer/producer.
                            </Card.Text>
                            <Card.Text>
                                We offer hourly and daily sessions starting at $65/hr as well as long-term monthly rentals.
                            </Card.Text>
                            <Button >Book</Button>
                        </Card.Body>
                    </Card>
                </Fade>


                <Fade right>
                    <img src={soundboardOne} alt="Soundboard in studio" />
                </Fade>


            </div>
            <div id="about-div-two">
                <img src={studioOne} alt="Soundboard in studio" />
                <Card id="about-card-2">
                    <Card.Body>
                        <Card.Text>
                            Our attentive staff along with our incredible team of recording engineers will ensure a smooth, hassle-free session. Our studio provides both inspiration and a comfortable space for you and your collaborators to create.
                        </Card.Text>

                        <Button >Book</Button>
                    </Card.Body>
                </Card>

            </div>
        </section>
    )

};

export default About;