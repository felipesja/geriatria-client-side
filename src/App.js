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
      <div>
        <a 
          href="https://api.whatsapp.com/send?phone=5521993960900&text=Ol%C3%A1,%20vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es" 
          rel="noopener noreferrer" 
          className="whatsapp-container" 
          target="_blank"
        >
          <i className="fa fa-whatsapp whatsapp-icon"></i>
        </a>
      </div>
    </Router>
  );
}

export default App;