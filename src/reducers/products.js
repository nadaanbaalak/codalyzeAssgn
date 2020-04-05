import { GET_PRODUCT, GET_PRODUCTS, UPDATE_PRODUCT } from "../actions/types";
import { products } from "../React-products";

const initialState = {
  productInfo: null,
  productsList: products,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        productsList: payload,
        loading: false,
      };
    case GET_PRODUCT:
      return {
        ...state,
        productInfo: payload,
        loading: false,
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        productsList: state.productsList.map((product) =>
          product.name === payload.name
            ? {
                ...product,
                name: payload.name,
                weight: payload.weight,
                availability: payload.availability,
                productUrl: payload.productUrl,
                pricingTier: payload.pricingTier,
                priceRange: payload.priceRange,
                isEditable: payload.isEditable,
              }
            : product
        ),
        loading: false,
      };
    default:
      return state;
  }
}
