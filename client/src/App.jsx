import {Routes, Route, Outlet} from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { ListProducts } from './pages/ListProducts'
import { ProductDetail } from './pages/ProductDetail'

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Outlet/>}></Route>
        <Route path='/items' element={<ListProducts/>}></Route>
        <Route path='/items/:id' element={<ProductDetail/>}></Route>
      </Routes>
    </div>
  )
}

export default App


/*
*/