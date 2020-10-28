import React from 'react';
import './Product.css';
import logo from './logo.svg'
//import starwars from './starwars.svg'
import Zoey from './zoey.png'


export default function Product2({ onAddToCartClick, price, title, photos }) {
  return (
    <div className="Product">
      <img src={Zoey} className="App-logo" alt="logo" />
      <h2 className="Product-title">{title}</h2>
      <div className="Product-price">${price}</div>
      <button className="Product-buy-button" onClick={onAddToCartClick}>
        Add to cart
      </button>
    </div>
  );
}
