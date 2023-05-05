import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Routes, Route, Outlet } from 'react-router-dom'
import { ListProducts } from './pages/ListProducts'
import { ProductDetail } from './pages/ProductDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Outlet/>}></Route>
        <Route path='/items' element={<ListProducts/>}></Route>
        <Route path='/detail' element={<ProductDetail/>}></Route>
      </Routes>
    </div>
  )
}

export default App
