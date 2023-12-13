import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProducts } from "./redux/slices/productsSlice.js";
import Main from "./components/Main.jsx";
import HomePage from "./pages/HomePage.jsx";
import MyProfile from "./pages/MyProfile.jsx";
import Cart from "./pages/Cart.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import Menu from "./pages/Menu.jsx";
import NavBar from "./components/NavBar.jsx";

import NewOrders from "./pages/NewOrders.jsx";
import PreparingOrders from "./pages/PreparingOrders.jsx";
import ReadyOrders from "./pages/ReadyOrders.jsx";

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
      <Main />
    </BrowserRouter>
  );
}

export default App;
