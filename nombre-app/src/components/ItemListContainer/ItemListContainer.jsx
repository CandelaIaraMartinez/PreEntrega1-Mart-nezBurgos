import React, { useEffect, useState } from "react";

const API = "http://www.omdbapi.com/?i=tt3896198&apikey=952fbfe6";

const ItemListContainer = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
    searchTerm: "",
    error: "",
  });

  const getPelicula = async () => {
    const res = await fetch(`${API}&s=robot`);
    const resJSON = await res.json();

    if (resJSON) {
      setState({
        data: resJSON.Search,
        loading: false,
        error: "",
      });
    }
  };

  useEffect(() => {
    getPelicula();
  }, []);

  const mostrarPelicula = async (e) => {
    e.preventDefault();
  
    const response = await fetch(`${API}&s=${state.searchTerm}`);
    const data = await response.json();

    return setState({
      data: data.Search,
      searchTerm: "",
      error: "",
    });
  };

  return (
    <>
      <div className="row">
        <div className="col-md-4 offset-md-4 p-4">
          <form onSubmit={mostrarPelicula}>
            <input
              type="text"
              className="form-control"
              placeholder="Buscar pelicula"
              onChange={(e) => setState({...state, searchTerm: e.target.value })}
              value={state.searchTerm}
            />
          </form>
          <p className="text-white">{state.error ? state.error : ""}</p>
        </div>
      </div>
    </>
  );
};

export default ItemListContainer