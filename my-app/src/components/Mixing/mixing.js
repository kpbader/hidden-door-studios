import './mixing.css';
import mixer from "../../assets/images/mixer-cropped-1.png";

function Mixing() {
    return (
        <section id="mixing">
            <div id="mixing-splash">
                <div class="splash-text">Mixing</div>
                <img src={mixer} alt="mixer" id="mixerIMG" />
            </div>
        </section>
    )
};

export default Mixing;