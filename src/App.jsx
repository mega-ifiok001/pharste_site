import React from 'react'
import './App.css'
import Header from '../src/pages/header/header'
import Hero from '../src/pages/hero-section/hero'
import Money from '../src/pages/money/money';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
       <Header/>
       <Hero/>
       <Money/>
    </div>
  );
}

export default App
