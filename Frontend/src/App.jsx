import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProducts } from "./redux/slices/productsSlice.js";
import Main from "./components/Main.jsx";
import { ToastContainer } from "react-toastify";
import "./styles/App.scss";


import NewOrders from "./pages/NewOrders.jsx";
import PreparingOrders from "./pages/PreparingOrders.jsx";
import ReadyOrders from "./pages/ReadyOrders.jsx";
import CartUpdate from "./pages/CartUpdate.jsx";
import HomePage from "./pages/HomePage.jsx";
import MyProfile from "./pages/MyProfile.jsx";
import Cart from "./pages/Cart.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import Menu from "./pages/Menu.jsx";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://sushi-vibes.onrender.com/api/menu")
      .then((res) => res.json())
      .then((data) => {
        dispatch(addProducts(data.menu));
      });
  }, []);

  return (
    <BrowserRouter>
      <ToastContainer
        className="toast-container"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/update" element={<CartUpdate />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Login />} />
        <Route path="/new-orders" element={<NewOrders />} />
        <Route path="/preparing-orders" element={<PreparingOrders />} />
        <Route path="/ready-orders" element={<ReadyOrders />} />
      </Routes>
      <Main />
    </BrowserRouter>
  );
}

export default App;
