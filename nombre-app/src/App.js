import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';

function App() {
  return (
  <>
    <NavBar />
    <ItemListContainer name='Pablo'/>
  </>
  )
}

export default App;