import './header.css';
import { Link } from 'react-router-dom';
// import { useLocation } from "react-router";

function Header(){
return (
    <section id="navTabs">
        <ul id="tabList">
            <Link to="/" className="tabTitle">Home</Link>
            <Link to="/Services" className="tabTitle">Services</Link>
            <Link to="/Gallery" className="tabTitle">Gallery</Link>
            <Link to="/About" className="tabTitle">About</Link>
            <Link to="/Contact" className="tabTitle">Contact</Link>
        </ul>
    </section>
)
}

export default Header;