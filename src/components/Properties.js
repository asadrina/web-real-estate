import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProperties } from '../redux/actions/propertyActions'
import PriceFilter from './PriceFilter'
import { Link } from 'react-router-dom'
import Rating from './Rating'

export default function Properties({ cart, setCart }) {
    const properties = useSelector(state => state.properties.properties)
    const dispatch = useDispatch()
    // const [minPrice, setMinPrice] = useState(0);
    // const [maxPrice, setMaxPrice] = useState(1000000);
    const [sortBy, setSortBy] = useState('');

    const addToCart = (property) => {
      const existingItem = cart.find((item) => item.id === property.id);
      if (existingItem) {
        existingItem.quantity += 1;
        setCart([...cart]);
      } else {
        setCart([...cart, { ...property, quantity: 1 }]);
      }
    };

    // const handlePriceChange = (newMinPrice, newMaxPrice) => {
    //     setMinPrice(newMinPrice);
    //     setMaxPrice(newMaxPrice);
    // };

    const handleSortByChange = (newSortBy) => {
      setSortBy(newSortBy);
    };

    useEffect(() => {
        dispatch(fetchProperties());
    }, [dispatch]);

    const filterProperties = () => {
        // let filteredProperties = properties.filter((property) => property.price >= minPrice && property.price <= maxPrice);
        let filteredProperties = properties
        switch (sortBy) {
          case 'price-asc':
            filteredProperties = filteredProperties.sort((a, b) => a.price - b.price);
            break;
          case 'price-desc':
            filteredProperties =filteredProperties.sort((a, b) => b.price - a.price);
            break;
          case 'rating':
            filteredProperties = filteredProperties.sort((a, b) => b.rating - a.rating);
            break;
          case 'stock':
            // filteredProperties = filteredProperties.filter((property) => property.stock === false)
            filteredProperties = filteredProperties.filter(property => !property.inStock);
            break;
          default:
            break;
        }

        return filteredProperties;
    };

    const filteredProperties = filterProperties();

    useEffect(() => {
      filterProperties();
    }, [sortBy]);

    return (
        <div className="container-fluid mt-4">
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <PriceFilter onChange={handleSortByChange} sortBy={sortBy} onChangeSortBy={handleSortByChange} />
            </div>
            <div className="col-lg-9 col-md-8">
              <div className="row">
                {filteredProperties.map((property) => (
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card" style={{backgroundColor:'cornsilk'}}>
                            <div className="d-flex justify-content-center align-items-center mt-4" style={{ height: '150px' }}>
                                <img src={property.image} className="card-img-top" alt={property.title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{property.title}</h5>
                                <p className="card-text mb-0">Price: ${property.price}</p>
                                <p className="card-text">
                                <Rating rating={property.rating} />
                                </p>
                                <button className="btn btn-primary mr-2" onClick={() => addToCart(property)} style={{marginRight:'20px'}}>Add to Cart</button>
                                <Link to={property.id+''} className='btn btn-info'>View Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
    )
}