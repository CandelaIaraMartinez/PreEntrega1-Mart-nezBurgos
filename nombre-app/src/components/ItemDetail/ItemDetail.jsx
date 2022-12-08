import React, { useEffect, useState } from "react";
import Card from "../Cards/Cards";

const API = "http://www.omdbapi.com/?i=tt3896198&apikey=952fbfe6";

const Peliculas = () => {
  const [state, setState] = useState({
    data: [],
    busqueda: "",
    error: "",
  });

  const getPelicula = async () => {
    const res = await fetch(`${API}&s=joker`);
    const resJSON = await res.json();

    if (resJSON) {
      setState({
        data: resJSON.Search,
        error: "",
      });
    }
  };

  useEffect(() => {
    getPelicula();
  }, []);

  const mostrarPelicula = async (e) => {
    e.preventDefault();

    const respuesta = await fetch(`${API}&s=${state.busqueda}`);
    const data = await respuesta.json();

    return setState({
      data: data.Search,
      busqueda: "",
      error: "",
    });

  };

  return (
    <>
    <div>
        {state.map((Pelicula, i) => (
        <Card Pelicula={Pelicula} key={i} />
        ))}
    </div>
    </>
  );
};

export default Peliculas;