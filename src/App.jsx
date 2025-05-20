import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/home';
import About from './pages/About';
import Service from './pages/Service';
import Help from './pages/help';
import P2P from './pages/P2P';
import ScrollToTop from './components/scrollToTop/scrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/help" element={<Help />} />
        <Route path="/P2P" element={<P2P />} />
      </Routes>
    </Router>
  );
}

export default App;
