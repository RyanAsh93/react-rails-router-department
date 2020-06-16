import React, { useState, useEffect } from 'react';
import { Card, Header } from 'semantic-ui-react';
import axios from 'axios';

const Products = (props) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
    .get('/api/products')
    .then((res) => {
      console.log(res)
      setProducts(res.data)
    })
    .catch((e) => {
      console.log(e)
    })
  }, [])

const renderProducts = () => {
  if (products.length <= 0)
  return <h2>No Products</h2>
  return products.map( (product) => (
    <Card key={`product${product.id}`}>
      <Card.Content>
        <Card.Header>{ product.name }</Card.Header>
        <Card.Meta>{ product.price }</Card.Meta>
      </Card.Content>
    </Card>
  ))
}


  return (
    <div>
      <Header as='h1'>Expensive Produce Department</Header>
      <br />
      <Card.Group>{renderProducts()}</Card.Group>
    </div>
  )
}


export default Products;