import React from 'react'
import Alert from 'react-bootstrap/Alert';

const ItemListContainer = (props) => {
  return (
    <Alert key="success" variant="success">
        Bienvenido {props.name}
    </Alert>
  )
}

export default ItemListContainer