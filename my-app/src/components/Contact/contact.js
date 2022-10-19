import './contact.css';
import jT from '../../assets/images/joshua-tree-1.jpg';

function Contact() {

    return (
        <section id="contact-section">
            <div id="contact-splash">
                <div className="splash-text">Contact</div>
                <img src={jT} alt="joshua tree" id="sliderIMG" />
            </div>
            <div id="contact">
                {/* <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12182.30520634488!2d-74.0652613!3d40.2407219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1561060983193!5m2!1sen!2sus"
                    frameborder="0" style="border:0" allowfullscreen>
                </iframe> */}
            </div>
        </section>
    )
};

export default Contact;