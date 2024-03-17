import React from 'react';
// import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';

export default function Home() {

  return (
    <MDBContainer>
      <MDBCarousel showIndicators showControls fade>
        <MDBCarouselItem itemId={1}>
          <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg' className='d-block w-100' alt='...' />
          <MDBCarouselCaption>
            <h5>Downtown Loft with Skyline Views</h5>
            <p>Modern loft located in downtown area with breathtaking skyline views. Features include high ceilings, exposed brick, and rooftop terrace.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={2}>
          <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg' className='d-block w-100' alt='...' />
          <MDBCarouselCaption>
            <h5>Seaside Cottage with Private Dock</h5>
            <p>Quaint cottage by the sea with private dock. Ideal for boating enthusiasts and those seeking a peaceful coastal retreat.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={3}>
          <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg' className='d-block w-100' alt='...' />
          <MDBCarouselCaption>
            <h5>Country Estate with Vineyard</h5>
            <p>Expansive estate set amidst rolling hills and vineyards. Features include wine cellar, guest house, and stunning sunset views.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarousel>

      <MDBRow className="mt-4 mb-4">
        <MDBCol>
          <MDBCard>
            <MDBCardImage style={{ height: '200px', width: '414px' }} src="./images/modern-apartment.jpg" alt="Card image cap" top />
            <MDBCardBody>
              <MDBCardTitle>Modern Apartment in Downtown</MDBCardTitle>
              <MDBCardText>
                Spacious and modern apartment located in the heart of downtown. 
                Features include open floor plan, large windows, and stunning city views.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBCardImage style={{ height: '200px', width: '414px' }} src="./images/luxury-villa.jpg" alt="Card image cap" top />
            <MDBCardBody>
              <MDBCardTitle>Luxury Villa with Ocean View</MDBCardTitle>
              <MDBCardText>
              Luxurious villa overlooking the ocean. 
              This stunning property features high-end finishes, infinity pool, and private beach access.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBCardImage style={{ height: '200px', width: '414px' }} src="./images/cozy-mountain-cabin.jpg" alt="Card image cap" top />
            <MDBCardBody>
              <MDBCardTitle>Cozy Mountain Cabin</MDBCardTitle>
              <MDBCardText>
              Large family home with plenty of room for entertaining. Features include gourmet kitchen, landscaped backyard, and bonus room.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
