import './marketing.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import laCityTwo from "../../assets/images/la-cityscape-2-cropped.jpg";
import Fade from 'react-reveal/Fade';

function Marketing() {

    return (
        <section id="marketing">
            <div id="marketing-splash">
                <Fade bottom>
                    <div id="market-splash-text">Marketing</div>
                </Fade>
                <img src={laCityTwo} alt="LA cityscape" id="laCityIMG" />
            </div>
            <div id="marketing-cards">
                <Fade bottom>
                    <Card className="marketing-card">
                        <Card.Body>
                            <Card.Title>Booking Option 1</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </Card.Text>
                            <Button variant="primary">Book</Button>
                        </Card.Body>
                    </Card>
                    <Card className="marketing-card">
                        <Card.Body>
                            <Card.Title>Booking Option 2</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </Card.Text>
                            <Button variant="primary">Book</Button>
                        </Card.Body>
                    </Card>
                    <Card className="marketing-card">
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

export default Marketing;