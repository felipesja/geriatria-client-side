import Navbar from './NavBar';
import CarouselPage from './CarouselPage';
import CardGallery from './CardsGallery';
import GoogleMaps from './GoogleMaps';
import Contact from './ContactForm'
import Footer from './Footer';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <section id='header'>
          <CarouselPage />
        </section>
        <section id='galeria'>
          <CardGallery />
        </section>
        <section id='contato'>
          <Contact />
        </section>
        <section id="googlemaps">
          <GoogleMaps />
        </section>
        <Footer />
      </div>
    </Router>
  );
}

export default App;