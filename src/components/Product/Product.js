import React from 'react';
import './Product.css';
import logo from './logo.svg'
//import starwars from './starwars.svg'
import starwars from './starwars.png'
import Product2 from './Product2';


export default function Product({ onAddToCartClick, price, title, photos }) {
  return (
    <div className="Product">
      <img src={starwars} className="App-logo" alt="logo" />
      <h2 className="Product-title">{title}</h2>
      <div className="Product-price">${price}</div>
      <button className="Product-buy-button" onClick={onAddToCartClick}>
        Add to cart
      </button>
    </div>
  );
}
