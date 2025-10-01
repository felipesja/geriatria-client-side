import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './NavBar';
import CarouselPage from './CarouselPage';
import CardGallery from './CardsGallery';
import GoogleMaps from './GoogleMaps';
import Contact from './ContactForm';
import Footer from './Footer';
import Sobre from './Sobre';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
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
          </>
        } />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;