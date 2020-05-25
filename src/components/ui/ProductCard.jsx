import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ title, id, price, imagePrimary }) => {
  return (
    <div className="product-item">
      <div className="product-item__img">
        <img
          src={imagePrimary}
          alt="product"
        />
      </div>
      <div className="product-item__info">
        <h3 className="product-title heading-tertiary ">{title}</h3>
        <span className="product-price">
          $
          {price}
        </span>
      </div>
      <Link
        className="product-item__anchor"
        to={`/product/${id}`}
      >
        Link to product detail page
      </Link>
    </div>
  );
};

export default ProductCard;
