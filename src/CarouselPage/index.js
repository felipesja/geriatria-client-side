import React from "react";
import { MDBCarousel, MDBCarouselItem, MDBContainer } from "mdb-react-ui-kit";
import './index.css';
import imgBanner1 from './img/banner_1_1600x650.jpg'
import imgBanner2 from './img/banner_2_1600x650.jpg'

function CarouselPage() {
    return (
        <MDBContainer className="container-carousel">
            <MDBCarousel
                showControls
                showIndicators
            >
                <MDBCarouselItem                    
                    className="w-100 d-block"
                    itemId={1}
                    src={imgBanner1}
                    alt="First slide"
                />
                <MDBCarouselItem
                    className="w-100 d-block"
                    itemId={2}
                    src={imgBanner2}
                    alt="Second slide"
                />
            </MDBCarousel>
        </MDBContainer>
    );
}

export default CarouselPage;