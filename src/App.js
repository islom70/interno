import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/main/Main'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <div className='wrapper'>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Main/>} />
          </Routes>
        
        </BrowserRouter>
    </div>
  )
}

export default App