import React, { Component } from 'react';
import Footer from './Footer';
import Navbar from './NavBar';
import CarouselPage from './CarouselPage';
import CardGallery from './CardsGallery';
import GoogleMaps from './GoogleMaps';
import Contact from './modules/Contact/containers';
//import FormContato from './FormContato';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <header className="header-App">
          <Navbar />
        </header>
        <CarouselPage />
        <CardGallery />
        <Contact />
        <GoogleMaps />
        <Footer />
      </div>
    );
  }
}

export default App;