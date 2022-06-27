import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productsContext } from "../../contexts/productsContect";

const AddProduct = () => {
  const { createProduct } = useContext(productsContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  function handleSave() {
    const newProduct = {
      title,
      price,
      description,
      image,
    };
    if (!title.trim() || !description.trim() || !price) {
      alert("заполните поля !");
    } else {
      createProduct(newProduct);
      navigate("/products");
    }
  }

  return (
    <Container maxWidth="sm">
      <Box display={"flex"} flexDirection={"column"} marginTop={"30px"}>
        <Typography variant="h4">Add product</Typography>
        <TextField
          label="title"
          variant="outlined"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <TextField
          type="number"
          label="price"
          variant="outlined"
          value={price}
          onChange={e => setPrice(+e.target.value)}
        />
        <TextField
          label="description"
          variant="outlined"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <TextField
          label="image"
          variant="outlined"
          value={image}
          onChange={e => setImage(e.target.value)}
        />
        <Button onClick={handleSave} variant="contained">
          Save
        </Button>
      </Box>
    </Container>
  );
};

export default AddProduct;
