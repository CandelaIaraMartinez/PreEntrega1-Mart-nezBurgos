import React from 'react';
import CartWidgets from '../CartWidgets/CartWidgets';
import '../../App.css';

const NavBar = () => {
  return (
    <div>
      <nav>
        Librería Constelaciones
      <ul class="App-header">
        <li>Home</li>
        <li>Libros</li>
        <li>Búsqueda</li>
      </ul>
      <CartWidgets />
      </nav>
    </div>
  );
}

export default NavBar;