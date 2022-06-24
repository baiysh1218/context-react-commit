import React from "react";
import { BrowserRouter } from "react-router-dom";
import ProductsContextProvider from "./contexts/productsContect";
import Routing from "./Routing";

const App = () => {
  return (
    <ProductsContextProvider>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </ProductsContextProvider>
  );
};

export default App;
