import { useState } from 'react'
import Header from './components/header/Header';
import Home from './components/home/Home';
import Hover from './components/hover/Hover';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header/>
        <Home/>
        <Hover/>
    </>
  )
}

export default App
