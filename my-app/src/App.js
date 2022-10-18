import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./components/Home/home";
import Header from "./components/Header/header";
import Mastering from "./components/Mastering/mastering";
import Mixing from "./components/Mixing/mixing";
import Instrumentals from "./components/Instrumentals/instrumentals";
import Podcasting from "./components/Podcasting/podcasting";
import Marketing from "./components/Marketing/marketing";
import Gallery from "./components/Gallery/gallery";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Mastering" element={<Mastering />}></Route>
          <Route path="/Mixing" element={<Mixing />}></Route>
          <Route path="/Instrumentals" element={<Instrumentals />}></Route>
          <Route path="/Podcasting" element={<Podcasting />}></Route>
          <Route path="/Marketing" element={<Marketing />}></Route>
          <Route path="/Gallery" element={<Gallery />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
