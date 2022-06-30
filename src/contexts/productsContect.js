import React, { useReducer } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const productsContext = React.createContext();

const INIT_STATE = {
  products: [],
  oneProduct: null,
  pages: 0,
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.data,
        pages: Math.ceil(action.payload.headers["x-total-count"] / 2),
      };
    case "GET_ONE":
      return { ...state, oneProduct: action.payload };
    default:
      return state;
  }
}

const PRODUCTS_API = "http://localhost:8000/products";

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  let params = useParams();
  // ! Create
  async function createProduct(newProduct) {
    await axios.post(PRODUCTS_API, newProduct);
    getProducts();
  }
  // ! Read
  async function getProducts() {
    const res = await axios(`${PRODUCTS_API}${window.location.search}`);
    dispatch({
      type: "GET_PRODUCTS",
      payload: res,
    });
  }
  // ! Delete
  async function deleteProduct(id) {
    const res = await axios.delete(`${PRODUCTS_API}/${id}`);
    getProducts();
  }
  // ! Deteils, Get for edit
  async function getOneProduct(id) {
    const res = await axios(`${PRODUCTS_API}/${id}`);
    dispatch({
      type: "GET_ONE",
      payload: res.data,
    });
  }
  // ! Update
  async function updataProduct(id, editedProduct) {
    await axios.patch(`${PRODUCTS_API}/${id}`, editedProduct);
  }
  return (
    <productsContext.Provider
      value={{
        products: state.products,
        oneProduct: state.oneProduct,
        pages: state.pages,
        createProduct,
        getProducts,
        deleteProduct,
        getOneProduct,
        updataProduct,
      }}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;
