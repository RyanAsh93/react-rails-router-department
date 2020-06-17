import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Segment, Header, Button, Form } from 'semantic-ui-react'
import ProductsForm from './ProductForm'

export default function ProductView(props) {
  const [ product, setProduct ] = useState({})
  const [ showForm, setShowForm ] = useState(false)
  
  function updateProduct(productObj) {
    setProduct(productObj)
  }

  useEffect(() => {
    Axios.get(`/api/products/${props.match.params.id}`)
    .then((res) => {
      console.log(res)
      setProduct(res.data.product)
    })
    .catch((e) => {
      console.log(e)
    })
  }, [])

  // async function handleSubmit() {
  //   console.log("submit")
  //   const res = await Axios.post(`/api/products/${product.id}`)
  // }
  
  return (
    <div>
      <Segment>
        {showForm && <ProductsForm product={product} update={updateProduct} />}
        <Button onClick={() => setShowForm(!showForm)}>Toggle Form</Button>
        <Header as="h1">{product.name}</Header>
        <Header as="h6">{product.price}</Header>
      </Segment>
    </div>
  )

}