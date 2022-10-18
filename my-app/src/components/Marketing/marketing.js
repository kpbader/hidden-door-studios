import './marketing.css';

import laCityTwo from "../../assets/images/la-cityscape-2-cropped.jpg";

function Marketing() {

        return(
            <section id="marketing">
                <div id="marketing-splash">
                    <div class="splash-text">Marketing</div>
                    <img src={laCityTwo} alt="LA cityscape" id="laCityIMG" />
                </div>
            </section>
        )
};

export default Marketing;