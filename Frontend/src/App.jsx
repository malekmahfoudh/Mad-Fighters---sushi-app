import React from "react";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProducts } from "./redux/slices/productsSlice.js";
import { AnimatePresence } from "framer-motion";

import HomePage from "./pages/HomePage.jsx";
import MyProfile from "./pages/MyProfile.jsx";
import Cart from "./pages/Cart.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import Menu from "./pages/Menu.jsx";
import NewOrders from "./pages/NewOrders.jsx";
import PreparingOrders from "./pages/PreparingOrders.jsx";
import ReadyOrders from "./pages/ReadyOrders.jsx";

function App() {

  const dispatch = useDispatch();
  // const location = useLocation();

  //fetch from the remote server and add the data to the redux store
  useEffect(() => {
    fetch("https://sushi-vibes.onrender.com/api/menu")
      .then((res) => res.json())
      .then((data) => {
        dispatch(addProducts(data.menu));
      });
  }, []);

  return (

      <BrowserRouter>
        <Routes>
          {/* <Switch location={location} key={location.key}> */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Login />} />
          <Route path="/new-orders" element={<NewOrders />} />
          <Route path="/preparing-orders" element={<PreparingOrders />} />
          <Route path="/ready-orders" element={<ReadyOrders />} />
          {/* </Switch> */}
        </Routes>
      </BrowserRouter>

      
  );
}

export default App;
