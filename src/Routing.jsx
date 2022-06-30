import React from "react";
import { Route, Routes } from "react-router-dom";

import AddProduct from "./components/AddProduct/AddProduct";
import ProductsList from "./components/ProductsList/ProductsList";
import Edit from "./components/Edit/Edit";
import Deteils from "./components/Deteils/Deteils";
import Cart from "./components/Cart/Cart";

const Routing = () => {
  return (
    <Routes>
      <Route path="/products" element={<ProductsList />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/edit-product/:id" element={<Edit />} />
      <Route path="/deteils/:id" element={<Deteils />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Routing;
