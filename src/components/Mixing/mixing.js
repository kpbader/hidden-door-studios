import './mixing.css';
import mixer from "../../assets/images/mixer-cropped-1.png";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Fade from 'react-reveal/Fade';

function Mixing() {
    return (
        <section id="mixing">
            <div id="mixing-splash">
                <Fade bottom>
                    <div id="mix-splash-text">Mixing</div>
                </Fade>
                <img src={mixer} alt="mixer" id="mixerIMG" />
            </div>
            <div id="mixing-cards">
                <Fade bottom>
                    <Card className="mixing-card">
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            <Card.Title>Booking Option 1</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </Card.Text>
                            <Button variant="primary">Book</Button>
                        </Card.Body>
                    </Card>
                    <Card className="mixing-card">
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            <Card.Title>Booking Option 2</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </Card.Text>
                            <Button variant="primary">Book</Button>
                        </Card.Body>
                    </Card>
                    <Card className="mixing-card">
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

export default Mixing;