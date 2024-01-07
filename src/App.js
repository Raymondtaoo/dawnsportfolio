import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import VisDev from './pages/VisDev';
import Personal from './pages/Personal';
import AboutContact from './pages/AboutContact';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';
import './styles/global.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<VisDev />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/about-contact" element={<AboutContact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
