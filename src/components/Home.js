import React, { useEffect } from 'react';
// import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';

export default function Home() {

  return (
    <MDBContainer>
      <MDBCarousel showIndicators showControls fade>
        <MDBCarouselItem itemId={1}>
          <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg' className='d-block w-100' alt='...' />
          <MDBCarouselCaption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={2}>
          <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg' className='d-block w-100' alt='...' />
          <MDBCarouselCaption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={3}>
          <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg' className='d-block w-100' alt='...' />
          <MDBCarouselCaption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarousel>

      <MDBRow className="mt-4">
        <MDBCol>
          <MDBCard>
            <MDBCardImage style={{ height: '200px', width: '406px' }} src="./images/ai.jpg" alt="Card image cap" top />
            <MDBCardBody>
              <MDBCardTitle>Card title - 0</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBCardImage style={{ height: '200px', width: '406px' }} src="./images/bitcoin.jpg" alt="Card image cap" top />
            <MDBCardBody>
              <MDBCardTitle>Card title - 1</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBCardImage style={{ height: '200px', width: '406px' }} src="./images/board.jpg" alt="Card image cap" top />
            <MDBCardBody>
              <MDBCardTitle>Card title - 2</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
