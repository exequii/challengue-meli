import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Card } from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
<<<<<<< Updated upstream
      <Card></Card>
=======
      <Routes>
        <Route path='/' element={<Outlet/>}></Route>
        <Route path='/items' element={<ListProducts/>}></Route>
        <Route path='/detail' element={<ProductDetail/>}></Route>
      </Routes>
>>>>>>> Stashed changes
    </div>
  )
}

export default App
