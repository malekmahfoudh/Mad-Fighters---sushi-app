import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addProducts } from "./redux/slices/productsSlice.js";
import HomePage from "../pages/HomePage.jsx";
import MyProfile from "../pages/MyProfile.jsx";
import Cart from "../pages/Cart.jsx";
import About from "../pages/About.jsx";
import Login from "../pages/Login.jsx";
import Menu from "../pages/Menu.jsx";
import NavBar from "./NavBar.jsx";

import NewOrders from "../pages/NewOrders.jsx";
import PreparingOrders from "../pages/PreparingOrders.jsx";
import ReadyOrders from "../pages/ReadyOrders.jsx";

function Main() {
  const location = useLocation();

  return (
    <>
      {['/home', '/cart', '/menu'].includes(location.pathname) && <NavBar />}
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Login />} />
        <Route path="/new-orders" element={<NewOrders />} />
        <Route path="/preparing-orders" element={<PreparingOrders />} />
        <Route path="/ready-orders" element={<ReadyOrders />} />
      </Routes>
    </>
  );
}

export default Main;