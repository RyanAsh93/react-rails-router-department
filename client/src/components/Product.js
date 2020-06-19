import React, { useState } from 'react'
import ProductForm from './ProductForm'
import { Button, Card } from 'semantic-ui-react'

const Product = (props) => {
  const [ editing, setEditing ] = useState(false)

  return (
    <>
    <Card.Body>
  <Card.Header>Name: {props.name}</Card.Header>
  <Card.Meta>Price: {props.price}</Card.Meta>
    </Card.Body>
    <Card.Footer>
      <Button 
        onClick={() => setEditing(!editing)}
      >
        Edit
      </Button>
      <Button 
        onClick={() => props.deleteProduct(props.id)}
      >
        Delete
      </Button>
      {editing && <ProductForm toggleEdit={setEditing} editProduct={props.editProduct}{...props} />}
    </Card.Footer>
    </>
  )
}

export default Product;
