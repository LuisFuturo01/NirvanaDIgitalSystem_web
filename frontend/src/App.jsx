import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BurguerMenu from "./components/BurguerMenu";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import About from "./components/About";
import Page404 from "./components/Page404"

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <BurguerMenu />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Page404 />}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;