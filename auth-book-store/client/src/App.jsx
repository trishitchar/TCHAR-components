import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
    </Routes>
  )
}

export default App
