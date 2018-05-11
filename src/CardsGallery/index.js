import React, { Component } from 'react';
import './index.css';
import './../App.css';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
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
                                    <img src={images['IMG-20180430-WA0005.jpg']} className="card-img-top"></img>
                                </a>
                                <div className="card-body">
                                    <h6><a href="#">Lorem Ipsum</a></h6>
                                    <p className="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card border-0 transform-on-hover">
                                <a className="lightbox" href={images['IMG-20180430-WA0006.jpg']}>
                                    <img src={images['IMG-20180430-WA0006.jpg']} className="card-img-top"></img>
                                </a>
                                <div className="card-body">
                                    <h6><a href="#">Lorem Ipsum</a></h6>
                                    <p className="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card border-0 transform-on-hover">
                                <a className="lightbox" href={images['IMG-20180430-WA0007.jpg']}>
                                    <img src={images['IMG-20180430-WA0007.jpg']} className="card-img-top"></img>
                                </a>
                                <div className="card-body">
                                    <h6><a href="#">Lorem Ipsum</a></h6>
                                    <p className="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card border-0 transform-on-hover">
                                <a className="lightbox" href={images['IMG-20180430-WA0008.jpg']}>
                                    <img src={images['IMG-20180430-WA0008.jpg']} className="card-img-top"></img>
                                </a>
                                <div className="card-body">
                                    <h6><a href="#">Lorem Ipsum</a></h6>
                                    <p className="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card border-0 transform-on-hover">
                                <a className="lightbox" href={images['IMG-20180430-WA0009.jpg']}>
                                    <img src={images['IMG-20180430-WA0009.jpg']}  className="card-img-top"></img>
                                </a>
                                <div className="card-body">
                                    <h6><a href="#">Lorem Ipsum</a></h6>
                                    <p className="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card border-0 transform-on-hover">
                                <a className="lightbox" href={images['image6.jpg']}>
                                    <img src={images['image6.jpg']}  className="card-img-top"></img>
                                </a>
                                <div className="card-body">
                                    <h6><a href="#">Lorem Ipsum</a></h6>
                                    <p className="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
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