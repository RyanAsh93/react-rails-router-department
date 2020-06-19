import React, { useState, useEffect } from 'react';
import { Card, Header, Button } from 'semantic-ui-react';
import Axios from 'axios';
import ProductForm from './ProductForm';
import Product from './Product'
// import ProductView from './ProductView'  // DONT NEED THIS VIEW??

const Products = (props) => {
  const [products, setProducts] = useState([])
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    Axios
    .get('/api/products')
    .then((res) => {
      console.log(res)
      setProducts(res.data)
    })
    .catch((e) => {
      console.log(e)
    })
  }, [])

  const addProduct = (productObj) => {
    setProducts([productObj, ...products])
  }

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

  const editProduct = (id, product) => {
    Axios.put(`/api/products/${id}`, product)
    .then((res) => {
      const updateProduct = products.map( product => {
        if (product.id === id)
        return res.data
      })
      setProducts(updateProduct)
    })
  }

  const deleteProduct = (id) => {
    Axios.delete(`/api/products/${id}`)
    .then((res) => {
      setProducts(products.filter(product => product.id !== id))
    })
  }

  return (
    <div>
      <Header as='h1'>Expensive Produce Department</Header>
      {showForm && <ProductForm add={addProduct} toggleForm={setShowForm} />}
      <Button onClick={() => setShowForm(!showForm)}>{showForm ? 'close form' : 'Add product'}</Button>
      <br />
      <br />
      <Card.Group>{renderProducts()}</Card.Group>
    </div>
  )
}


export default Products;



/// ORIGINAL WORKING 
// return (
//   <div>
//     <Header as='h1'>Expensive Produce Department</Header>
//     {showForm && <ProductForm add={addProduct} />}
//     <Button onClick={() => setShowForm(!showForm)}>Toggle Form</Button>
//     <br />
//     <br />
//     <Card.Group>{renderProducts()}</Card.Group>
//   </div>
// )



// WPRK
// const renderProducts = () => {
//   if (products.length <= 0)
//   return <h2>No Products</h2>
//   return products.map( (product) => (
//     <Card key={`product${product.id}`}>
//       <Card.Content>
//         <Card.Header>{ product.name }</Card.Header>
//         <Card.Meta>{ product.price }</Card.Meta>
//       </Card.Content>
//     </Card>
//   ))