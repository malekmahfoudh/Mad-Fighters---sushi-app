import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProducts } from "./redux/slices/productsSlice.js";

import HomePage from "./pages/HomePage.jsx";
import MyProfile from "./pages/MyProfile.jsx";
import Cart from "./pages/Cart.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import Menu from "./pages/Menu.jsx";

function App() {
  const dispatch = useDispatch();
  useEffect(()=> {
    fetch('./public/menu.json')
    .then(res => res.json())
    .then(data => dispatch(addProducts(data)));
  },[]);

  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
