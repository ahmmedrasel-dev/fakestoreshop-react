import React from 'react';
import { Card } from 'react-bootstrap';

const Product = (props) => {
  console.log(props.product)
  const { title, image, price, category } = props.product;
  return (
    <div className="col-md-4 mb-4">
      <Card className='p-3'>
        <Card.Img style={{ height: '200px' }} className='w-50 m-auto' src={image} />
        <Card.Body>
          <Card.Title>{title.slice(0, 30) + '...'}</Card.Title>
          <h2>Price: {price} SAR</h2>
        </Card.Body>
        <Card.Body>
          <Card.Link className='btn btn-success' href="#" onClick={props.setCart}>Add to Cart</Card.Link>
          <Card.Link className='btn btn-danger' href="#">Delete</Card.Link>
          <Card.Link className='btn btn-warning' href="#">View</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;