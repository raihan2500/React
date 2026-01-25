/* eslint-disable react/prop-types */
import React from 'react';

import '../index.css';

function Product(props){
  const items = props.product;
  return (
      <article className="product">
      <img className='product__img' src={items.image} alt="" />
      <div className="product__details">
        <h4 className="product__title">{items.title}</h4>
        <p className='product__price' >Price: $ {items.price}</p>
        <p className='product__rating' >Rating: product rating {items.rating.rate}/5</p>
        <p className="product__desc">Description: {items.description}</p>
        <button className="product__btn btn">Add to cart</button>
      </div>
    </article>
  );
};

export default Product;