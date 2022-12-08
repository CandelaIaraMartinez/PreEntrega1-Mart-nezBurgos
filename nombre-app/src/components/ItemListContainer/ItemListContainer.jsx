import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ItemDetail from '../ItemDetail/ItemDetail';

function Formulario() {
    return (
    <>
    <Form>
    <Form.Control onSubmit={mostrarPelicula}
    type="text" 
    placeholder="Ingrese el nombre de la película" 
    onChange={(e) => setState({...state, busqueda: e.target.value })}
    value={state.busqueda}
    />
    <Button variant="primary" type="submit"> Buscar </Button>
    </Form>
    </>
);
}

export default Formulario;