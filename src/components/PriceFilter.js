import React, { useState } from 'react';

const PriceFilter = ({ minPrice, maxPrice, onChange }) => {
  const [currentMinPrice, setCurrentMinPrice] = useState(minPrice);
  const [currentMaxPrice, setCurrentMaxPrice] = useState(maxPrice);
  const [hasFilter, setHasFilter] = useState(false);

  const handleMinPriceChange = (event) => {
    const newMinPrice = parseInt(event.target.value, 10);
    setCurrentMinPrice(newMinPrice);
    if (newMinPrice > currentMaxPrice) {
      setCurrentMaxPrice(newMinPrice);
    }
    setHasFilter(true);
    onChange(newMinPrice, currentMaxPrice);
  };

  const handleMaxPriceChange = (event) => {
    const newMaxPrice = parseInt(event.target.value, 10);
    setCurrentMaxPrice(newMaxPrice);
    if (newMaxPrice < currentMinPrice) {
      setCurrentMinPrice(newMaxPrice);
    }
    setHasFilter(true);
    onChange(currentMinPrice, newMaxPrice);
  };

  const handleClearFilter = () => {
    setCurrentMinPrice(minPrice);
    setCurrentMaxPrice(maxPrice);
    setHasFilter(false);
    onChange(minPrice, maxPrice);
  };

  return (
    <div>
      <label htmlFor="min-price">Min Price:</label>
      <input type="range" id="min-price" name="min-price" min={minPrice} max={maxPrice} value={currentMinPrice} onChange={handleMinPriceChange} />
      <label htmlFor="max-price">Max Price:</label>
      <input type="range" id="max-price" name="max-price" min={minPrice} max={maxPrice} value={currentMaxPrice} onChange={handleMaxPriceChange} />
      {hasFilter && (
        <button onClick={() => handleClearFilter()} className="btn btn-secondary">Clear Filter</button>
      )}
    </div>
  );
};

export default PriceFilter;