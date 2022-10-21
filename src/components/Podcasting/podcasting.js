import './podcasting.css';
import podcast from "../../assets/images/podcast-overlay.png";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Fade from 'react-reveal/Fade';

function Podcasting() {
    return (
        <section id="podcasting">
            <div class="podcasting-splash">
                <Fade bottom>
                    <div id="pod-splash-text">Podcasting</div>
                </Fade>
                <img src={podcast} alt="podcast" id="podcastIMG" />
            </div>
            <div id="podcasting-cards">
                <Fade bottom>
                    <Card className="podcast-card">
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            <Card.Title>Booking Option 1</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </Card.Text>
                            <Button variant="primary">Book</Button>
                        </Card.Body>
                    </Card>
                    <Card className="podcast-card">
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            <Card.Title>Booking Option 2</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </Card.Text>
                            <Button variant="primary">Book</Button>
                        </Card.Body>
                    </Card>
                    <Card className="podcast-card">
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

export default Podcasting;

