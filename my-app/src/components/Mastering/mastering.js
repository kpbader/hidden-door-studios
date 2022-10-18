import './mastering.css';
import sliders from "../../assets/images/soundboard-sliders.jpeg";

function Mastering() {

    return (
        <section id="mastering">
            <div id="mastering-splash">
                <div class="splash-text">Mastering</div>
                <img src={sliders} alt="sound board" id="sliderIMG" />
            </div>
        </section>
    )
};

export default Mastering;

