import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from "./components/productList";
import UpdateProductForm from "./components/productUpdateForm";

import "./App.css";

//Redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/edit-product" component={UpdateProductForm} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
