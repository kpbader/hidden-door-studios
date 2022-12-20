import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./components/Home/home";
import Header from "./components/Header/header";
import Gallery from "./components/Gallery/gallery";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Book from "./components/Book/book";
import Footer from "./components/Footer/footer";
import React from 'react';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/hidden-door-studios" element={<Home />}></Route>
          <Route path="/Gallery" element={<Gallery />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Book" element={<Book />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
