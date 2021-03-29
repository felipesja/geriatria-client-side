import React, { Component } from 'react';
import './index.css';
import './../App.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));

class CardGallery extends Component {

    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }

    render() {

        const { photoIndex, isOpen } = this.state;
        const imageIdToNotShowInThumbnail = 6;

        return (
            <section className="gallery-block cards-gallery">
                <div className="container">
                    <div className="heading">
                        <h2 className="h2-titulo">Serviços Disponíveis</h2>
                        <div className="titulo-descricao">
                            <h5>Quartos  |  Enfermarias  |  Suites  |  Mensal  |  Diárias  |  Fins de Semana</h5>
                        </div>
                        <h6>Clique em qualquer imagem para ampliar</h6>
                    </div>
                    <div className="row">
                        {images.map((img, index) => {
                            if (index !== imageIdToNotShowInThumbnail) {
                                return (
                                    <div key={index} className="col-xs-6 col-sm-6 col-md-4 col-lg-3">
                                        <div className="card border-0 transform-on-hover">
                                            <img src={img} onClick={() => this.setState({ isOpen: true, photoIndex: index })} alt='Nosso Espaço' className="thumbnail-gallery card-img-top"></img>
                                        </div>
                                    </div>
                                )
                            }

                            return null;
                        })}                   
                    </div>

                    {isOpen && (
                        <Lightbox
                            mainSrc={images[photoIndex]}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                            onMovePrevRequest={() =>
                                this.setState({
                                    photoIndex: (photoIndex + images.length - 1) % images.length,
                                })
                            }
                            onMoveNextRequest={() =>
                                this.setState({
                                    photoIndex: (photoIndex + 1) % images.length,
                                })
                            }
                        />
                    )}

                </div>
            </section>
        )
    }
}

export default CardGallery;