import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = ({ setCart }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (

    <div className='container'>
      <h1>All Products</h1>
      <div className="row">
        {
          products.map(product => {
            return <Product key={product.id} product={product} setCart={setCart
            }></Product>
          })
        }
      </div>
    </div>
  );
};

export default Products;