import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";
import './index.css';
import imgBanner1 from './img/banner teste 1600x650.jpg'
import imgBanner2 from './img/banner teste 2 1600x650.jpg'

const CarouselPage = () => {
  return (
    <MDBContainer  className="container-carousel">
      <MDBCarousel
        activeItem={1}
        length={2}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src={imgBanner1}
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src={imgBanner2}
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>    
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;