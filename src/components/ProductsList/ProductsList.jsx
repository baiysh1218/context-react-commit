import { Box, Container, Pagination, Slider, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContect";
import ProductCatd from "../ProductCard/ProductCard";

const ProdactsList = () => {
  const { products, getProducts, pages } = useContext(productsContext);

  const [serchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(
    serchParams.get("q") ? serchParams.get("q") : ""
  );

  const [currentPage, setCurrentPage] = useState(
    serchParams.get("_page") ? +serchParams.get("_page") : 1
  );

  useEffect(() => {
    getProducts();
  }, []);

  const [price, setPrice] = useState([1, 100000]);

  useEffect(() => {
    setSearchParams({
      q: search,
      _page: currentPage,
      _limit: 2,
      price_gte: price[0], // g-greater, e - equal
      price_lte: price[1], // l - less, e - equal
    });
  }, [search, currentPage, price]);

  useEffect(() => {
    getProducts();
  }, [serchParams]);
  console.log(window.location.search);
  return (
    <Container>
      <Box>
        <TextField
          value={search}
          onChange={e => setSearch(e.target.value)}
          label="Search"
          variant="outlined"
        />
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={price}
          onChange={(e, value) => {
            console.log(value);
            setPrice(value);
          }}
          valueLabelDisplay="auto"
          // getAriaValueText={valuetext}
          min={0}
          max={100000}
          step={1000}
        />
      </Box>
      <Box>
        {products.map(item => (
          <ProductCatd key={item.id} item={item} />
        ))}
      </Box>
      <Box>
        <Pagination
          onChange={(event, page) => {
            setCurrentPage(page);
          }}
          page={currentPage}
          count={+pages}
          color="primary"
        />
      </Box>
    </Container>
  );
};

export default ProdactsList;
