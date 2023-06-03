import React from 'react';
import './Cart.css';

const Cart = ({cart, handleClearCart,children}) => {

  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  for(const product of cart){
 
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = totalPrice*7/100;
  const grandTotal = totalPrice + totalShipping + tax ;



  return (
    <div className='cart'>
      <h4>Order Summary</h4>
      <p>Selected Items:{quantity}</p>
      <p>Total Price:${totalPrice}</p>
      <p>Total Shipping Charge:${totalShipping}</p>
      <p>Tax:${tax.toFixed(2)}</p>
      <h4>Grand Total:${grandTotal.toFixed(2)}</h4>
      <button  onClick={handleClearCart} className='btn-clear-cart'>
        <span> Clear Cart</span>
        </button> 
    </div>
  );
};

export default Cart;