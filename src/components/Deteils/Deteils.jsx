import { Box, Container, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";

import { useParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContect";
import Loader from "../Loader/Loader";

const Deteils = () => {
  const { id } = useParams();
  const { oneProduct, getOneProduct } = useContext(productsContext);
  useEffect(() => {
    getOneProduct(id);
  }, []);
  return oneProduct ? (
    <Container>
      <Box>
        <Typography variant="h4">{oneProduct.title}</Typography>
        <Typography variant="h4">{oneProduct.description}</Typography>
        <Typography variant="h4">{oneProduct.price}</Typography>
        <img src={oneProduct.image} width="40%" alt="product" />
      </Box>
    </Container>
  ) : (
    <Loader />
  );
};

export default Deteils;
