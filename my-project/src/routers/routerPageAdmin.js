import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import PageCategori from "../pages/catalogs/categories/pageCategori";
import PageProduct from "../pages/catalogs/products/pageProduct";
import PageOrder from "../pages/catalogs/order/pageOrder";
import PageListOrder from "../pages/catalogs/order/listOrder/pageListOrder";

export default function RouterPageAdmin(props) {
  return (
    <Switch>
      <Route path="/user/categorys" component={PageCategori} />
      <Route path="/user/products" component={PageProduct} />
      <Route path="/user/buy/order" component={PageOrder} />
      <Route path="/user/buy/list" component={PageListOrder} />
    </Switch>
  );
}
