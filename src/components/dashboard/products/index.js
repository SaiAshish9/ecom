import React from "react";

import { Switch, Route } from "react-router-dom";

import Products from "./products";
import ProductsDesc from "./productsdesc";

const Product = () => {
  return (
    <Switch>
      <Route exact path="/dashboard/product" component={Products} />
      <Route path="/dashboard/product/products/edit" component={ProductsDesc} />
      <Route
        path="/dashboard/product/products/edit/options"
        component={ProductsDesc}
      />
      <Route
        path="/dashboard/product/products/edit/options/edit"
        component={ProductsDesc}
      />
    </Switch>
  );
};

export default Product;
