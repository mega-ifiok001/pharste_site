import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from "./components/header/header.jsx"
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
// import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
