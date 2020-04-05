import { GET_PRODUCT, GET_PRODUCTS, UPDATE_PRODUCT } from "./types";

export const getProducts = (products) => {
  return {
    type: GET_PRODUCTS,
    payload: products,
  };
};

export const getCurrentProduct = (product) => {
  return {
    type: GET_PRODUCT,
    payload: product,
  };
};

export const updateProduct = (product) => {
  return {
    type: UPDATE_PRODUCT,
    payload: product,
  };
};
