import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Auth from "./Auth/Auth";
import Cart from "./Cart/Cart";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default AllRoutes;
