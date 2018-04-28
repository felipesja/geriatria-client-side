import React, { Component } from 'react';
import './index.css';

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
                        <h2>Nossos Serviços</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="card border-0 transform-on-hover">
                                <a className="lightbox" href={images['image1.jpg']}>
                                    <img src={images['image1.jpg']} className="card-img-top"></img>
                                </a>
                                <div className="card-body">
                                    <h6><a href="#">Lorem Ipsum</a></h6>
                                    <p className="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card border-0 transform-on-hover">
                                <a className="lightbox" href={images['image2.jpg']}>
                                    <img src={images['image2.jpg']} className="card-img-top"></img>
                                </a>
                                <div className="card-body">
                                    <h6><a href="#">Lorem Ipsum</a></h6>
                                    <p className="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card border-0 transform-on-hover">
                                <a className="lightbox" href={images['image3.jpg']}>
                                    <img src={images['image3.jpg']} className="card-img-top"></img>
                                </a>
                                <div className="card-body">
                                    <h6><a href="#">Lorem Ipsum</a></h6>
                                    <p className="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card border-0 transform-on-hover">
                                <a className="lightbox" href={images['image4.jpg']}>
                                    <img src={images['image4.jpg']} className="card-img-top"></img>
                                </a>
                                <div className="card-body">
                                    <h6><a href="#">Lorem Ipsum</a></h6>
                                    <p className="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card border-0 transform-on-hover">
                                <a className="lightbox" href={images['image5.jpg']}>
                                    <img src={images['image5.jpg']}  className="card-img-top"></img>
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