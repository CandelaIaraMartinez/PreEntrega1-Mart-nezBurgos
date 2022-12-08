import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetail from './components/ItemDetail/ItemDetail';

function App() {
    const menus = [{
        name: 'Inicio',
        href: '/'
    },
    {
        name: 'Catálogo',
        href: '/catálogo'
    }]

    const categorias = [{
        name: 'Terror',
        id: 1
    }, {
        name: 'Romance',
        id: 2
    }, {
        name: 'Ficción',
        id: 3
    }, {
        name: 'Comedia',
        id: 4
    }]

    return(
    <BrowserRouter classname="App">
    <NavBar menus={menus} categorias={categorias}/>
    <Routes>
        <Route exact path='/' element={<ItemListContainer />}></Route>
        <Route exact path='/category/:id' element={<ItemListContainer />}></Route>
        <Route exact path='/catálogo' element={<ItemListContainer />}></Route>
        <Route exact path='/detallepelicula/:idpelicula/:nombre' element={<ItemDetail />}></Route>
    </Routes>
    </BrowserRouter>
    )
}

export default App;