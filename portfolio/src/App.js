import React from 'react'
import Navbar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home"
import About from "./components/About/About";
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
