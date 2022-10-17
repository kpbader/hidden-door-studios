import './home.css';
import lights from "../../assets/images/Video Of Bokeh Lights.mp4"

function Home() {
    return (
        <section>
            <div id="splashVideo">
                <video autoPlay muted loop >
                    <source src={lights} type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
            </div>
        </section>
    );
}

export default Home;