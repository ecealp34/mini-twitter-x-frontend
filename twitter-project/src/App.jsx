import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './components/mainpage'
import Feed from './components/Feed'

function App() {
  
  return (
  
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/feed" element={<Feed />} />
        </Routes>
    </BrowserRouter>
   
  )
}

export default App
