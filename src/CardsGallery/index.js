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

        return (
            <section className="gallery-block cards-gallery">
                <div className="container">
                    <div className="heading">
                        <h2 className="h2-titulo">Serviços Disponíveis</h2>
                        <div className="titulo-descricao">Quartos  |  Enfermarias  |  Suites  |  Mensal  |  Diárias  |  Fins de Semana</div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="card border-0 transform-on-hover">                               
                                    <img src={images[0]} onClick={() => this.setState({ isOpen: true, photoIndex: 0 })} alt='Nosso Espaço' className="card-img-top"></img>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card border-0 transform-on-hover">
                                <img src={images[1]} onClick={() => this.setState({ isOpen: true, photoIndex: 1 })} alt='Nosso Espaço' className="card-img-top"></img>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card border-0 transform-on-hover">                                
                                    <img src={images[2]} onClick={() => this.setState({ isOpen: true, photoIndex: 2 })} alt='Nosso Espaço' className="card-img-top"></img>                                
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card border-0 transform-on-hover">                             
                                    <img src={images[3]} onClick={() => this.setState({ isOpen: true, photoIndex: 3 })} alt='Nosso Espaço' className="card-img-top"></img>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card border-0 transform-on-hover">
                                    <img src={images[4]} onClick={() => this.setState({ isOpen: true, photoIndex: 4 })} alt="Nosso Espaço" className="card-img-top"></img>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card border-0 transform-on-hover">
                                    <img src={images[7]} onClick={() => this.setState({ isOpen: true, photoIndex: 7 })} alt="Nosso Espaço" className="card-img-top"></img>
                            </div>
                        </div>
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