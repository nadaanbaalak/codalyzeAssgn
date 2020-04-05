import { createStore } from "redux";
import product from "../src/reducers/products";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(product, composeWithDevTools());

export default store;
