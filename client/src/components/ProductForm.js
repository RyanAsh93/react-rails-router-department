import React from 'react'
import { Form, Header } from 'semantic-ui-react'
import Axios from 'axios'

class ProductsForm extends React.Component {
  defaultValues = { name: '', price: ''}
  state = this.props.ProductsForm
  ? {...this.props.product}
  : {...this.defaultValues}

  handleSubmit = (e) => {
    e.preventDefault()
    const product = {...this.state}
    if(!product.id) {
      Axios.post('api/products', { product: product }).then((res) => {
        this.props.add(res.data)
        console.log(e)
      })
    } else {
        Axios.put(`/api/products/${product.id}`, {product: product }).then((res) => {
          this.props.update(res.data)
        })
      }
      this.setState({...this.defaultValues })
    }

    handleChange = (e) => {
      const {
        target: { name, value },
      } = e;
      this.setState({ [name]: value })
    }

    render() {
      const { name, price } = this.state

      return (
        <div>
          <Header as='h1'>New Product</Header>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group widths='equal'>
              <Form.Input 
                label='Name'
                name='name'
                placeholder="Name"
                value={name}
                onChange={this.handleChange}
                required
              />
              <Form.Input 
              label='Price'
              name='price'
              placeholder='Price'
              type='number'
              value={price}
              onChange={this.handleChange}
              />
            </Form.Group>
          <Form.Button color='green'>Submit</Form.Button>
          </Form>
        </div>
      )
  }
}

export default ProductsForm