import React from 'react';
import { FaStar } from 'react-icons/fa';

const Rating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<React.Fragment key={i}><FaStar className="text-warning" /></React.Fragment>);
    } else {
      stars.push(<React.Fragment key={i}><FaStar /></React.Fragment>);
    }
  }

  return <span>{stars}</span>;
};

export default Rating;