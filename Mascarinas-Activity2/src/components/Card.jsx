import React from 'react';
import Rating from './Rating';

const Card = ({ title, price, imageUrl, ratingValue, maxRating, onAddToCart }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <p className="card-price">${price.toFixed(2)}</p>
        <Rating value={ratingValue} maximumValue={maxRating} color="gold" size="20px" />
        <button className="add-to-cart-btn" onClick={onAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
