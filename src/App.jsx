import React from 'react'
import Home from "./pages/Home"
import Light from "./pages/Light"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/light' element={<Light/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App