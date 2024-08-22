import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Reviews from './components/Reviews';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navbar />
      <main className="mt-16">
        <About />
        <Services />
        <Portfolio />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
