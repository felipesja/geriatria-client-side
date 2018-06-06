import React, { Component } from 'react';
import './index.css';
import './../App.css';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));


class CardGallery extends Component {

    render() {
        return (
            <section className="gallery-block cards-gallery">
                <div className="container">
                    <div className="heading">
                        <h2 className="h2-titulo">Serviços Disponíveis</h2>
                        <div className="titulo-descricao">Clique nos cartões para visualizar mais fotos</div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="card border-0 transform-on-hover">
                                <a className="lightbox" href={images['IMG-20180430-WA0005.jpg']}>
                                    <img src={images['IMG-20180430-WA0005.jpg']} alt='Card Serviço' className="card-img-top"></img>
                                </a>
                                <div className="card-body">
                                    <h6><a href="/">Quartos</a></h6>
                                    <p className="text-muted card-text">Fotos em breve...</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card border-0 transform-on-hover">
                                <a className="lightbox" href={images['IMG-20180430-WA0006.jpg']}>
                                    <img src={images['IMG-20180430-WA0006.jpg']} alt='Card Quarto' className="card-img-top"></img>
                                </a>
                                <div className="card-body">
                                    <h6><a href="/">Enfermaria</a></h6>
                                    <p className="text-muted card-text">Fotos em breve...</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card border-0 transform-on-hover">
                                <a className="lightbox" href={images['IMG-20180430-WA0007.jpg']}>
                                    <img src={images['IMG-20180430-WA0007.jpg']} alt='Card Enfermaria' className="card-img-top"></img>
                                </a>
                                <div className="card-body">
                                    <h6><a href="/">Suites</a></h6>
                                    <p className="text-muted card-text">Fotos em breve...</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card border-0 transform-on-hover">
                                <a className="lightbox" href={images['IMG-20180430-WA0008.jpg']}>
                                    <img src={images['IMG-20180430-WA0008.jpg']} alt='Card Suites' className="card-img-top"></img>
                                </a>
                                <div className="card-body">
                                    <h6><a href="/">Recreação</a></h6>
                                    <p className="text-muted card-text">Fotos em breve...</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card border-0 transform-on-hover">
                                <a className="lightbox" href={images['IMG-20180430-WA0009.jpg']}>
                                    <img src={images['IMG-20180430-WA0009.jpg']} alt="Card Recreação" className="card-img-top"></img>
                                </a>
                                <div className="card-body">
                                    <h6><a href="/">Ludoterapia</a></h6>
                                    <p className="text-muted card-text">Fotos em breve...</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card border-0 transform-on-hover">
                                <a className="lightbox" href={images['IMG-20180430-WA0005.jpg']}>
                                    <img src={images['IMG-20180430-WA0005.jpg']} alt="Card Ludoterapia" className="card-img-top"></img>
                                </a>
                                <div className="card-body">
                                    <h6><a href="/">Fotos Gerais</a></h6>
                                    <p className="text-muted card-text">Fotos em breve...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default CardGallery;