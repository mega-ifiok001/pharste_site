import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '../src/pages/home';
import About from './pages/About';
import Features from './pages/features';
import Help from './pages/help';
import 'bootstrap/dist/css/bootstrap.min.css'; 
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/features" element={<Features />} />
                <Route path="/help" element={<Help />} />
            </Routes>
        </Router>
    );
}

export default App;