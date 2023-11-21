import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import MyProfile from './pages/MyProfile.jsx'
import Cart from './pages/Cart.jsx'
import About from './pages/About.jsx'

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
