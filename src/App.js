import React, { Component } from 'react';
import Navbar from './NavBar';
import CarouselPage from './CarouselPage';
import CardGallery from './CardsGallery';
import GoogleMaps from './GoogleMaps';
import Contact from './ContactForm'
import Footer from './Footer';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <section id='header'>
            <Navbar />
            <header className="header-App"></header>
          </section>
          <CarouselPage />
          <section id='galeria'>
            <CardGallery />
          </section>
          <section id='contato'></section>
          <Contact />
          <section id="googlemaps">
            <GoogleMaps />
          </section>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;