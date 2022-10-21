import './instrumentals.css';
import lights from '../../assets/images/string-lights-overlay.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Fade from 'react-reveal/Fade';

function Instrumentals() {
    return (
        <section id="instrumentals">
            <div id="instrumentals-splash">
                <Fade bottom>
                    <div id="i-splash-text">Instrumentals</div>
                </Fade>
                <img src={lights} alt="lights" id="lightsIMG" />
            </div>
            <div id="instrumentals-cards">
                <Fade bottom>
                    <Card className="instrumental-card">
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            <Card.Title>Booking Option 1</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </Card.Text>
                            <Button variant="primary">Book</Button>
                        </Card.Body>
                    </Card>
                    <Card className="instrumental-card">
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            <Card.Title>Booking Option 2</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </Card.Text>
                            <Button variant="primary">Book</Button>
                        </Card.Body>
                    </Card>
                    <Card className="instrumental-card">
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            <Card.Title>Booking Option 3</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </Card.Text>
                            <Button variant="primary">Book</Button>
                        </Card.Body>
                    </Card>
                </Fade>
            </div>
        </section>
    )

};

export default Instrumentals;