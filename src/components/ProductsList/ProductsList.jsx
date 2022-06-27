import { Box, Container } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { productsContext } from "../../contexts/productsContect";
import ProductCatd from "../ProductCard/ProductCard";

const ProdactsList = () => {
  const { products, getProducts } = useContext(productsContext);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Container>
      <Box>
        {products.map(item => (
          <ProductCatd key={item.id} item={item} />
        ))}
      </Box>
    </Container>
  );
};

export default ProdactsList;
