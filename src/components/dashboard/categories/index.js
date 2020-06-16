import React from "react";
import { Switch, Route } from "react-router-dom";
import Categories from "./categories";
import CategoriesDesc from "./categoriesdesc";

const Category = () => {
  return (
    <Switch>
      <Route  exact path="/dashboard/categories" component={Categories} />
      <Route  path="/dashboard/categories/edit" component={CategoriesDesc} />
    </Switch>
  );
};

export default Category;
