import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function PropertyDetail() {
  const { property_id } = useParams();
  const [propertyData, setPropertyData] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/products/${property_id}`)
      .then(response => {
        setPropertyData(response.data);
      })
      .catch(error => {
        console.error(error);
      });

  }, [property_id]);


  if (!property_id){
    return (
       <div className='container mt-2'>
         <img src='./images/empty_cart.png' className='empty_cart_image'></img>
       </div>
    )
  }

  if (!propertyData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className='container products_display'>
      <div className='row mt-5'>
        <div className='col-lg-12 col-md-6 mb-4'>
          <div className="card">
            <img className="card-img-top mx-auto mt-2 products_detail_image" src={propertyData.image} alt="Product" style={{ height: '244px', width: '150px' }}/>
            <div className="card-body">
              <h6 className="card-text text-secondary">PRODUCT</h6>
              <h5 className='card-title'>{propertyData.title}</h5>
              <p className="card-text text-secondary">{propertyData.description}</p>
              <p className="card-text text-secondary">Price: ${propertyData.price}</p>
              {/* <p className="card-text text-secondary">Rating: {propertyData.rating.rate}</p> */}
              <button className='btn btn-success'>Proceed for Payment</button> &nbsp;&nbsp;&nbsp;
              <Link to='/' className='btn btn-danger'>Back to Properties</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
