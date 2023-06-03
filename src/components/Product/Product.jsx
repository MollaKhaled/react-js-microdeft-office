import React from 'react';
import './Product.css';

const Product = (props) => {
  const { images, title, category, ratings, price } = props.product;
  const handleAddToCart = props.handleAddToCart;


  return (
    <div className='product'>
      <img src={images} alt="" />
      <h6 className='product-name'>{title}</h6>
      <div className='product-info'>
        <p>Price:${price}</p>
        <p>Manufacturer:{category}</p>
        <p>Rating:{ratings} Stars</p>
      </div>
      <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
        Add to Cart
      </button>

    </div>
  );
};

export default Product;