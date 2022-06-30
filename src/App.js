import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import CartContextProvaider from "./contexts/cartContext";
import ProductsContextProvider from "./contexts/productsContect";
import Routing from "./Routing";

const App = () => {
  return (
    <CartContextProvaider>
      <ProductsContextProvider>
        <BrowserRouter>
          <Header />
          <Routing />
        </BrowserRouter>
      </ProductsContextProvider>
    </CartContextProvaider>
  );
};

export default App;
