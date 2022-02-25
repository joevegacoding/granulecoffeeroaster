import React from "react";
import {
  Container,
  Typography,
  Button,
  Grid,
  CircularProgress,
} from "@material-ui/core";
import useStyles from "./styles";

import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = ({
  cart,
  handleUpdateCartQuantity,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  const classes = useStyles();

  //could also be --> const isEmpty = cart.line_items.length;

  const EmptyCart = () => {
    return (
      <div className={classes.continueMessageContainer}>
        <Typography className={classes.subTitle} variatn="subtitles">
          Your Car is empty.
          <Link className={classes.link} to="/">
            {" "}
            Continue Shopping
          </Link>
        </Typography>
      </div>
    );
  };

  const FilledCart = () => {
    console.log(cart);
    return (
      <>
        <Grid className={classes.container} container spacing={3}>
          <Typography className={classes.title}>Shopping Cart</Typography>
          {cart.line_items.map((item) => (
            <Grid item xs={12} sm={12} lg={12} key={item.id}>
              <CartItem
                onUpdateCartQuantity={handleUpdateCartQuantity}
                onRemoveFromCart={handleRemoveFromCart}
                item={item}
              />
            </Grid>
          ))}
        </Grid>
        <div className={classes.cartDetails}>
          <div>
            <Typography className={classes.subTotal} variant="h4">
              Subtotal: {cart.subtotal.formatted_with_symbol}
            </Typography>
          </div>
          <div>
            <Button
              className={classes.emptyButton}
              size="large"
              type="button"
              variant="contained"
              color="secondary"
              onClick={handleEmptyCart}
            >
              Empty Cart
            </Button>
            <Button
              className={classes.checkoutButton}
              size="large"
              type="button"
              variant="contained"
              component={Link}
              to="/checkout"
              onRefreshCart={handleEmptyCart}
            >
              Checkout
            </Button>
          </div>
        </div>
      </>
    );
  };
  if (!cart.line_items)
    return (
      //to add an animation here for the loading page.
      <div className={classes.loadingContainer}>
        <Typography variant="h1" className={classes.title}>
          <CircularProgress color="inherit" />
        </Typography>
      </div>
    );
  return (
    <Container>
      <div className={classes.toobar}></div>
      <Typography className={classes.title} variant="h3">
        {cart.line_items.length === 0 ? <EmptyCart /> : <FilledCart />}
      </Typography>
    </Container>
  );
};

export default Cart;
