import './gallery.css';
import bookShelves from '../../assets/images/book-shelves.jpg';
import drumSet from '../../assets/images/drums.jpg';
// import equip1 from '../../assets/images/equipment-1.jpg';
import guitarPair from '../../assets/images/guitar-pair.jpg';
import shawPiano from '../../assets/images/shaw-piano.jpg';
// import '../../assets/images/sound-booth.jpg'
import studio2 from '../../assets/images/studio-2.jpg';
import studio3 from '../../assets/images/studio-3.jpg';
import LazyLoad from 'react-lazy-load';
import Fade from 'react-reveal/Fade';

function Gallery() {
    return (
        <section id="gallery">
            <div id="galleryRow1">
                <Fade bottom>
                    <LazyLoad>
                        <img src={shawPiano} alt="Piano" id="shawPIANO" />
                    </LazyLoad>
                    <LazyLoad>
                        <img src={studio2} alt="Studio" id="studioTWO" />
                    </LazyLoad>
                </Fade>
            </div>
            <div id="galleryRow2">
                <Fade bottom>
                    <LazyLoad>
                        <img src={studio3} alt="Piano" id="studioTHREE" />
                    </LazyLoad>
                    <LazyLoad>
                        <img src={guitarPair} alt="Studio" id="guitarPAIR" />
                    </LazyLoad>
                </Fade>
            </div>
            <div id="galleryRow3">
                <Fade bottom>
                    <LazyLoad>
                        <img src={drumSet} alt="Piano" id="drumSET" />
                    </LazyLoad>
                    <LazyLoad>
                        <img src={bookShelves} alt="Studio" id="bookSHELVES" />
                    </LazyLoad>
                </Fade>
            </div>

        </section>
    )
};

export default Gallery;