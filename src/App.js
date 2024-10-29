
import React from 'react';
import './App.css';
import Book from './components/Book';
import About from './components/about';
import Contact from './components/contact';
import Gallery from './components/gallery';
import Services from './components/services';


function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to the Tattoo Artist's Portfolio</h1>
        <Book />

        <nav>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      
      <main>
        <section id="about">
          <About />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer>
        <p>© 2024 Tattoo Artist Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
