import './mastering.css';
import sliders from "../../assets/images/soundboard-sliders.jpeg";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Mastering() {

    return (
        <section id="mastering">
            <div id="mastering-splash">
                <div className="splash-text">Mastering</div>
                <img src={sliders} alt="sound board" id="sliderIMG" />
            </div>
            <div id="mastering-cards">
                <Card className="mastering-card">
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>Booking Option 1</Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </Card.Text>
                        <Button variant="primary">Book</Button>
                    </Card.Body>
                </Card>
                <Card className="mastering-card">
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>Booking Option 2</Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </Card.Text>
                        <Button variant="primary">Book</Button>
                    </Card.Body>
                </Card>
                <Card className="mastering-card">
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>Booking Option 3</Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </Card.Text>
                        <Button variant="primary">Book</Button>
                    </Card.Body>
                </Card>
            </div>
        </section>
    )
};

export default Mastering;

