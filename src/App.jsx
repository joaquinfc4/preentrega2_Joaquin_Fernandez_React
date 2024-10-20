import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div>
      <BrowserRouter>
      <NavBar />
      
      <Routes>
        <Route path='' element={ <ItemListContainer saludo={"bienvenidos a mi e-commers"} /> } />
        <Route path='/category/:idCategory' element={ <ItemListContainer saludo="categorias" />} />
        <Route path='/detail/:idProduct' element={<ItemDetailContainer />} />

        <Route path='*' element={ <div>Error 404 - Pagina no encontrada</div> }/>
      </Routes>

      </BrowserRouter>
      
    </div>
  )
}

export default App
