import './gallery.css';
import keys from '../../assets/images/IMG_2907.jpeg';
import micOne from '../../assets/images/IMG_2381.jpeg';
import speaker from '../../assets/images/IMG_2897.jpeg';
import guitarPair from '../../assets/images/IMG_2380.jpeg';
import pinkRoom from '../../assets/images/IMG_2378.jpeg';
import equip1 from '../../assets/images/IMG_2894.jpeg';
import studio2 from '../../assets/images/IMG_2909.jpeg';
import studio3 from '../../assets/images/IMG_3018.jpeg';
// import LazyLoad from 'react-lazy-load';
import Fade from 'react-reveal/Fade';

function Gallery() {
    return (
        <section id="gallery-page">
            <Fade up>
                <h1>Gallery</h1>
            </Fade>
            <Fade bottom>
                <div id="gallery">
                    <img src={pinkRoom} alt="Pink Room" id="pinkROOM" />
                    <img src={studio2} alt="Studio" id="studioTWO" />
                    <img src={studio3} alt="Studio" id="studioTHREE" />
                    <img src={guitarPair} alt="Studio" id="guitarPAIR" />
                    <img src={micOne} alt="Studio" id="mic" />
                    <img src={keys} alt="Piano" id="keys" />
                    <img src={speaker} alt="Speaker" id="speaker1" />
                    <img src={equip1} alt="Equip" id="equip1" />
                </div>
            </Fade>
        </section>
    )
};

export default Gallery;