import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addProducts } from "./redux/slices/productsSlice.js";

import NavBar from "./NavBar.jsx";

function Main() {
  const location = useLocation();

  return (
    <>
      {['/home', '/cart', '/menu'].includes(location.pathname) && <NavBar />}

    </>
  );
}

export default Main;