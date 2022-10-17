import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./components/Home/home";
import Services from "./components/Services/services";
import Gallery from "./components/Gallery/gallery";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/Gallery" element={<Gallery />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
