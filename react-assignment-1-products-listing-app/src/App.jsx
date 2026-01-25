import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import './index.css';

import React from 'react';

import Products from './components/Products';
import Product from './components/Product';
const products = [
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800',
    rating: {
      rate: 3.9,
      count: 120
    }
  },
  {
    id: 2,
    title: 'Mens Casual Premium Slim Fit T-Shirts ',
    price: 22.3,
    description:
      'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.',
    category: "men's clothing",
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800',
    rating: {
      rate: 4.1,
      count: 259
    }
  },
  {
    id: 3,
    title: 'Mens Cotton Jacket',
    price: 55.99,
    description:
      'Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions such as hiking, camping and traveling.',
    category: "men's clothing",
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800',
    rating: {
      rate: 4.7,
      count: 500
    }
  },
  {
    id: 4,
    title: 'Mens Casual Slim Fit',
    price: 15.99,
    description:
      'Please note that body builds vary by person, therefore detailed size information should be reviewed.',
    category: "men's clothing",
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800',
    rating: {
      rate: 2.1,
      count: 430
    }
  },
  {
    id: 5,
    title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "Inspired by the mythical water dragon that protects the ocean's pearl. Wear inward for love and abundance.",
    category: 'jewelery',
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800',
    rating: {
      rate: 4.6,
      count: 400
    }
  },
  {
    id: 6,
    title: 'Solid Gold Petite Micropave ',
    price: 168,
    description:
      'Satisfaction Guaranteed. Return or exchange any order within 30 days.',
    category: 'jewelery',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800',
    rating: {
      rate: 3.9,
      count: 70
    }
  }
];


function App() {
  return (
    <div>
      <h1>BD Store</h1>
      <Products c products = {products}/>
    </div>
  );
};

export default App
