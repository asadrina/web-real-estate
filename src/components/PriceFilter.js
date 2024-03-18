import React, { useState } from 'react';
import Rating from './Rating';

const PriceFilter = ({ sortBy, onChange }) => {
  const [currentSortBy, setCurrentSortBy] = useState(sortBy);
  const [hasFilter, setHasFilter] = useState(false);

  const handleSortByChange = (event) => {
    const newSortBy = event.target.value;
    setCurrentSortBy(newSortBy);
    setHasFilter(true);
    onChange(newSortBy);
  };

  const handleClearFilter = () => {
    setCurrentSortBy('');
    setHasFilter(false);
    onChange('');
  };

  return (
    <div className="bg-light p-4 rounded shadow-sm">
      <div className="d-flex align-items-center justify-content-between">
        <div>
          {/* <label htmlFor="sort-by" className="text-left">Sort By:</label> */}
          <h2> Filter Properties</h2>
          <div className="form-check text-left p-2" style={{textAlign: "left"}}>
            <input className="form-check-input" type="radio" name="sort-by" id="sort-by-price-asc" value="price-asc" checked={currentSortBy === 'price-asc'} onChange={handleSortByChange} />
            <label className="form-check-label" htmlFor="sort-by-price-asc">
              Price (Ascending)
            </label>
          </div>
          <div className="form-check text-left p-2" style={{textAlign: "left"}}>
            <input className="form-check-input" type="radio" name="sort-by" id="sort-by-price-desc" value="price-desc" checked={currentSortBy === 'price-desc'} onChange={handleSortByChange} />
            <label className="form-check-label" htmlFor="sort-by-price-desc">
              Price (Descending)
            </label>
          </div>
          <div className="form-check text-left p-2" style={{textAlign: "left"}}>
            <input className="form-check-input" type="radio" name="sort-by" id="sort-by-rating" value="rating" checked={currentSortBy === 'rating'} onChange={handleSortByChange} />
            <label className="form-check-label text-left" htmlFor="sort-by-rating">
              Rating
            </label>
          </div>
          <div className="form-check text-left p-2" style={{textAlign: "left"}}>
            <input className="form-check-input" type="radio" name="sort-by" id="sort-by-stock" value="stock" checked={currentSortBy === 'stock'} onChange={handleSortByChange} />
            <label className="form-check-label" htmlFor="sort-by-stock">
              Out of Stock
            </label>
          </div>
        <div className='mt-4'>
          {hasFilter && (
            <button onClick={() => handleClearFilter()} className="btn btn-primary">
              Clear Filter
            </button>
          )}
        </div>
        </div>
      </div>
      {/* {currentSortBy === 'rating' && (
        <div className="mt-3">
          <Rating rating={4.5} />
        </div>
      )} */}
    </div>
  );
};

export default PriceFilter;