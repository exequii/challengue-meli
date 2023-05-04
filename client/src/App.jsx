import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Card } from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <Card></Card>
    </div>
  )
}

export default App
