import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import {BrowserRoute, Routes, Route} from 'react-router-dom';

function App() {
  const [libro, setLibro] =useState();
  const [libroList, setLibroList] = useState();

  const callLibro = (url) =>{
    axios.get(url).then(result =>{
      console.log(result)
      setLibro(result.data)
    }).catch(error=>{
      console.error(error)
    })
  }

  const callListLibros = () =>{
    axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=952fbfe6").then(result =>{
    console.log(result)
    setLibroList(result.data)
    console.log(libroList)
  })
}
  useEffect(() =>{
    callListLibros()
  })

  return (
  <div className="App">
  <div className="App-header">
    <NavBar />
    { libroList && <div>
      <h1>Lista de Libros</h1>
      { libroList.result.map((lib)=>{
        return(<li key={lib.url}><button onClick={(e)=>callLibro}>{lib.Title}</button></li>)
      })
    }
    </div>
    }
  </div>
  { libro && <div>
      <p>Su libro seleccionado es <strong>{libro.Title}</strong></p>
    <img src={libro.Poster}/>
    </div>
    }
  </div>
);
}

export default App;