import React, { Component } from 'react';
import Footer from './Footer';
import Navbar from './NavBar';
import CarouselPage from './CarouselPage';
import CardGallery from './CardsGallery';
import GoogleMaps from './GoogleMaps';
import Contact from './FormRedux/Contact/containers';
import './App.css';
import ScrollableAnchor from 'react-scrollable-anchor'


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <header className="header-App"></header>
        <CarouselPage />
        <ScrollableAnchor id={'Servicos'}>
          <CardGallery />
        </ScrollableAnchor>
        <ScrollableAnchor id={'Contato'}>
          <Contact />
        </ScrollableAnchor>
        <ScrollableAnchor id={'Localizacao'}>
          <GoogleMaps />
        </ScrollableAnchor>
        <Footer />
      </div>
    );
  }
}

export default App;