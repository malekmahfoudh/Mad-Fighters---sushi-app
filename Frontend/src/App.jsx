import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProducts } from "./redux/slices/productsSlice.js";
import Main from "./components/Main.jsx";



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
