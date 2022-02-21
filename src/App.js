import "./App.css";
import { commerce } from "./lib/commerce";
import { NavBar, Products, Cart, Checkout } from "./components";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  //this state is to fetch our products
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  //this function fetches the products we have in the Commerce.js
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();

    setCart(cart);
  };

  //This function is responsible for adding the items into the Cart object
  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
  };

  // to add quantity of a specific item inside the Cart's
  const handleUpdateCartQuantity = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };

  // to remove quantity of a specific item inside the Cart's
  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };

  // to reset the whole cart to 0
  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  // After we are done with the payment, we need to refresh the cart.
  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  //Similar to componentDidMount in class base component,
  // useEffect loads the function upon loading the application.
  //  That's why it is placed inside App.js itself
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  // console.log(products);
  console.log(cart);
  return (
    <Router>
      <div>
        <NavBar totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <Products products={products} onAddToCart={handleAddToCart} />
          </Route>
          <Route path="/cart">
            <Cart
              handleUpdateCartQuantity={handleUpdateCartQuantity}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
              cart={cart}
            />
          </Route>
          <Route exact path="/checkout">
            <Checkout
              cart={cart}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              onRefreshCart={refreshCart}
              error={errorMessage}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
