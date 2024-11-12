import React from 'react';

const Rating = ({ value, maximumValue = 5, color = 'gold', size = '20px' }) => {
  const filledStars = Math.floor(value);
  const hasHalfStar = value % 1 !== 0;
  const emptyStars = maximumValue - Math.ceil(value);

  const renderStars = () => {
    const stars = [];
    
    for (let i = 0; i < filledStars; i++) {
      stars.push(<span key={`filled-${i}`} style={{ color, fontSize: size }}>★</span>);
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half" style={{ color, fontSize: size }}>☆</span>);
    }
    
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} style={{ color: 'lightgray', fontSize: size }}>☆</span>);
    }
    
    return stars;
  };

  return (
    <div className="rating">
      {renderStars()}
    </div>
  );
};

export default Rating;
