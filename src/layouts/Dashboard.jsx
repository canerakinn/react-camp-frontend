import React from "react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import Navi from "./Navi";
import { Grid, GridColumn, GridRow, Image } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <GridRow>
          <GridColumn width={4}>
            <Categories></Categories>
          </GridColumn>
          <GridColumn width={12}>
            <Routes>
              <Route exact path="/" element={<ProductList></ProductList>} />
              <Route exact path="/products" element={<ProductList></ProductList>} />
              <Route path="/products/:name" element={<ProductDetail></ProductDetail>} />
              <Route path="/cart" element={<CartDetail></CartDetail>} />
            </Routes>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}
