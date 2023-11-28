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
import { addProductToCart } from "./redux/slices/cart.js";

function App() {
  const dispatch = useDispatch();
  
  //fetch from the remote server and add the data to the redux store
  useEffect(()=> {
    fetch('https://sushi-vibes.onrender.com/api/menu')
    .then(res => res.json())
    .then(data => {
      dispatch(addProducts(data.menu));
      dispatch(addProductToCart(data.menu));
    })
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
