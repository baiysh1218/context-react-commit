import React, { useContext, useEffect } from "react";

import { useParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContect";

const Deteils = () => {
  const { id } = useParams();
  const { oneProduct, getOneProduct } = useContext(productsContext);
  useEffect(() => {
    getOneProduct(id);
  }, []);
  console.log(oneProduct);
  return <div>deteils</div>;
};

export default Deteils;
