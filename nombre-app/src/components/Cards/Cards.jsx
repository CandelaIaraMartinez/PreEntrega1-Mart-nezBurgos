import Card from 'react-bootstrap/Card';
import React from "react";
import PropTypes from "prop-types";

const Tarjeta = ({ peli }) => (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="{peli.Poster}" />
      <Card.Body>
        <Card.Title>{peli.Title}</Card.Title>
        <Card.Text>
        <h4>{`(${peli.Year})`}</h4>
        <p>{`Categoría: ${peli.Type}`}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );

  Tarjeta.propTypes = {
    peli: PropTypes.shape({
      id: PropTypes.string,
      Title: PropTypes.string,
      Year: PropTypes.string,
      Poster: PropTypes.string,
      Type: PropTypes.string,
    }).isRequired,
  };

export default Tarjeta;