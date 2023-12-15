import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProducts } from "./redux/slices/productsSlice.js";
import Main from "./components/Main.jsx";
import { ToastContainer } from "react-toastify";
import "./styles/App.scss";

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

      <Main />
    </BrowserRouter>
  );
}

export default App;
