import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProperties } from '../redux/actions/propertyActions'
import PriceFilter from './PriceFilter'
import { Link } from 'react-router-dom'

export default function Properties({ cart, setCart }) {
    const properties = useSelector(state => state.properties.properties)
    const dispatch = useDispatch()
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000);
    const filteredProperties = properties.filter((property) => property.price >= minPrice && property.price <= maxPrice);

    const addToCart = (property) => {
      const existingItem = cart.find((item) => item.id === property.id);
      if (existingItem) {
        existingItem.quantity += 1;
        setCart([...cart]);
      } else {
        setCart([...cart, { ...property, quantity: 1 }]);
      }
    };
    const handlePriceChange = (newMinPrice, newMaxPrice) => {
        setMinPrice(newMinPrice);
        setMaxPrice(newMaxPrice);
    };

    React.useEffect(() => {
        dispatch(fetchProperties());
    }, [dispatch]);

    return (
        <div className="row">
            <PriceFilter minPrice={minPrice} maxPrice={maxPrice} onChange={handlePriceChange} />
            {filteredProperties.map((property) => (
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card">
                        <div className="d-flex justify-content-center align-items-center" style={{ height: '150px' }}>
                            <img src={property.image} className="card-img-top" alt={property.title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{property.title}</h5>
                            <p className="card-text">Price: ${property.price}</p>
                            <button className="btn btn-primary mr-2" onClick={() => addToCart(property)} style={{marginRight:'20px'}}>Add to Cart</button>
                            <Link to={property.id+''} className='btn btn-info'>View Details</Link>
                        </div>
                    </div>
                </div>
            ))}
            {/* <CartTable cart={cart} /> */}
        </div>
        
    )
}