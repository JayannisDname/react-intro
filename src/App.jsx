import { CssBaseline } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import { PRODUCTS_DATA } from "./data/products";
import { useState } from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

function App() {
  const [products, setProducts] = useState(PRODUCTS_DATA);
  const [cartItems, setCartItems] = useState([]);

  const addedCart = (product) => {
    setCartItems(
      cartItems.map((ci) => {
        if (ci.product.id === product.id) {
          return {
            ...ci,
            quantity: ci.quantity + 1,
          };
        } else {
          return {};
        }
      })
    );
  };

  return (
    <>
      <NavBar cartItemCount={cartItems.length} ml={3} />
      <Container>
        <Products onCartItems={addedCart} products={products} />
      </Container>
    </>
  );
}

export default App;
