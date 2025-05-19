import React, { useState, useMemo } from 'react';
import './index.css';
import './../App.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/)).map(img => ({ src: img }));

function CardsGallery() {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    // Seleciona 8 índices aleatórios para as thumbnails
    const randomIndexes = useMemo(() => {
        const indexes = [...Array(images.length).keys()];
        return indexes
            .sort(() => Math.random() - 0.5)
            .slice(0, 8);
    }, []);

    return (
        <section className="gallery-block cards-gallery">
            <div className="custom-container">
                <div className="heading">
                    <h2 className="h2-titulo">Serviços Disponíveis</h2>
                    <div className="titulo-descricao">
                        <h5>Quartos | Enfermarias | Suites | Mensal | Diárias | Fins de Semana</h5>
                    </div>
                    <div className="gallery-instructions">
                        <h6>
                            <i className="fas fa-images"></i> 
                            Clique em qualquer imagem para ver nossa galeria completa ({images.length} fotos)
                        </h6>
                        <small className="text-muted">
                            Use as setas para navegar entre todas as fotos
                        </small>
                    </div>
                </div>
                <div className="row">
                    {randomIndexes.map((imgIndex) => (
                        <div key={imgIndex} className="col-xs-6 col-sm-6 col-md-4 col-lg-3">
                            <div className="card border-0 transform-on-hover">
                                <div className="thumbnail-container">
                                    <img 
                                        src={images[imgIndex].src} 
                                        onClick={() => {
                                            setPhotoIndex(imgIndex);
                                            setIsOpen(true);
                                        }} 
                                        alt='Nosso Espaço' 
                                        className="thumbnail-gallery"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}                   
                </div>

                {isOpen && (
                    <Lightbox
                        open={isOpen}
                        close={() => setIsOpen(false)}
                        slides={images}
                        index={photoIndex} // Inicia o lightbox na imagem clicada
                    />
                )}
            </div>
        </section>
    );
}

export default CardsGallery;